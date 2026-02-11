<?php
/**
 * Corruption Monitor for visits.xml
 * 
 * This script can be:
 * 1. Called from haveAVisit() to detect corruption in real-time
 * 2. Run as a cron job to periodically check
 * 
 * Email throttling: Only sends one alert per THROTTLE_HOURS period
 */

define('CORRUPTION_LOG_FILE', 'data/corruption_log.txt');
define('LAST_ALERT_FILE', 'data/last_corruption_alert.txt');
define('THROTTLE_HOURS', 12); // Only alert once per 12 hours

/**
 * Check if a file is valid XML and detect the specific corruption pattern
 */
function check_visits_xml_integrity($file = 'data/visits.xml') {
    if (!file_exists($file)) {
        return ['valid' => false, 'error' => 'File not found', 'content' => ''];
    }
    
    $content = file_get_contents($file);
    $issues = [];
    
    // Check for the specific corruption pattern (multiple closing tags)
    $xmldata_close_count = substr_count($content, '</Xmldata>');
    if ($xmldata_close_count > 1) {
        $issues[] = "Multiple </Xmldata> tags found ($xmldata_close_count)";
    }
    
    $xmldata_open_count = substr_count($content, '<Xmldata>');
    if ($xmldata_open_count > 1) {
        $issues[] = "Multiple <Xmldata> tags found ($xmldata_open_count)";
    }
    
    // Check for orphaned Visit tags after Xmldata closes
    $pos_close = strpos($content, '</Xmldata>');
    if ($pos_close !== false) {
        $after_close = substr($content, $pos_close + strlen('</Xmldata>'));
        $after_close = trim($after_close);
        if (strlen($after_close) > 0) {
            $issues[] = "Content found after </Xmldata>: " . strlen($after_close) . " bytes";
        }
    }
    
    // Try to parse as XML
    libxml_use_internal_errors(true);
    $xml = simplexml_load_string($content);
    if ($xml === false) {
        $errors = libxml_get_errors();
        libxml_clear_errors();
        $error_msg = isset($errors[0]) ? trim($errors[0]->message) : 'Unknown parse error';
        $issues[] = "XML Parse Error: $error_msg";
    }
    
    if (count($issues) > 0) {
        return [
            'valid' => false,
            'error' => implode('; ', $issues),
            'content' => $content,
            'timestamp' => date('Y-m-d H:i:s')
        ];
    }
    
    return ['valid' => true];
}

/**
 * Log corruption to file
 */
function log_corruption($result) {
    $log_entry = "=== CORRUPTION DETECTED ===\n";
    $log_entry .= "Time: " . $result['timestamp'] . "\n";
    $log_entry .= "Error: " . $result['error'] . "\n";
    $log_entry .= "Remote IP: " . (isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 'CLI') . "\n";
    $log_entry .= "Request URI: " . (isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : 'CLI') . "\n";
    $log_entry .= "--- Content ---\n";
    $log_entry .= $result['content'] . "\n";
    $log_entry .= "--- End Content ---\n\n";
    
    file_put_contents(CORRUPTION_LOG_FILE, $log_entry, FILE_APPEND | LOCK_EX);
}

/**
 * Check if we should send an alert (throttling)
 */
function should_send_alert() {
    if (!file_exists(LAST_ALERT_FILE)) {
        return true;
    }
    
    $last_alert = (int)file_get_contents(LAST_ALERT_FILE);
    $throttle_seconds = THROTTLE_HOURS * 3600;
    
    return (time() - $last_alert) > $throttle_seconds;
}

/**
 * Mark that we sent an alert
 */
function mark_alert_sent() {
    file_put_contents(LAST_ALERT_FILE, time(), LOCK_EX);
}

/**
 * Send email alert about corruption
 */
function send_corruption_alert($result, $admin_email) {
    if (!should_send_alert()) {
        return false; // Throttled
    }
    
    $subject = "[PHORMER ALERT] visits.xml corruption detected";
    
    $body = "Corruption detected in visits.xml\n\n";
    $body .= "Time: " . $result['timestamp'] . "\n";
    $body .= "Error: " . $result['error'] . "\n";
    $body .= "Server: " . (isset($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : 'Unknown') . "\n\n";
    $body .= "--- Corrupted Content ---\n";
    $body .= $result['content'] . "\n";
    $body .= "--- End Content ---\n\n";
    $body .= "This alert is throttled to once per " . THROTTLE_HOURS . " hours.\n";
    $body .= "Check " . CORRUPTION_LOG_FILE . " for all occurrences.\n";
    
    $headers = "From: phormer-monitor@" . (isset($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : 'localhost') . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    $sent = @mail($admin_email, $subject, $body, $headers);
    
    if ($sent) {
        mark_alert_sent();
    }
    
    return $sent;
}

/**
 * Try to auto-repair from backup
 */
function attempt_auto_repair() {
    $backup_file = 'data/visits.xml.bku';
    $main_file = 'data/visits.xml';
    
    if (!file_exists($backup_file)) {
        return ['success' => false, 'error' => 'No backup file found'];
    }
    
    // Check if backup is valid
    $backup_check = check_visits_xml_integrity($backup_file);
    if (!$backup_check['valid']) {
        return ['success' => false, 'error' => 'Backup file is also corrupted'];
    }
    
    // Create emergency backup of corrupted file
    $emergency_backup = 'data/visits_corrupted_' . date('Y-m-d_H-i-s') . '.xml';
    copy($main_file, $emergency_backup);
    
    // Restore from backup
    if (copy($backup_file, $main_file)) {
        return ['success' => true, 'message' => "Restored from backup. Corrupted file saved to $emergency_backup"];
    }
    
    return ['success' => false, 'error' => 'Failed to copy backup file'];
}

/**
 * Main monitoring function - call this from haveAVisit() or cron
 */
function monitor_visits_xml($admin_email = null, $auto_repair = false) {
    $result = check_visits_xml_integrity('data/visits.xml');
    
    if (!$result['valid']) {
        // Log it
        log_corruption($result);
        
        // Try auto-repair if enabled
        $repair_result = null;
        if ($auto_repair) {
            $repair_result = attempt_auto_repair();
        }
        
        // Send email if provided
        if ($admin_email) {
            send_corruption_alert($result, $admin_email);
        }
        
        return [
            'corrupted' => true,
            'error' => $result['error'],
            'repaired' => isset($repair_result['success']) ? $repair_result['success'] : false,
            'repair_message' => isset($repair_result['message']) ? $repair_result['message'] : (isset($repair_result['error']) ? $repair_result['error'] : null)
        ];
    }
    
    return ['corrupted' => false];
}

// CLI usage
if (php_sapi_name() === 'cli' && isset($argv[0]) && basename($argv[0]) === 'corruption_monitor.php') {
    echo "Checking visits.xml integrity...\n";
    
    $admin_email = isset($argv[1]) ? $argv[1] : null;
    $auto_repair = in_array('--repair', $argv);
    
    $result = monitor_visits_xml($admin_email, $auto_repair);
    
    if ($result['corrupted']) {
        echo "❌ CORRUPTION DETECTED!\n";
        echo "Error: {$result['error']}\n";
        if ($result['repaired']) {
            echo "✅ Auto-repair: {$result['repair_message']}\n";
        }
        exit(1);
    } else {
        echo "✅ visits.xml is valid\n";
        exit(0);
    }
}
