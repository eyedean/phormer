/*
  * Help File System of Phormer (based on 3.32)
  * Language: Slovak
  * Author: Igor Serátor <igorko.s[at]gmail[dot]sk>
  *
  * Translation 1.0: April 2008
  */
function GetSkHelpMsg(s) {
	var r = "";
	var endl = "<br /> &nbsp; ";
	switch (s) {
		case "help":    //Aide 
			r = "Toto je Pomocník pre Phormer!<br />"
			//r = "This is the new Help feature of Phormer!<br />"	
				+ "&nbsp; Nájdeš tu užitočné informácie o každej položke/menu po "
				+	"kliknutí na otáznik (<a class=\"q\">?</a>) za položkou.<br />"
			    	//+ "&nbsp; You'll find useful information about each item/menu by \
					//clicking on the question mark (<a class=\"q\">?</a>) next to the item.<br />"
			    	+ "Pre zatvorenie tohto okna: <br /> <ul> "
				//+ "To dismiss this window, either <br /> <ul> "
				+ "<li> Klikni na <a class=\"bLink\" onclick=\"HideHelp();\">[Zatvor]</a></li>"
				//+ "<li> Click the <a class=\"bLink\" onclick=\"HideHelp();\">[Dismiss]</a> link </li>"
				+ "<li> Klikni hocikde mimo toto dialógové okno </li>"
				//+ "<li> Click somewhere else this dialogue box </li>"
				+ "<li> Stlač escape (Esc) na klávesnici </li>"
				//+ "<li> Hit escape (Esc) key on keyboard </li>"
				+ "</ul>";
				break;
		case "Update Message" :     //Overenie aktuálnej verzie 
			r = "Ak nechcete, aby Phormer kontroloval aktuálnosť verzie, zakážte "
			//r = "If you don't want Phormer to check for its update everytime, disable "
				+ "túto možnosť na stránke <b>Rozšírená Konfigurácia</b>  (Samozrejme až po prihlásení!)";
				//+ "this feature at <b>Advanced Configuration</b> area (of course, after logging in!)";
				break;
		case "Administration Region" :    //Administračná Zóna
			r = "Toto je kontrolný panel tvojej FotoGalérie. Odtiaľto môžeš všetko riadiť!";
			//r = "This is the control panel of your PhotoGallery. Manage everything from here!";	
				break;

		case "Default Photo Num in Box" :    //Štandardný Počet Fotografií v Boxe 
			r = "Štandardný počet fotografií pri zobrazení Jungle Box. Hodnota väčšia "
			//r = "Default number of Photos when the display mode is Jungle Box. Values higher "	
				+ "ako 50 spôsobí predĺženie načítania a taktiež oneskorenie u pomalších klientov."; 
				//+ "than 50 will cause long time to load and also delay in slow clients.";
				
				break;

		case "Default Photo Num in Recents" :   //Štandardný Počet Fotografií v Posledné
			r = "Štandardný počet fotografií v časti \"Posledne Zobrazené Fotografie\" alebo"
			//r = "Default number of Photos in the \"Recently Visited Photos\" Part or "	
				+ "\"Posledne Pridané Fotografie\". "
				//+ "\"Recently Added Photos\". "
				+ endl + "Taktiež počet fotografií v móde <b>Náhodne</b> je rovnaký ako je tu "
				//+ endl + "Also number of photos in <b>Random</b> mode is equal to what you "
				+ "nastavený.";
				//+ "set here.";
				break;
   
		case "Default Photo Num in Tops" :   //Štandardný Počet Fotografií v Naj
			r = "Štandardný počet fotografií v časti \"Najnavštevovanejšie Fotografie\" a \"Najhodnotenejšie\". ";
			//r = "Default number of Photos in the \"Most Visited Photos\" Part or \"Top Rateds\". ";	
				break;

		case "Default Story Num in mode" :    //Štandardný Počet Príbehov v móde 
			r = "Štandardný počet zobrazených príbehov v móde \"Príbeh\". Každý "
			//r = "Default Number of Stories to be displayed when the default mode is \"Story\". Each "	
				+ "Príbeh môže byť zobrazený v rade s jeho naposledy pridanými fotografiami."; 
				//+ "Story would be displayed in a row with its last added photos.";
				break;

		case "Default Story Num in Sidebar" :  //Štandardný Počet Príbehov v menu
			r = "Štandardný Počet Príbehov zobrazených v bočnom menu. Hodnota menšia ako celkový počet Príbehov "
			//r = "Default Number of Stories to be listed in sidebar box. Values less than total number "	
				+ "spôsobí, že sa v bočnom menu zobrazí odkaz s linkom \"Zobraz všetky príbehy\"." ;
				//+ "of Stories will cause a link to \"list all stories\" option to be displayed." ;
				break;

		case "Transparency Percentage" :   //Percentá transparentnosti
			r = "Percento priesvitnosti nad náhľadom; ktoré sa objaví keď na náhľad príde myš. " 
			//r = "The percentage of opacity over the thumbnails; which would be purged upon mouse-over. "
				+ endl + "Viac percent skpôsobí väčšiu tmavosť. Ak túto transparentnosť chceš zakázať, " 
				//+ endl + "More Percentage will cause more darkness. Thus, To disable this feature, "
				+ "tak nastav hodnotu na 100% (žiadna priesvitnosť).";
				//+ " just set this values to 100% (no opacity indeed).";
				break;

		case "Jpeg Compression Percentage" :  //Percentá JPEG kompresie
			r = "Pomer JPEG kompresie počas generovania náhľadov a zmien veľkosti fotografií." 
			//r = "The ratio of Jpeg Compression during generation of thumbnails and resizing images. "	
				+ "Vyššie hodnoty znamenajú vyššiu kvalitu, čo na druhej strane znamená vačšie súbory! " 
				//+ "Higher values will cause more quality but, on the other hand, heavier (size in bytes) "
				+ " Odporúčaná hodnota je 70%. "
				//+ " files! 70% is suggested. "
				+ endl + "Nastavená hodnota neovplyvní už vytvorené súbory/náhľady a bude použitá "
				//+ endl + "This value will not affect currently created files/thumbs and would be used "
				+ "pri tvorbe budúcich. ";
				//+ "for future creations. ";
				break;

		case "Thumb Links Target" :   //Link v náhľade
			r = "Nastaví spôsob zobrazenia fotografie po kliknutí na jej náhľad. Otvorí sa buď v novom "
			//r = "The way a desired image, when clicking on its thumbnail, opens -- either in a new "
				+ "alebo v rovnakom okne."
				//+ "window of browser or in the same window."
				+ endl + "Možnosti sú: <br /> <ul>"
				//+ endl + "Options are: <br /> <ul>"
				+ "<li> <b> Rovnaké </b> : Nikdy neotvorí link v novom okne -- vždy "
				//+ "<li> <b> Same </b> : Never opens a link in a new window -- always on the "
				+       "len v aktuálnom okne. </li>"
				//+       " current window.</li>"
				+ "<li> <b> Všeobecné </b> : Toto je zvyčajná metóda. Niektoré linky otvorí v novom okne "
				//+ "<li> <b> Common </b> : This's the common method. Open some links in new windows "
				+       " a niektoré (napr. ďalši alebo predchádzajúci náhľad) v tom istom okne. </li>"
				//+       " and others (like next and prev thumbs) in the same windows. </li>"
				+ "<li> <b> Nové </b> : Vždy otvorí link v novom okne. </li>"
				//+ "<li> <b> New </b> : Always opens any link in a new window. </li>"
				+ "</ul>";
				break;
				
		case "Pick Neighbours" :   //Vyber Susedov
			r = "Keď si všimneš, pod každou fotografiou zobrazenou vo veľkom rozmere je pár náhľadov (zvyčajne 4). "
			//r = "You see, there're a few (about 4) thumbs below each photo, viewed in large size. "	
				+ "Tieto sa volajú <b>Susedia</b> fotografie. Táto možnosť rozhoduje o spôsobe "
				//+ "Those are named <b>Neighbours</b> of that photo. This option, determines the way the "
				+ "ako budú Susedia vybraní -- a to: <br /> <ul> "
				//+ "Neighbours of a photo shall be picked -- either <br /> <ul> "
				+ "<li> <b> Obidve </b> : Podľa náhodnej kombinácie Kategórie a Príbehu </li> "
				//+ "<li> <b> Both </b> : From both that story and category (a random combination of them) </li> "
				+ "<li> <b> Kategória </b> : Podľa Kategórie, kde je fotografia štandardne zaradená </li> "
				//+ "<li> <b> Category </b> : From the category that photo belongs to (just the default) </li> "
				+ "<li> <b> Príbeh </b> : Podľa Príbehu, v ktorom je fotografia štandardne zaradená </li> "
				//+ "<li> <b> Story </b> : From the story that photo belongs to (just the default story of it) </li> "
				+ "</ul>";
				break;
		case "HTML icon URL" :   //URL HTML ikony
			r = "Ak má Fotogaléria ikonu, ktorá sa umiestnuje pred URL v prehliadači, a/alebo "
			//r = "If your Photo gallery has an icon, which is placed near the URL in browsers, and/or "	
				+ "používa pri tvorbe záložiek, vlož sem jej URL (vrátane http://)."
				//+ "uses in favoriting action, put its URL (including http://) here."
				+ endl + "V prípade, že ikonu nemáte, toto políčko ostane prázdne.";
				//+ endl + "Else, If you're not interested in that feature, leave this field empty.";
				break;
		case "Extra HTML Code" :   //Extra HTML kód
			r = "Toto je miesto na umiestnenie ďalších HTML kódov a scriptov, ktoré chceš umiestniť "
			//r = "Here's the place to put additional HTML codes and scripts you wish to be placed in "	
				+ "na stránku: bannery, adsense, počítadlá....";
				//+ "your website like hit counters, banners, ad-sense and so.";
				break;
		case "Banned IPs" :   //Zakázané IP
			r = "V prípade, že chceš zablokovať pridavánie komentárov konkrétnym uživateľom, "
			//r = "If you want to block some person of leaving comment for your PhotoGallery, just "	
				+ "stačí keď sem vložíš ich IP (jedna na riadok).";
				//+ "paste their IP addresses here, one per line.";
				break;
		case "Manage Photos" :   //Správa Fotografií
			r = "Editácia jednotlivých fotografií. Upravovanie, pridávanie, mazanie a takmer všetko "
			//r = "Edit any single Photo. Modifying, Adding, removing and almost every other work "	
				+ "čo sa s fotografiami dá robiť, urobíš práve tu."
				//+ "with photos should be done in here."
				+ endl + "Kliknutím na <a>[Pridaj]</a> môžeš rýchlo pridať jednotlivé fotografie.";
				//+ endl + "By clicking on <a>[Add]</a>, you can quickly add a single photo.";
				break;
		case "Manage Drafts" :   //Správa Konceptov
			r = "Nahrané fotografie (veľa naraz), zip-y, import fotografii a všetkého dočasne uloženého "
			//r = "Uploaded photos (many once in bulk), Zip items, Import photos & any other temporary saved "	
				+ "(a zatiaľ nezverejneného) materiálu alebo hromadne nahrané veci sú uložené tu a čakajú na spracovanie.";
				//+ "(and not showing to public) or mass uploaded items are stored here to be managed.";
				break;
				
		case "Manage Categories" :   //Správa Kategórií
			r = "<b>Kategória</b> je zostava fotografií ktoré majú spoločný námet alebo do určitej miery súvisia, "
			//r = "A <b>Category</b> is a set of photos that have similarity in subject or are relative in a manner "	
				+ "ale nie časovo. Napríklad \"Vlastné Portréty\", \"Moje mačiatko\" "
				//+ "rather than time-line. examples of that can be \"Self Portraits\", \"Kitty (My Pet)\" "
				+ ", \"Príroda\" atď. Tu môžeš pridávať, mazať alebo upravovať kategórie.";
				//+ ", \"Nature\" and etc. You can add, remove and totally manage categories from here.";
				break;
				
		case "Manage Stories" :    //Správa Príbehov
			r = "<b>Príbeh</b> je ďalším zásobníkom fotografií, užitočným pre spájanie fotografií "
			//r = "A <b>Story</b> is another container of photos, that is useful for grouping shots in a "	
				+ " v určitom časovom období. \"Cesta po Európe\", \"Výročie\" alebo \"Halloween\" môžu byť príbehmi. "
				//+ " period of time. \"Europe Trip\", \"BirthDay\" and \"Halloween\" can be stories. "
				+ " V skutočnosti sú príbehy ako príspevky v blogu, ktoré môžu byť občas po zverejnení aktualizované "
				//+ " Actually, stories are like posts of a weblog which may be updated rarely after first "
				+ " ale skor pribudnú nové. "
				//+ " update but a new one would be added soon."
				+ endl + "Odtiaľto ich môžeš spravovať.";
				//+ endl + "Manage them from here.";
				break;
		case "Manage Comments" :   //Správa Komentárov
			r = "Komentáre sú názormi návštevníkov na tvoje fotky. Odtaľto ich môžeš kontrolovať (prípadne mazať tie nevhodné!) "
			//r = "Comments are visitors opinions about your photos. Check (and delete which you don't like!) "	
				+ ".";
				//+ "from here.";
				break;
		case "Adjust Preferences" :   //Úprava Nastavení
			r = "Nastavenie obsahu index.php, téma, linky atď. ";
			//r = "Set the indexing mode of front-page, Theme, links and etc. from here. ";	
				break;
		case "Advanced Configurations" :    //Rozšírená Konfigurácia
			r = "Upraviteľné možnosti (všetko čo budeš potrebovať zmeniť) nájdeš tu. Aj zmenu hesla alebo "
			//r = "Customizable options (anything you may need to change) is there. also Change Password "	
				+ "možnosť na odinštalovanie Phormer-a!";
				//+ "and the option of Uninstalling Phormer!";
				break;
		case "Modular Actions" :    //Modulárne Akcie 
			
			//r = "Listed items in below are external actions you can do with your Phormer, like Password "
			
				//+ "changing or Uninstall.";
				break;
		case "Change Password" :   //Zmena Hesla
			r = "Tu si zmeníš administrátorské heslo.";
			//r = "Change the single password of Administration from here.";	
				break;
		case "Uninstall Phormer" :    //Odinštalovanie Phormer-a
			r = "Odstránenie Phormer-a a všetkých dát (obrázky, XML súbory) zo servera! "
			//r = "Erase Phormer and all of the datas (image, XML files), from the server! "	
				+ endl + "Keďže vytvorené obrázky a XML súbory sú vytvorené a zapísané Phormer-om "
				//+ endl + "You know, as created images and XML files are written by Phormer (PHP) "
				+ "na server, majiteľom týchto dát je Phormer, a preto je problém s ich jednoduchým vymazaním "
				//+ "on server, the owner of those files would be Phormer and thus, you may not easily do "
				+ "<tt>rm -rf</tt>. Tento modul povie Phormer-ovi aby odstránil všetko čo vytvoril a následne "
				//+ "<tt>rm -rf</tt> to omit them all. This module tells Phormer to remove anything it has "
				+ "už ti nič nebráni vymazať ostatné súbory (keďže si ich vlastníkom).";
				//+ "made and then you would be able to erase other files (which you are their owner).";
				break;
		case "XML Editor" :    //Editor XML
			r = "Tu môžeš editovať zdrojový kód XML súborov, ktoré sú zakladnou časťou Phormer-a. Taktiež "
			//r = "Edit the source of XML files, which are the basic storage parts of Phormer. Also "	
				+ "tu môžeš obnoviť chýbyjúce/poškodené XML súbory.";
				//+ "restore the missed / corrupted XMLs from here.";
				break;
		case "Log Out" :    //Odhlásenie
			r = "Rozlúčka s aktuálnou reláciou a odhlásenie z administračnej zóny.";
			//r = "Say goodbye to this session and finalize your authentication in Administration Region.";	
				break;
		case "adminPass.inf missed" :    //adminPass.inf chýba
			r = "Phormer ukladá heslo do textového súboru " 
			//r = "You may know Phormer stores Administration's Password, raw in a text file in "
				+ " data/adminPass.inf. Teraz tento súbor chýba. Vytvor nový! "
				//+ "data/adminPass.inf file . Unfortunately, now this file is missed. replace one "
				+ "Napríklad tak, že ho vytvoríš v niektorom textovom editore a zapíšeš do neho "
				//+ "yourself! i.e. create a adminPass.php file using any text-editor and write your "
				+ "heslo do jedného riadku a umiestniš ho do zložky Data." 
				//+ "desired password in one line in it and then place it in data/ folder."
				+ endl + "Ak do uvedenej zložky nemôžeš zapisovať, tak buď na chvíľu použi na zložku chmod "
				//+ endl + "If you've no write access to there, you shall either chmod data/ for "
				+ "alebo vytvor PHP script ktorý požadovaný súbor skopíruje do zložky Data. "
				//+ "a while or write a PHP script to copy your adminPass.php to data/. "
				+ "V tomto prípade ti pomôže <a href=\"mailto:"+_AIDIN_MAIL+"\">Aideen</a>. ";
				//+ "<a href=\"mailto:"+_AIDIN_MAIL+"\">Aideen</a> in this case may help you. ";
				break;
		case "Check Updates" :   //Kontrola Aktualizácie
			r = "Táto možnosť umožní vždy pri prihlásení kontrolu aktuálnosti verzie. "
			//r = "This options is about the update check that runs everytime at the login page. "	
				+ "Jediná činnosť, ktorá sa vykoná, je pripojenie na <a href=\"http://p.horm.org/er\">domovskú stránku Phormer</a> " 
				//+ "All it does is to connect to <a href=\"http://p.horm.org/er\">Phormer's homepage</a> "
				+ "a kontrola, či sa tam nenachádza novšia verzia ako nainštalovaná."; 
				//+ "and checks if there's a new version of Phormer for you to be updated.";
				break;
		case "XML Missed" :    //Chýbajúce XML
			r = " Oh!"
				+ endl + "Niektoré XML súbory, vzhľadom na chybné serverové postupy alebo viacnásobný pokus o zápis "
				//+ endl + "Some XML files, due to bad server actions or synchronous write attemps "
				+ "alebo ... sú poškodené -- obsahujú menej položiek ako v poslednej zálohe. "
				//+ "or ... seems to be corrupt -- has less item than the last back-up of them. "
				+ "<b>Pozor, môže sa to stávať pri neodhlásení "
				//+ "<b>Note that it might be because of a not-logouted session "
				+ "</b> (čo spôsobí že neprebehne záloha) ale napriek tomu <b>všetko môže byť v poriadku!</b>."
				//+ "</b> (which causes no re-back-up action) and thus <b>everything may still be OK!</b>."
				+ endl + "Skontroluj obsah a v prípade, že Phormer chybu zdetekoval správne, "
				//+ endl + "Verify the contents and then if unfortunately Phormer has detected right, "
				+ "<a href=\"?page=editxml\">restore</a> the backup.";
				//+ "<a href=\"?page=editxml\">obnov</a> súbor zo zálohy.";
				break;
		case "GD Extension" :    //GD Rozšírenie
			//r = "GD is an extension of PHP which is required for creating thumbnails and resizing photos. "
			r = "GD je rozšírenie PHP, potrebné k tvorbe náhľadov a zmene veľkosti fotografií. "	
				+ endl + "<b>Phormer nebude pracovať správne na serveroch, které GD rozšírenie nepodporujú.</b>";
				//+ endl + "<b>Phormer may not work properly on servers without GD Extensions.</b>";
				break;
		case "ZIP Extension" :    //ZIP Rozšírenie
			//r = "ZIP is an extension of PHP which is required for unzipping bulk-uploaded photos though "
			r = "ZIP je rozšírenie PHP, potrebné k rozbaleniu zip súborov, obsahujúcich viac fotografií. " 	
				+ " Phormer dokáže pracovať bez ZIP rozšírenia, ale nebude možné nahrávať .zip súbory " 
				//+ "a .zip file. Phormer works without ZIP, but you would be unable to upload a .zip file "
				+ "s viac fotografiami na spracovanie do konceptov."; 
				//+ "of many photos in draft works.";
				break;
		case "EXIF Extension" :    //EXIF Rozšírenie
			r = "EXIF je rozšírenie PHP, ktoré vie z fotografie vyčítať pridavné informácie pridané k fotografii "
			//r = "EXIF is an extension of PHP for reading additional datas of photos, caught by digital "
				+ "digitálnym fotoaparátom. Sú to napríklad: blesk, mód ostrenia alebo dátum fotografovania."
				//+ "cameras. flash length, focus mode and date taken are of those kind."
				+ endl + "Phormer bez EXIF pracuje, ale nevie uvedené dáta načítať";
				//+ endl + "Phormer works without EXIF but is unable to read those data in that case";
				break;
		case "GD Not Found" :     //GD Nenájdené
			r = "Rozšírenie GD nieje nainštalované na serveri. Vzhľadom k tomu Phormer nemôže "
			//r = "The extension GD of PHP is not installed on your server. This way, Phormer is unable "
				+ "vytvoriť potrebné náhľady a všade, kde to bude potrebné, použije originálnu fotografiu."; 
				//+ "to create approperiate thumbnails and will use the original photo everywhere needed.";
				break;
		case "Word Verification" :    //Overenie
			r = "Po povolení tejto možnosti, každý návštevník bude musieť prečítať obrázok a vpísať číslo "
			//r = "By enabling this feature, each visitor has to read an image and write its number "
				+ "do políčka. Je to na ochranu pred spammermi, ktorými su vačšinou  boti, zanechávajúci množstvo "
				//+ "on a filed. This is to protect commenting from spammers which are bots that leave "
				+ "komentárov pod fotografiami."
				//+ "numerous comments on photos."
				+ endl + "Ak tvoju galériu nikto nespamuje, je dobré túto ochranu vypnúť "
				//+ endl + "If your gallery has no spammer, it's a good idea to disable this feature and "
				+ "a nerušiť normálnych užívateľov!"
				//+ "don't disturb commentors!"
				+ endl + "<b>Pozor</b> netýka sa to administrátora! Takže keď ochranu chceš vyskúšať, "
				//+ endl + "<b>Note</b> that it would never bother Admin! Thus, if you want to test it, "
				+ "mal by si sa najprv odhlásiť z administračného rozhrania.";
				//+ "you should log out the administration area, before.";
				break;
		case "Display Email" :    //Zobrazenie Email
			r = "Spôsob, akým sa zobrazí e-mail autora (v menu a päte stránky). Možnosti sú:"
			//r = "The way that Email of the author displays (at sidebar and footer). options are:"
				+ "<li> <b> Modifikovaný</b>: zmení @ na [at] a . na [dot], čiže <b><a "
				//+ "<li> <b> Modified</b>: converts @ to [at] and . to [dot], like <b><a "
					+ "href=\"mailto:me[at]here[dot]com\">email</a> </li></b> "
					//+ "href=\"mailto:me[at]here[dot]com\">email</a> </li></b> "
				+ "<li> <b> Ako Je</b>: obyčajný mailto: odkaz, čiže <b><a href=\"mailto:me@here.com\">email</a></b> </li> "
				//+ "<li> <b> As Is</b>: Just a mailto: link, like <b><a href=\"mailto:me@here.com\">Email</a></b> </li> "
				+ "<li> <b> Text</b>: jednoduchý text, čiže <b>me [at] here [dot] com</b> </li> "
				//+ "<li> <b> Text</b>: jimple text, like <b>me [at] here [dot] com</b> </li> "
				+ "<li> <b> Skrytý</b>: ukryje ho a nikde nezobrazí! </li> "
				//+ "<li> <b> Hidden </b> : Hides it private and writes nowhere! </li> "
				+ "</ul>"
				+ endl + "Ubezpeč sa, že zadaná adresa je platná, keďže môže byť použitá. "
				//+ endl + "Note that your entered email address has to be valid, since it might be used on "
				
				//+ "notifications.";
				break;
		case "PhotoGallery Name" :    //Názov FotoGalérie
			r = "Názov fotogalérie, ktorý bude použitý v hlavičke všetkých stránok."; 
			//r = "Name of the PhotoGallery which is used above all of pages.";
				break;
		case "PhotoGallery Desc" :    //Popis FotoGalérie
			r = "Popis FotoGalérie, ktorý bude zobrazený pod jej názvom na "
			//r = "Description of the PhotoGallery which is written below the name of PhotoGallery at "
				+ "vrchu všetkých stránok. Môže to byť jednoduchý popis, napríklad <b>\"Moje foto s mojím fotoaparátom\"</b> "
				//+ "the top of all of the pages. It can be a simple name like <b>\"My Photos with My camera\"</b> "
				+ "alebo zložitejší, napríklad <b>\"Hallucination from an opalescence view.\"</b>."; 
				//+ "or a complicated one like <b>\"Hallucination from an opalescence view\"</b>.";
				break;
		case "Author Name" :    //Meno Autora
			r = "Meno autora(-ov) použité pod Fotogalériou a aj ako držiteľa copyrightu k fotografiám."; 
			//r = "Name of the author(s) used below the PG and copyright of the photos hold to.";
				break;
		case "Author Email" :    //Email Autora
			r = "Email na administráciu FotoGalérie, ktorý môže byť zobrazený užívateľom (podľa nastavenia v konfigurácii) "
			//r = "Email of the administration of the PG, that might be displayed (upon display configuration "
				+ " , a takisto je potrebný pre notifikáciu nových komentárov "
				//+ " at advanced configurations) to users and also needed for notifications of new comments (if "
				+ " (ak je povolená).";
				//+ " set).";
				break;

		case "Theme" :    //Téma
			r = "Farba prvej stránky. "
			//r = "The color the index page. "
				+ endl + "Kliknutím na <b>Náhľad</b> môžeš skontrolovať ako úvodná stránka vyzerá, bez toho aby "
				//+ endl + "By clicking on <b>Preview</b> link, you can have a preview of the selected "
				+ "ju bolo treba najprv uložiť."; 
				//+ "theme without saving it indeed.";
				break;
		case "External Links" :    //Externé Linky
			r = "Táto časť je manažérom externých odkazov -- odkazov na iné fotoblogy alebo "
			//r = "This part is the manager of your external Links -- links to other photoblogs or your "
				+ "tvoje obľúbené stránky."
				//+ "favotire websites."
				+ endl + "<b>Tip: </b> Odkazy, ktoré nemajú vyplnenú časť <b>Link URL</b>, môžu byť použité ako nadpisy "
				//+ endl + "<b>Hint: </b> Links with <b>no Link URL</b> part, would be assumed as headers "
				+ "a môžu oddeľovať odkazy rôznych typov."; 
				//+ "and can separates links of various types from each other.";
				break;
		case "Link Name" :    //Názov Odkazu
			r = "Názov odkazu, ktorý sa objaví ako text.";
			//r = "Name of the link which would be the text to appear.";
				break;
		case "Link URL" :    //URL Oodkazu
			r = "URL odkazu -- adresa odkazu, obsahujúca aj http://";
			//r = "URL of the link -- destination address of the link, including http://";
				break;
		case "Link Title" :    //Titulka Odkazu
			r = "Titulka je text, ktorý sa objaví, keď sa kurzor myši zastaví nad odkazom. "
			//r = "Title is the text that pops up when mouse cursor hovers above the link. "
				+ "Kľudne môže ostať nevyplnená, ak ťa nič vhodné nenapadne!"; 
				//+ "Feel free to leave it blank if you have no approperiate choice in mind!";
				break;
		case "Add/Del Link" :    //Pridaj/Vymaž Odkaz
			r = "Pridá nový odkaz pod aktuálny /  vymaže aktuálny odkaz."; 
			//r = "Add a new link below this one / Delete current link.";
				break;
		case "Index Mode" :    //Vzhľad Indexu
			r = "Rozloženie stránky index.php ako sa zobrazí na prvej stránke. Kliknutím na <b>Náhľad</b>"
			//r = "Layout of the index.php page to appear on first page. by clicking on <b>preview</b> "
				+ " môžeš vidieť zmeny aj bez toho, aby bola stránka vopred uložená."
				//+ "link, you can have a preview of your customized layout without saving it indeed."
				+ endl + "<b>Poznámka</b>: Zmeny v bočnom menu sa v náhľade nezobrazujú.";
				//+ endl + "<b>Note</b>: SideBar's changes will not be shown in preview";
				break;
		case "Time Differ" :    //Posun Času
			r = "Rozdiel medzi serverovým a lokálnym časom. Zadané číslo bude pripočítané "
			//r = "The difference of your server's time with your region (local) time. this would be "
				+ "k serverovému času, čiže ak je server GMT 0 a žiješ napríklad na Slovensku (GMT +1 "
				//+ "added to server time, so if your server is at GMT 0 and you live in Iran (GMT "
				+ " ) tak v políčku bude 60."
				//+ " +3:30) then this field should have 210."
				+ endl + "<b>Poznámka:</b> Jednotkou tohto políčka sú <b> Minúty </b>" 
				//+ endl + "<b>NOTE:</b> the unit of this field is <b> Minutes </b>"
				+ endl + "<b>Tip:</b> Matematický výraz \"3*60+30\" je povolený!"; 
				//+ endl + "<b>HINT:</b> Math expressions like \"3*60+30\" is allowed!";
				break;
		case "Drafts" :   //Koncepty
			r = "V časti <b>Koncepty</b> môžeš: <br /><ul>"
			//r = "In <b>Drafts</b> part, you can either <br /><ul>"
				+ "<li><b>Nahranie Súborov</b>: Nahranie viacerých fotografií, v zip súbore alebo z adresára na serveri.</li>"
				//+ "<li><b>Upload Files</b>: Upload several photos, in a zip file or a folder on server.</li>"
				+ "<li><b>Správa Súborov</b>: Rýchle pridanie alebo vymazanie viacerých súborov.</li>"  
				//+ "<li><b>Manage Items</b>: Quickly add several photos or delete them.</li>"
				+ "</ul>";
				break;
		case "Upload Photos to Draft" :    //Nahranie Súborov do Konceptu  
			r = "V tejto časti môžeš nahrať fotografie do adresára konceptov a neskor ich spracovať. Spôsoby ako "
			//r = "In this part, you can upload your photos to draft folder and add them later. methods "
				+ "nahrať jednu fotografiu (alebo viac v balíku) sú:<br /><ul>" 
				//+ "of putting one (or more in a bulk) is either <br /><ul>"
				+ "<li><b>z PC</b>: môže to byť buď <b>jedna fotka</b> alebo <b>.zip</b> obsahujúci fotiek niekoľko.</li>" 
				//+ "<li><b>From PC</b>: it can be either <b>a single photo</b> or <b>a .zip</b> containing serveral items.</li>"
				+ "<li><b>zo Servera</b>: externú (z inej stránky, <b>začínajúcu s http:// </b>) fotografiu alebo lokálnu fotografiu " 
				//+ "<li><b>From Server</b>: an external (from other website, <b>beginning with http:// </b>) photo or a local photo "
				+ "(s relatívnou / absolutnou adresou) alebo lokálny adresár (<b>ukončený s /</b>).</li>"
				//+ "(with relative / absolute addressing) or a folder of local (<b>necessarily ended with /</b>).</li>"
				+ "</ul>"
				+ endl + "<b>Poznámka</b>: Odporúčam nenahrávať .zip súbory obsahujúce viac ako 25 fotografií " 
				//+ endl + "<b>NOTE</b>: it's strongly recommended to avoid uploading a .zip file with "
				+ "z dôvodu, že sa výrazne predĺži čas na tvorbu náhľadov "
				//+ "more than 25 photos in it, as it may take much (~30 seconds) to create their thumbnail "
				+ "a môže to zabrzdiť celý proces. Avšak na rýchlych serveroch toto odporúčanie platiť nemusí!" 
				//+ "and this can beat the entire action. however, in fast servers, you might be able to!";
				break;
		case "Manage Photos in Draft" :    //Správa Fotografií v Koncepte
			r = "Toto je miesto, kde môžeš rýchlo pridať niekoľko fotografií z konceptov alebo vymazať "
			//r = "Here is the place to quick add several photos from drafts folder or delete some of "
				+ "niektoré nahrané.";
				//+ "the uploaded ones.";
				break;
		case "Manage Drafts: Thumbnail" :    //Správa Konceptov: Náhľad
			r = "Toto je automaticky generovaný náhľad zo stredu fotografie, ktorý ti pomôže " 
			//r = "This is an automatically generated thumbnail from the center of the image, just in "
				+ "zistiť o ktorý súbor sa jedná."
				//+ "aim of helping you to recognize the file, in a better manner."
				+ endl + "Avšak v okne <b>Rýchle pridanie</b> je možné náhľad nastaviť manuálne!"; 
				//+ endl + "However, in <b>quick add</b>, this thumbnail would be picked!";
				break;
		case "Manage Drafts: Information" :    //Správa Konceptov: Informácia
			r = "Toto sú minimálne informácie, požadované na rýchle pridanie fotografie. Napriek tomu ich zatiaľ "
			//r = "These are the least information asked from you to quick add. Anyway, you can even "
				+ "nieje nutné vyplniť ! ";
				//+ "leave these blank, yet!";
				break;
		case "Manage Drafts: Action" :    //Správa Konceptov: Akcia
			r = "Tu sú možnosti súvisiace s jednou fotografiou. <br /><ul>" 
			//r = "These are the actions related to a single image. <br /><ul>"
				+ "<li><b>Detailné pridanie</b>: ako pridanie jednej fotografie cez <b>Správa Fotografií</b>, " 
				//+ "<li><b>Detailed add</b>: Like adding a single photo to <b>Manage Photos</b> part, "
				+	"ale bez nahrávania - použije sa znázornená fotografia!</li>" 
				//+	"but without require to upload - uses this photo!</li>"
				+ "<li><b>Vymaž</b>: Vymazanie znázornenej fotografie. " 
				//+ "<li><b>Delete this</b>: Delete this single file, rather than a group of files. "
				+ "</ul>";
				break;
		case "Drafts :: Delete Selected" :    //Koncepty :: Vymazanie Výberu
			r = "Tu môžeš vymazať niekoľko (alebo len jednu) z nahraných fotografií z Konceptov. "
			//r = "Here, you can delete several (or just one) of the uploaded items in draft folder. "
				+ "Len ich označ, vyber uvedené	tlačidlo predvoľby a klikni na <b>Vykonaj!</b>";
				//+ "Just pick them up and, select this radio button and finally, press <b>Perform!</b>";
				break;
		case "Drafts :: Quick-add Selected" :    //Koncepty :: Rýchle Pridanie Výberu
			r = "Na tomto mieste môžeš rýchlo pridať niekoľko fotografií naraz! Postup: <br /><ol> " 
			//r = "This is the place to add several photos, once in a glance! These are the step: <br /><ol> "
				+ "<li>V zozname dole vyber požadované fotografie.</li>"
				//+ "<li>Select the desired photos from the list below.</li>"
				+ "<li>Ak máš čas a chceš tak vyplň <b>Meno</b> a <b>Popis</b>.</li>" 
				//+ "<li>If you are interested and have enough time, fill <b>Name</b> and <b>Description</b> fields.</li>"
				+ "<li>Vyber požadované tlačidlo predvoľby.</li>" 
				//+ "<li>Select this radio button.</li>"
				+ "<li>Nastav pre ne ďalšie detaily (napríklad kategóriu).</li>" 
				//+ "<li>Configure common options (like default category) for them.</li>"
				+ "<li>Nakoniec klikni na <b>Vykonaj!</b></li>"
				//+ "<li>Finally, press <b>Perform!</b></li>"
				+ "</ol>"
				+ endl + "<b>Poznámka</b>: Neodporúčam rýchle pridávanie viac ako 20 fotografií naraz "
				//+ endl + "<b>NOTE</b>: it's strongly recommended to avoid quick-adding "
				+ "z dôvodu, že sa výrazne predĺži čas na tvorbu náhľadov "
				//+ "more than 20 photos in a while, as it may take much (~30 seconds) to create their thumbnail "
				+ "a môže to zabrzdiť celý proces. Avšak na rýchlych serveroch toto odporúčanie platiť nemusí!"; 
				//+ "and this can beat the entire action. however, in fast servers, you might be able to!";
				break;
		case "Upload Path" :    //Cesta Nahrania 
			r = "<b>Nahrávacia cesta z PC</b>:<br /> Vyhľadaj požadovaný súbor v tvojom počítači!!! "
			//r = "<b>Upload Path on PC</b>:<br />Browse your photo file from your hard disk. "
				+ endl + "Uvedom si, že <b>.zip súbory</b> s viac fotografiami sa dajú nahrať "
				//+ endl + "Note that <b>zip files</b> with several photos inside should only be uploaded "
				+ "len cez koncepty.<br />" 
				//+ "in drafts area.<br />"
				+ "<br /><b>Nahrávacia cesta zo Servera</b>:<br />"
				//+ "<br /><b>Upload Path on Server</b>:<br />"
			    	+ "Buď lokálna cesta (absolútna / alebo relatívna z upload.php adresára) k fotografii "
			    	//+ "Either a local path (absolute by / or relative since upload.php directory) to a photo "
				+ "alebo odkaz na externý (začínajúci s http:// ) súbor na webe."
				//+ "or a link to an external (beginning with http:// ) file on the web."
				+ endl + "Uvedom si, že<b> adresár z nahratými súbormi</b> je dostupný len v časti <b>Koncepty</b> a preto " 
				//+ endl + "Note that <b>import folder</b> is available in <b>drafts</b> mode and on that "
				+ "tvoj odkaz na adresár musí byť "
				//+ "case, your folder link (surely, local; but either relative or absolute) should end "
				+ "ukončený s / aby boli dostupné všetky fotografie v adresári";
				//+ "with / to include all photos on that directory";
				break;
		case "Add Photo Link" :    //Pridaj Fotografiu odkaz
			r = "Kliknutím na odkaz budeš môcť pridať fotografie do FotoGalérie. "
			//r = "By clicking on that link, you'll be able to add your photos to the PhotoGallery. "
				+ endl + "Ak si želáš pridať fotografiu, ktorá už je nahraná (v konceptoch), klikni na odkaz "
				//+ endl + "If you wish to add an already-uploaded (in drafts) photo, click on "
				+ " <a class=\"q\">Z Konceptov</a>.";
				//+ "<a class=\"q\">From Drafts</a> Link.";
				break;
		case "Edit Photos Link" :    //Uprav Fotografie odkaz
			r = "Tu, z tohoto krátkeho formulára, sa môžeš dostať k editačnej stránke hociktorej fotografie a upraviť "
			//r = "Here, in this short form field, you can go to edit page of any photo you wish and modify "
				+ "všetky dáta ktoré boli zadané pri jej pridaní - dokonca aj jej hodnotenie(!) alebo zdrojovú fotografiu!" 
				//+ "any data you'd sent when was adding it - even it's rating (!) or its source photo!"
				+ endl + "Stačí keď vložíš jej PhotoID (číslo nachádzajúce sa na konci jej linku) " 
				//+ endl + "just enter its PhotoID (the number which appears at the end of its link) "
				+ "a klikneš na <b>Uprav!</b>";
				//+ "and then press <b>Edit!</b>";
				break;
		case "Add/Del Photos to Categ/Story" :    //Pridaj/Vymaž Fotky do/z Kategórie/Príbehov
			r = "Cez tento krátky formulár môžeš pridávať alebo mazať fotografie " 
			//r = "In this short form field, you can do various actions like adding or deleting any photo "
				+ "do/z hociktorého príbehu alebo kategórie. Stačí, keď zadáš PhotoID (ktoré sa nachádza na konci každého "
				//+ "to/from any story or category. Just fill the photo's id, namely PID (which appears at "
				+ "linku s fotografiou) a ID kategórie alebo príbehu (ktoré je zobrazené na konci linku kategórie alebo "
				//+ "the end of its link) and then the ID of category or story (which, in the same way, "
				+ "príbehu)."
				//+ "is placed at the end of that container's link)."
				+ endl + "<b>Poznámka</b>: Zapamätaj si, že fotografia nemôže byť vymazaná z jej hlavnej kategórie " 
				//+ endl + "<b>Note</b>: Remember that a photo can't be deleted from its default category "
				+ "alebo príbehu."
				//+ "or story."
				+ endl + "<b>Tip</b>: Vloženie fotografie do viacerých (príbuzných) kategórií alebo príbehov "
				//+ endl + "<b>Hint</b>: Putting a single photo into many (related) categories or stories "
				+ "pomôže návštevníkom ľahšie a rýchlejšie nájsť požadovanú fotografiu!";
				//+ "helps visitors to access it, faster and easier!";
				break;
		case "Photo: Global Data" :    //Fotografia: Všeobecné Dáta 
			r = "Tu môžeš zadať zákldné informácie o fotografii." 
			//r = "Essential information about photo has to be entered through these fields."
				+ endl + "Napriek tomu, že tieto dáta sú <b>vyžadované</b>, nemusíš ich zadávať "
				//+ endl + "Although it's been told that these data are <b>required</b>, but you can leave "
				+ "ale je možné, že návštevníci ich budú chcieť poznať.";
				//+ "any of them empty, despite visitors may require them to know.";
				break;
		case "Photo: Title" :    //Fotografia: Názov
			r = "Názov fotografie je meno ktoré jej dáš. Dobré meno vypovie veľa "
			//r = "Title of the photo is a name you let on that photo. a good title can add lots to the "
				+ "o zmysle a obsahu fotografie."
				//+ "worth and meaning of the photo."
				+ endl + "Ak nevieš nájsť vhodné meno, nemusíš ho zadávať "
				//+ endl + "However, if you can't find a proper name for a photo, you can leave it "
				+ "- Phormer vypíše bez mena."; 
				//+ "empty - Phormer will show no name for that photo.";
				break;
		case "Photo: Description" :    //Fotografia: Popis
			r = "Tu sa zadáva info o fotografii, napríklad kde to je, kto tam je. "
			//r = "Information about the photo, e.g. where photo has taken or who are the people in the "
				+ "Technické informácie ako typ fotoaparátu či uzávierka sem NEPATRIA. "
				//+ "photo. Technical information like focus mode, PhotoShop manipulation (if made) should "
				+ "Tie patria do časti <b>Foto Info</b>."
				//+ "NOT be placed here, but in <b>Photo Info</b> Part."
				+ endl + "<b>Tip</b>: Sú tu povolené HTML tagy."; 
				//+ endl + "<b>Hint</b>: HTML tags are allowed here.";
				break;
		case "Photo: Time Added" :    //Fotografia: Čas pridania
			r = "Čas, kedy si uvedenú fotografiu pridal do FotoGalérie. Je automaticky nastavený "
			//r = "The time you're going to add this photo(s) to the gallery. It'll automatically be set to "
				+ "na čas servera a <b>Časový Posun</b> (ak je tento nastavený v časti <b>Rozšírená Konfigurácia</b> ) "
				//+ "current time and <b>Time Differ</b> with server (if set in <b>Advanced Configuration</b> "
				+ "Phormer pripočíta automaticky."; 
				//+ "part) will be added to it by Phormer.";
				break;
		case "Photo: Get Comments" :    //Fotografia: Komentáre 
			r = "Povolenie komentárov pre jednotlivé fotografie.";
			//r = "Let visitors leave comments for it (these in drafts) or not.";
				break;
		case "Photo: Photo Info" :    //Fotografia: Foto Info
			r = "Miesto pre technické informácie fotografie. Na popis obsahu použi "
			//r = "The technical information of the photo, rather than social ones that should be "
				+ "časť <b>Popis</b>"
				//+ "placed at <b>Photo Desc</b>"
				+ endl + "";
				//+ endl + "other informations (like an external script or link) can be set here.";
				break;
		case "Photo: Default Categ" :    //Fotografia: Prednastavená Kategória
			r = "Prednastavená <b>Kategória</b> fotografie, ktorá je aj hlavnou kategóriou " 
			//r = "Default <b>Category</b> of the photo, which is the major (nearest in subject) category "
				+ "pre Fotografiu."
				//+ "to the photo."
				+ endl + "Fotografia sa nedá odstrániť z kategórie, ale dá sa neskôr pridať (na prvej "
				//+ endl + "You can't remove a photo from its category, but can add it later (in first "
				+ "strane v časti <b>Správa Fotografií</b>) do ďalších kategórií. Táto kategória "
				//+ "page of <b>Manage Photos</b> part) to various categories. This category will be "
				+ "sa použije na výber susedov (v prípade nastavenia v rozšírenej konfigurácií) a v odkaze <a "
				//+ "used for picking neighbours (if set at advanced configuration area) and <a "
				+ "class=\"q\">[hore]</a> pri fotografii."
				//+ "class=\"q\">[up]</a> link of the photo."
				+ endl + "<b>Poznámka</b>: Fotografia bude chránená (nezobrazí sa nikomu) vtedy a jedine " 
				//+ endl + "<b>Note</b>: A photo will be protected (not visible by anyone) if and only "
				+ "vtedy, keď bude jej <b>Prednastavená</b> kategória alebo príbeh zaheslovaná."
				//+ "if either its <b>Default</b> category or story be passworded."
				+ endl + "<b>Tip<b>: V móde Koncepty, je táto prednastavená kategória aplikovaná na všetky Fotografie!";
				//+ endl + "<b>Tip<b>: in drafts mode, this default category will apply for all!";
				break;
		case "Photo: Default Story" :    //Fotografia: Prednastavený Príbeh
			r = "Tak ako v časti <b>Prednastavená Kategória</b>, tak aj tu sa nastavuje hlavný príbeh (do ktorého fotografia patrí " 
			//r = "Same as <b>Default Category</b>, here, the major story (actually the one that photo "
				+ "). Neskôr jo možné pridať fotografiu do ďalších príbehov." 
				//+ "is taken/occured within) shall be set. later you can add photo to other stories."
				+ endl + "<b>Poznámka</b>: Fotografia bude chránená (nezobrazí sa nikomu) vtedy a jedine " 
				//+ endl + "<b>Note</b>: A photo will be protected (not visible by anyone) if and only "
				+ "vtedy, keď bude jej <b>Prednastavená</b> kategória alebo príbeh zaheslovaný."
				//+ "if either its <b>Default</b> category or story be passworded."
				+ endl + "<b>Tip<b>: V móde Koncepty, je tento prednastavený príbeh aplikovaný na všetky Fotografie!";
				//+ endl + "<b>Hint<b>: in drafts mode, this default story will apply for all!";
				break;
		case "Photo: Date Taken" :    //Fotografia: Dátum Vytvorenia
			r = "Dátum vytvorenia fotografie. Ak si ho nepamätáš, nechaj políčko prázdne."; 
			//r = "The date, photo has been taken on that. If you don't remind that, leave it empty.";
				break;
		case "Photo: Hits, Rate" :    //Fotografia: Zobrazenia, Hodnotenie
			r = "Toto je počet zobrazení a hodnotenie fotografie (súčet hodnotení/počet hodnotiacich). "
			//r = "Hit count and rating (sum of all rates / number of raterss) of the photo is here. "
				+ "Niekto by sa mohol opýtať či je vhodné tieto čísla upravovať manuálne. Odpoveď (aj keď to bude "
				//+ "One may ask it's other of honesty to modify these, manually. The answer (yet is "
				+ "znieť nepresvedčivo) je taká, že fotografia môže byť importovaná z inej galérie kde už má "
				//+ "inconvincible somehow) is that, the photo may have been imported (has previously "
				+ "svoje hodnotenie alebo chceme upraviť neobjektívne hodnotenie, ktoré spravil autor pri testovaní.";
				//+ "hit counts or got lots of counts due to a test and author wish to dismiss them.";
				break;
		case "Thumbnail" :    //Náhľad
			r = "Náhľad je malá verzia fotografie, môže to byť buď jej časť alebo "
			//r = "Thumbnail is a small version of the photo which can be either a part of it or "
				+ "zmenšená celá fotografia, alebo kombinácia oboch týchto možností!" 
				//+ "reduced / resized of entire photo or a combination of it!"
				+ endl + "Phormer podporuje len štvorcové náhľady a ponúka šikovný nástroj " 
				//+ endl + "Phormer just supports square thumbnails and has provided a handy tool "
				+ "s ktorého pomocou získaš náhľad taký ako potrebuješ!"
				//+ "to generate what you do expect of a square thumbnail to be!"
				+ endl + "<b>Tip</b>: Pridržaním klávesy SHIFT sa náhľad symetricky zväčšuje alebo "
				//+ endl + "<b>Hint</b>: by holding shift key on the keyboard, the thumbnail grows / "
				+ "zmenšuje." 
				//+ "shrinks symmetrically."
				+ endl + "<b>Tip</b>: Ak sa obrázok po nahraní nezobrazí, ale výber je aktívny "
				//+ endl + "<b>Hint</b>: If the image has not been displayed after upload but picker "
				+ "stačí keď klikneš na <b>Ukážka Náhľadu</b>!" 
				//+ "becomes available, just click on <b>Thumbnail Preview</b> label!"
				+ endl + "<b>Tip</b>: Dvojklikom do výberu náhľadu sa výber zväčší na celú plochu, "
				//+ endl + "<b>Hint</b>: By doing a double-click on thumbnail picker skeleton, the "
				+ "druhý dvojklik výber zmenší na originálnu veľkosť náhľadu!";
				//+ "size grows to fix. once again, after that, size shrinks to thumbnail's original!";
				break;
		case "Container Management" :    //Správa Obalov
			r = "Toto je miesto odkiaľ môžeš spravovať svoje obaly. Môžeš ich pridávať, upravovať "
			//r = "This is the place to manage containers. You can add a new container, edit your "
				+ "(či už kategórie alebo príbehy) alebo vymazávať."
				//+ "currently created containers (either categories or stories) or delete them."
				+ endl + "<b>Poznámka</b> Časť <b>Vymaž</b> je takisto užitočná - môžeš vymazať " 
				//+ endl + "<b>Note</b> that <b>Delete</b> part might be too useful - you can "
				+ "len obal alebo fotografie v ňom alebo obal aj s fotografiami &#133; "
				//+ "delete only a container or <b>the photos inside that container</b> or &#133; "
				+ "Stačí sa len pozrieť!";
				//+ "Take a look!";
				break;
		case "Container Name" :    //Obal Meno
			r = "Meno obalu (Kategória / Príbeh), ktoré sa zobrazí v ich zozname " 
			//r = "Name of the container (Category / Story), that would be displayed in list of them "
				+ "a taktiež, ak je to prednastavený obal fotografie, v detailoch fotografie.";
				//+ "and also when is default container of a photo, in that photo's details.";
				break;
		case "Container Description" :    //Obal Popis
			r = "Poznámky o obale, napríklad cesta, o čom je príbeh alebo "
			//r = "Notes about the container, like the trip, the story is about to or your idea about "
				+ "tvoja myšlienka o predmete kategórie."; 
				//+ "the subject of a category.";
				break;
		case "Container Visibility" :    //Obal Viditeľnosť
			r = "Rozhoduje o tom, či obal bude alebo nebude uvedený v zozname obalov (v menu). "
			//r = "Whether this container should be listed on containers list (on sidebar) or not. "
				+ endl + "<b>Tip</b>: Pravdepodobne nechceš aby sa tvoje súkromné (zaheslované) obaly zobrazovali!"; 
				//+ endl + "<b>Hint</b>: you may not like your private (passworded) sets to be listed!";
				break;
		case "Container Privacy" :    //Obal Súkromné
			r = "Táto možnosť ti umožní zabrániť, aby sa niektoré fotografie zobrazovali verejne. Všetky "
			//r = "This is the option to let you protect photos / sets from anyone's view. All of the "
				+ "fotografie vložené v zaheslovanom obale (či kategória alebo príbeh) budú chránené. " 
				//+ "photos with a default passworded container (category or story) will be protected "
				+ endl + " <b>Poznámka</b> Keď pridáš fotografiu napríklad do zaheslovaného obalu A, ale jej "
				//+ "also. <b>Note</b> that if you add a photo to, for example, passworded category of "
				+ "predvolený obal B je verejne prístupny, tak fotografia ostane stále "
				//+ "A, but its default category remain B, which is public, then the photo is still "
				+ "verejne prístupná. ";
				//+ "public. ";
				break;
		case "Container Inheritance" :    //Obal Dedičstvo
			r = "Tu môžeš nastaviť, či obal (kategória / príbeh) má byť podskupinou iného obalu. "
			//r = "Here, you can set a container (story / category) to be a child of another container. "
				+ endl + "<b>Poznámka</b>Toto sa využíva len pri zobrazení, nič iné to neovplyvnuje v rámci Phormer-a."; 
				//+ endl + "<b>Note</b> that, it's only to display and means nothing else to Phormer.";
				break;
		case "Help System" :    //Systém Pomoci
			r = "Toto je systém, akým sa zobrazujú dialógové boxy s nápovedou. "
			//r = "This is the way, these kind of help dialogue-boxes are supposed to show. "
				+ endl + "Profesionálni užívateľia fotogalérie Phormer môžu jej zobrazovanie " 
				//+ endl + "However, professional Phormers may like to disable this feature to be "
				+ "zakázať! ";
				//+ "displayed everywhere! ";
				break;
		case "Copyright Note" :    //Správa Copyright
			r = "Toto je miesto na zadanie <b>Copyrightových poznámok</b>, ktoré sa zobrazia na spodku každej "
			//r = "This is the place to put the <b>Copyright notes</b> which are printed at the bottom "
				+ "stránky. Dostupné možnosti sú:<br /><ul>"  
				//+ "of every page. available variables are:<br /><ul>"
				+ "<li><b>$name</b>: zobrazí meno autora, ako je zadané.</li>"
				//+ "<li><b>$name</b>: Displays Author's name, as set.</li>"
				+ "<li><b>$email</b>: zobrazí autorov email v definovanom tvare ("
				//+ "<li><b>$email</b>: Displays Author's email in the defined (in <b>preferences</b> "
				+ 		" nastavenie v časti <b>Možnosti</b>)</li>"
				//+ 		"part) format.</li>"
				+ "<li><b>$Phormer</b>: zobrazí odkaz na Phormer v tvare <a class=\"q\" href=\"http://p.horm.org/er\">"
				//+ "<li><b>$Phormer</b>: Displays Phormer's link as <a class=\"q\" href=\"http://p.horm.org/er\">"
				+		"Phormer, verzia ???</a>, kde ??? je použitá verzia.</li>" 
				//+		"Phormer, ver ???</a>, where ??? is your using version.</li>"
				+ "</ul>"
				+ endl + "<b>Tip</b>: Sú tu povolené HTML tagy (napríklad &amp;copy; zobrazí &copy;)."
				//+ endl + "<b>Hint</b>: HTML tags and marks (like &amp;copy; for &copy;) are allowed."
				+ endl + "<b>Poznámka</b> Tieto premenné sú case-sensitive!" 
				//+ endl + "<b>Note</b> that these variables are case-sensitive!"
				+ endl + "<b>Prosba</b>: Vyžadujem umiestnenie $Phormer niekde na konci stránky. "
				//+ endl + "<b>Ask</b>: It's requested to put $Phormer somewhere in the footnote. "
				+ "Ďakujem!";
				//+ "Thank you!";
				break;

		default :
			r = "Pre uvedenú položku položku zatiaľ neexistuje pomoc. <br />" 
			//r = "Unfortunately there's no approperiate help message available for this item. <br />"
				+ " &nbsp; Upozornite na tento problém <a href=\"mailto:"+_AIDIN_MAIL+"&subject=No Help for "+s+"\">Aideen-a</a>!";
				//+ " &nbsp; Notify <a href=\"mailto:"+_AIDIN_MAIL+"&subject=No Help for "+s+"\">Aideen</a> of that!";
				break;
	}
	return r;
}