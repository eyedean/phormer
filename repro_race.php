<?php
/**
 * Race Condition Reproducer for visits.xml corruption
 * 
 * Usage:
 *   1. Run this script: php repro_race.php
 *   2. Or open multiple browser tabs to index.php rapidly
 *   3. Or use: ab -n 100 -c 20 http://localhost/phormer/
 * 
 * This script simulates concurrent writes to demonstrate the bug.
 */

require_once('funcs.php');

// Number of parallel processes to spawn
$num_processes = 10;
$iterations = 50;

// Create test visits.xml with known content
function create_test_visits_file($with_visitors = true) {
    $content = "<?xml version='1.0' encoding='UTF-8' ?>\n<Xmldata>\n\t<Visit id=\"archive\">\n";
    
    if ($with_visitors) {
        // Add some dummy archive entries
        for ($i = 1; $i <= 5; $i++) {
            $content .= "\t\t<d20240" . sprintf("%02d", $i) . "><![CDATA[" . rand(10, 100) . "]]></d20240" . sprintf("%02d", $i) . ">\n";
        }
    }
    
    $content .= "\t</Visit>\n\t<Visit id=\"online\">\n";
    
    if ($with_visitors) {
        // Add some online visitors
        for ($i = 1; $i <= 3; $i++) {
            $ip = "192.168.1." . rand(1, 254);
            $sessid = substr(md5(rand()), 0, 32);
            $content .= "\t\t<visitor id=\"s{$ip}{$sessid}\"><![CDATA[" . time() . "]]></visitor>\n";
        }
    }
    
    $content .= "\t</Visit>\n</Xmldata>\n";
    
    file_put_contents('data/visits.xml', $content);
    return strlen($content);
}

function check_xml_validity($file) {
    if (!file_exists($file)) return ['valid' => false, 'error' => 'File not found'];
    
    $content = file_get_contents($file);
    
    // Check for the specific corruption pattern
    if (substr_count($content, '</Xmldata>') > 1) {
        return ['valid' => false, 'error' => 'CORRUPTION: Multiple </Xmldata> tags found!', 'content' => $content];
    }
    
    if (substr_count($content, '<Xmldata>') > 1) {
        return ['valid' => false, 'error' => 'CORRUPTION: Multiple <Xmldata> tags found!', 'content' => $content];
    }
    
    // Try to parse it
    libxml_use_internal_errors(true);
    $xml = simplexml_load_string($content);
    if ($xml === false) {
        $errors = libxml_get_errors();
        libxml_clear_errors();
        return array('valid' => false, 'error' => 'XML Parse Error: ' . (isset($errors[0]) ? $errors[0]->message : 'Unknown'), 'content' => $content);
    }
    
    return ['valid' => true];
}

// Simulate a visit (simplified version of haveAVisit)
function simulate_visit() {
    global $visits;
    $visits = array();
    
    // This is what index.php does
    parse_container('visits', 'Visit', 'data/visits.xml');
    
    if(!isset($visits['archive']))
        $visits['archive'] = array();
    if(!isset($visits['online']))
        $visits['online'] = array();
    
    $today = "d" . date("Ymd");
    if (!isset($visits['archive'][$today]))
        $visits['archive'][$today] = 0;
    $visits['archive'][$today]++;
    
    // Simulate random IP and session
    $ip = "s192.168.1." . rand(1, 254);
    $sessid = substr(md5(rand()), 0, 32);
    $ip .= $sessid;
    
    $visits['online'][$ip] = time();
    
    // Random cleanup of expired visitors (makes content length vary)
    if (rand(0, 10) > 5) {
        $visits['online'] = array(); // Sometimes clear all online visitors (SHORT content)
    }
    
    save_container('visits', 'Visit', 'data/visits.xml');
}

echo "=== Phormer visits.xml Race Condition Reproducer ===\n\n";

// Method 1: Fork-based (Linux/Mac)
if (function_exists('pcntl_fork')) {
    echo "Using pcntl_fork() for parallel execution...\n";
    
    for ($round = 1; $round <= $iterations; $round++) {
        // Reset the file
        $original_size = create_test_visits_file(true);
        
        $pids = [];
        for ($i = 0; $i < $num_processes; $i++) {
            $pid = pcntl_fork();
            if ($pid == 0) {
                // Child process
                usleep(rand(0, 1000)); // Random microsecond delay
                simulate_visit();
                exit(0);
            } else {
                $pids[] = $pid;
            }
        }
        
        // Wait for all children
        foreach ($pids as $pid) {
            pcntl_waitpid($pid, $status);
        }
        
        // Check for corruption
        $result = check_xml_validity('data/visits.xml');
        if (!$result['valid']) {
            echo "\n🐛 CORRUPTION DETECTED on round $round!\n";
            echo "Error: {$result['error']}\n";
            echo "------- Corrupted Content -------\n";
            echo isset($result['content']) ? $result['content'] : file_get_contents('data/visits.xml');
            echo "\n---------------------------------\n";
            exit(1);
        }
        
        echo "Round $round: OK\r";
    }
    
    echo "\n\nNo corruption detected in $iterations rounds.\n";
    echo "Try increasing iterations or processes, or use Apache Bench:\n";
    echo "  ab -n 1000 -c 50 http://localhost/phormer/\n";
} else {
    // Method 2: cURL multi (works everywhere)
    echo "pcntl not available. Use Apache Bench instead:\n";
    echo "  ab -n 1000 -c 50 http://localhost/phormer/\n\n";
    
    echo "Or run this command in multiple terminal windows simultaneously:\n";
    echo "  while true; do curl -s http://localhost/phormer/ > /dev/null; done\n\n";
    
    echo "Then run this to check for corruption:\n";
    echo "  php -r \"echo file_get_contents('data/visits.xml');\" | grep -c '</Xmldata>'\n";
    echo "  (should output 1, if >1 then corruption occurred)\n";
}
