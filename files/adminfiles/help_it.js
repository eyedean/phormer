/*
  * Help File System of Phormer (based on 3.32)
  * Language: Italian
  * Author: Lenny76 <lenny76<at>tiscali{dot}it>
  *
  * Translation 1.0: March 2007
  * Version 1.1: [ April 06, 2008] Added to Phormer 3.31
  */
  
function GetItHelpMsg(s) {
	var r = "";
	var endl = "<br /> &nbsp; ";
	switch (s) {
		case "help":
			r = "Questa è il nuovo help di Phormer!<br />"
				+ "&nbsp; Troverai utili informazioni accanto ad ogni menu \
					cliccando sul punto interrogativo (<a class=\"q\">?</a>) accanto ad ogni voce.<br />"
			    + "Per chiudere l'aiuto, <br /> <ul> "
				+ "<li> clicca su <a class=\"bLink\" onclick=\"HideHelp();\">[Dismiss]</a></li>"
				+ "<li> clicca fuori dalla finestra </li>"
				+ "<li> premi escape sulla tastiera</li>"
				+ "</ul>";
				break;
		case "Update Message" :
			r = "Se non vuoi che Phormer verifichi la presenza di aggiornamenti, disabilita"
				+ "questa funzione in <b>Advanced Configuration</b>";
				break;
		case "Administration Region" :
			r = "Questo e' il pannello di controllo della tua Galleria. Gestisci tutto da qui!";
				break;

		case "Default Photo Num in Box" :
			r = "Numero predefinito di foto mostrate in modalit Jungle Box. Un valore più alto"
				+ "di 50 causerà tempi lunghi di caricamento su computer lenti.";
				break;

		case "Default Photo Num in Recents" :
			r = "Numero predefinito di foto nella sezione \"Recently Visited Photos\" o "
				+ "\"Recently Added Photos\". "
				+ endl + "E' anche il numero di foto visualizzate nella modalit <b>Random</b>";
				break;

		case "Default Photo Num in Tops" :
			r = "Numero predefinito di foto nella sezione \"Most Visited Photos\" o \"Top Rateds\". ";
				break;

		case "Default Story Num in mode" :
			r = "Numero predefinito di Storie visualizzate in modalit \"Story\". Ogni"
				+ "storia viene visualizzato in una riga con le ultime foto aggiunte.";
				break;

		case "Default Story Num in Sidebar" :
			r = "Numero predefinito di Storie elencate nella barra laterale. Un valore minore del totale delle storie "
				+ "visualizzerà la voce \"list all stories\" ." ;
				break;

		case "Transparency Percentage" :
			r = "La percentuale della trasparenza delle miniature, che sparisce muovendo il mouse sopra di esse. "
				+ endl + "Una percentuale elevata rende le miniature trasparenti. Per disabilitare la trasparenza impostare il valore a 100%"
				+ "";
				break;

		case "Jpeg Compression Percentage" :
			r = "Imposta la compressione JPEG durante la generazione delle miniature e delle immagini ridimensionate. "
				+ "Più alto il valore, maggiore è la qualità, ma ciò comporta file più grandi (in byte)"
				+ "70% il valore consigliato. "
				+ endl + "Questo valore non influisce sulle miniature gi elaborate, ma solo sulle nuove generate."
				+ "";
				break;

		case "Thumb Links Target" :
			r = "Imposta il modo in cui l'immagine desiderata, si apre nel browser cliccando sulla miniatura:"
				+ ""
				+ endl + "Le Optioni sono: <br /> <ul>"
				+ "<li> <b> Same </b> : Non apre un nuova finestra, ma visualizza l'immagine nella finestra corrente"
				+       ".</li>"
				+ "<li> <b> Common </b> : Questa è l'impostazione comune. Apre alcuni links in nuove finestre "
				+       " ed altri (come precedente e successiva miniatura) nella stessa finestra. </li>"
				+ "<li> <b> New </b> : apre tutti i link in una nuova finestra. </li>"
				+ "</ul>";
				break;
		case "Pick Neighbours" :
			r = "Ci sono circa 4 miniature quando visualizzi una foto. "
				+ "Queste sono chiamate <b>Neighbours</b> di quella foto. Questa opzione determina il modo in cui le "
				+ "Neighbours di quella foto sono selezionate<br /> <ul> "
				+ "<li> <b> Both </b> : usa le foto dalle storie e dalla categoria</li> "
				+ "<li> <b> Category </b> : usa le foto della stessa categoria della foto (opzione predefinita) </li> "
				+ "<li> <b> Story </b> : usa le foto della stessa storia della foto</li> "
				+ "</ul>";
				break;
		case "HTML icon URL" :
			r = "Se la tua galleria di foto ha una icona, visualizzata a fianco della barra degli indirizzi e nei favoriti"
				+ "inserisci l'url (compreso http://) qui."
				+ endl + "Altrimenti lascia il campo vuoto.";
				break;
		case "Extra HTML Code" :
			r = "Inserisci qui codice HTML aggiuntivo o script che vuoi che siano presenti nel tuo sito"
				+ "come contatori, banners, ad-sense etc...";
				break;
		case "Banned IPs" :
			r = "Se vuoi bloccare degli utenti all'inserimento di commenti nella tua Galleria, inserisci"
				+ "i loro indirizzi IP in questa casella, uno per linea.";
				break;
		case "Manage Photos" :
			r = "Modifica ogni singola foto. Modifica, Aggiungi, cancella"
				+ "le tue foto qui."
				+ endl + "Clicca su <a>[Add]</a>, per aggiungere velocemente una foto.";
				break;
		case "Manage Drafts" :
			r = "Aggiungi le foto (anche in blocco), archivi Zip, e altri file temporaei"
				+ "(che non sono mostrati sul sito) per essere gestite successivamente.";
				break;
		case "Manage Categories" :
			r = "<b>Category</b> èn gruppo di foto con oggetto simile o legate in qualche modo"
				+ "piuttosto che in una sequenza temporale. Alcuni esempi possono essere \"Autoritratti\", \"Il mio gatto\" "
				+ ", \"Natura\" etc. Puoi aggiungere, modificare o cancellare le categorie da qui.";
				break;
		case "Manage Stories" :
			r = "<b>Story</b> è un modo di raggruppare le foto utile in modo temporale"
				+ ". \"Viaggio in Europa\", \"Compleanno\" e \"Halloween\" sono alcuni esempi. "
				+ " Possono essere paragonate a storie di un blog "
				+ endl + "Gestiscile da qui.";
				break;
		case "Manage Comments" :
			r = "I commenti sono le opinioni dei visitatori delle tue foto. Controllale (e cancellale se vuoi)"
				+ " da qui.";
				break;
		case "Adjust Preferences" :
			r = "Imposta il modo di indicizzazione della pagina principale. Temi collegamenti etc.. ";
				break;
		case "Advanced Configurations" :
			r = "Opzioni personalizzabili qui, compreso il cambio password."
				+ "E l'opzione di disinstallazione di Phormer!";
				break;
		case "Modular Actions" :
			r = "Qui trovi elencate le azioni esterne che puoi fare, come il cambio password o la cancellazione di Phormer";
				break;
		case "Change Password" :
			r = "Cambia la password di amministratore.";
				break;
		case "Uninstall Phormer" :
			r = "Cancella Phormer e tutti i dati (anche le immagini) dal server! "
				+ endl + "Se hai problemi con i permessi cancellando Phormer da console, usa questa funzione.";
				break;
		case "XML Editor" :
			r = "Modifica il sorgente dei file XML, base dati di Phormer. Ripristina "
				+ "i file XML danneggiati da qui.";
				break;
		case "Log Out" :
			r = "Disconnettiti dalla sessione amministratore, salvando le impostazioni.";
				break;
		case "adminPass.inf missed" :
			r = "Phormer salva la password dell'amministratore in un file in "
				+ "data/adminPass.inf . Sfortunatamente questo file non è più presente. Ripristinalo"
				+ "! Aiuto: crea un file adminPass.php usando un editor di testo e scrivi la tua"
				+ "password su una riga. Salva il file nella cartella data/ ."
				+ endl + "Se non hai permessi di scrittura, puoi usare il comando chmod data/ "
				+ "per da accessi di scrittura."
				+ "<a href=\"mailto:"+_AIDIN_MAIL+"\">Aideen</a> in this case may help you. ";
				break;
		case "Check Updates" :
			r = "Abilita o disabilita il controllo della presenza di aggiornamenti di Phormer ogni volta che si entra nella pagina di login. "
				+ "Il controllo verifica sul sito <a href=\"http://p.horm.org/er\">Phormer's homepage</a> "
				+ "la presenza di una versione aggiornata.";
				break;
		case "XML Missed" :
			r = " Oh!"
				+ endl + "Alcuni file XML mancano o ci sono problemi con essi"
				+ "Ci sono meno voci rispetto all'ultimo backup. "
				+ "<b>Nota che potrebbe essere dovuto al fatto di una sessione non salvata (effettuate sempre la disconnessione!)"
				+ "</b>Tutto comunque potrebbe essere ancora corretto."
				+ endl + "Controlla le impostazioni ed i contenuti del sito."
				+ "<a href=\"?page=editxml\">restore</a> the backup.";
				break;
		case "GD Extension" :
			r = "GD  una estensione di PHP necessaria alla creazione delle miniature e delle altre foto ridimensionate. "
				+ endl + "<b>Phormer potrebbe non funzionare correttamente su server senza le estensioni GD.</b>";
				break;
		case "ZIP Extension" :
			r = "ZIP è una estensione di PHP richiesta per scompattare archivi ZIP di foto."
				+ "Phormer funziona senza ZIP, ma non sarai in grado di scompattare questi tipi di file."
				+ "";
				break;
		case "EXIF Extension" :
			r = "EXIF è una estensione di PHP che permette di leggere i dati contenuti nelle immagini e che sono salvati solitamente dalle macchine fotografiche digitali, "
				+ "come flash, messa a fuoco, ottica, diaframma etc..."
				+ endl + "Phormer funziona senza questa estensione ma non potr leggere questi dati";
				break;
		case "GD Not Found" :
			r = "L'estensione GD di PHP non è installata sul server. Questo significa che "
				+ "Phormer non pu creare miniature e quindi user le foto originali in ogni occasione (sconsigliato).";
				break;
		case "Word Verification" :
			r = "Abilitando questa funzione ogni visitatore deve leggere e scrivere un numero contenuto in una immagine"
				+ "Questo serve per proteggere il tuo sito dagli spammer che solitamente in automatico inseriscono migliaia di "
				+ "commenti sulle foto."
				+ endl + "Se la tua galleria non ha spammer disabilita questa funzione per non "
				+ "annoiare i tuoi commentatori!"
				+ endl + "<b>Nota</b> che non comparirà mai all'amministratore, perciò se vuoi testare questa funzione devi , "
				+ "prima scollegarti come amministratore.";
				break;
		case "Display Email" :
			r = "Imposta il modo in cui viene visualizzata l'email dell'autore (a lato e in fondo alla agina). Queste le opzioni:"
				+ "<br /><ul>"
				+ "<li> <b> Modified </b> : Converte @ in [at] e . in [dot], come <b><a "
					+ "href=\"mailto:me[at]here[dot]com\">Email</a> </li></b> "
				+ "<li> <b> As Is </b> : mostra l'email come <b><a href=\"mailto:me@here.com\">Email</a></b> </li> "
				+ "<li> <b> Text </b> : Testo semplice come, like <b>me [at] here [dot] com</b> </li> "
				+ "<li> <b> Hidden </b> : Nascosta! </li> "
				+ "</ul>"
				+ endl + "Nota che la tua email deve essere valida in quanto potrebbe essere usata per gli avvisi";
				break;
		case "PhotoGallery Name" :
			r = "Il nome della tua galleria, mostrato in cima alle pagine.";
				break;
		case "PhotoGallery Desc" :
			r = "Descrizione della tua galleria. Viene scritta appena sotto il nome"
				+ "Può essere una semplice riga come <b>\"Le mie foto\"</b> "
				+ "o una complessa come <b>\"Foto in una notte di mezza estate\"</b>.";
				break;
		case "Author Name" :
			r = "Il nome degli autori indicato sotto ogni foto.";
				break;
		case "Author Email" :
			r = "Email dell'amministratore che può essere visualizzata (Impostazioni avanzate)"
				+ " at advanced configurations) agli utenti ed usata per le notifiche di nuovi commenti";
				break;

		case "Theme" :
			r = "Imposta il tema della pagina principale. "
				+ endl + "Cliccando su <b>Preview</b> , puoi avere una anteprima del tema"
				+ "senza doverlo salvare.";
				break;
		case "External Links" :
			r = "In questa sezione gestisci i tuoi collegamenti esterni, come altri photoblog o i"
				+ "tuoi siti favoriti."
				+ endl + "<b>Consiglio: </b> i collegamenti <b>no Link URL</b> , sono considerati intestazioni"
				+ "e possono essere usati per separare gruppi di link.";
				break;
		case "Link Name" :
			r = "Nome del link.";
				break;
		case "Link URL" :
			r = "Indirizzo URL del collegamento, incluso http://";
				break;
		case "Link Title" :
			r = "Testo che compare quando il mouse si posiziona sopra il link. "
				+ "Puoi lasciare anche vuoto questo campo se non sai cosa inserire.";
				break;
		case "Add/Del Link" :
			r = "Aggiungi un nuovo link sotto questo / Cancella il link.";
				break;
		case "Index Mode" :
			r = "Visualizzazione della pagina index.php. Cliccando su <b>preview</b> "
				+ "puoi avere una anteprima della pagina senza doverla salvare."
				+ endl + "<b>Nota</b>: I cambiamenti nella barra laterale non sono mostrati nell'anteprima";
				break;
		case "Time Differ" :
			r = "La differenza tra l'ora del server e quella della tua regione. Questa differenza"
				+ "viene aggiunta all'ora del server. Per esempio se il tuo server è GMT 0 e tu vivi in Iran (GMT "
				+ " +3:30) allora inserisci 210."
				+ endl + "<b>NOTA:</b> L'unità di misura è in <b> Minutes </b>"
				+ endl + "<b>Suggerimento:</b> Espressioni matematiche come \"3*60+30\" sono permesse!";
				break;
		case "Drafts" :
			r = "Nella sezione <b>Drafts</b> puoi:<br /><ul>"
				+ "<li><b>Upload Files</b>: Aggiungere photo, in formato zip o una cartella intera.</li>"
				+ "<li><b>Manage Items</b>: Aggiungere velocemente foto e/o cancellarle.</li>"
				+ "</ul>";
				break;
		case "Upload Photos to Draft" :
			r = "In questa sezione puoi aggiungere le tue foto nella sezione bozza(draft)."
				+ "Puoi inserirne una o più <br /><ul>"
				+ "<li><b>Dal PC</b>: può essere una foto o un archivio .zip.</li>"
				+ "<li><b>Dal Server</b>: usando un link (da un altro sito web). Deve iniziare con http:// e puntare ad una foto "
				+ "(with relative / absolute addressing) o ad una cartella (<b>deve terminare con /</b>).</li>"
				+ "</ul>"
				+ endl + "<b>NOTA</b>: è consigliato non aggiungere file zip contenenti più di 25 foto"
				+ "in quanto potrebbe creare problemi su server lenti !";
				break;
		case "Manage Photos in Draft" :
			r = "Qui puoi aggiungere velocemente le foto oppure cancellarle.";
				break;
		case "Manage Drafts: Thumbnail" :
			r = "Questa è una miniatura generata automaticamente dal centro dell'immagine"
				+ "per poter riconoscerla più velocemente."
				+ endl + "However, in <b>quick add</b>, this thumbnail would be picked!";
				break;
		case "Manage Drafts: Information" :
			r = "These are the least information asked from you to quick add. Anyway, you can even "
				+ "leave these blank, yet!";
				break;
		case "Manage Drafts: Action" :
			r = "Queste sono le impostazioni riguardanti una immagine. <br /><ul>"
				+ "<li><b>Detailed add</b>: Like adding a single photo to <b>Manage Photos</b> part, "
				+	"but without require to upload - uses this photo!</li>"
				+ "<li><b>Delete this</b>: Cancella questo file, piuttosto che un gruppo di file. "
				+ "</ul>";
				break;
		case "Drafts :: Delete Selected" :
			r = "Qui puoi cancellare una o piu immagini presenti nella cartella Draft. "
				+ "Selezionali e premi <b>Perform!</b>";
				break;
		case "Drafts :: Quick-add Selected" :
			r = "Qui puoi aggiungere molte foto in un click. Procedi in questo modo: <br /><ol> "
				+ "<li>Seleziona le foto che desideri dalla lista qui sotto.</li>"
				+ "<li>Se vuoi, inserisci nome e descrizione delle foto.</li>"
				+ "<li>Seleziona questo bottone.</li>"
				+ "<li>Configura le opzioni come la categoria.</li>"
				+ "<li>Infine premi <b>Perform!</b></li>"
				+ "</ol>"
				+ endl + "<b>NOTA</b>: è sconsigliato aggiungere più di 20 foto con questo sistema"
				+ "perchè su sistemi non performanti potrebbe causare problemi "
				+ "di timeout!";
				break;
		case "Upload Path" :
			r = "<b>Upload Path on PC</b>:<br />Esplora le tue foto dal tuo harddisk. "
				+ endl + "Note that <b>zip files</b> with several photos inside should only be uploaded "
				+ "in drafts area.<br />"
				+ "<br /><b>Upload Path on Server</b>:<br />"
			    + "Either a local path (absolute by / or relative since upload.php directory) to a photo "
				+ "or a link to an external (beginning with http:// ) file on the web."
				+ endl + "Note that <b>import folder</b> is available in <b>drafts</b> mode and on that "
				+ "case, your folder link (surely, local; but either relative or absolute) should end "
				+ "with / to include all photos on that directory";
				break;
		case "Add Photo Link" :
			r = "By clicking on that link, you'll be able to add your photos to the PhotoGallery. "
				+ endl + "If you wish to add an already-uploaded (in drafts) photo, click on "
				+ "<a class=\"q\">From Drafts</a> Link.";
				break;
		case "Edit Photos Link" :
			r = "Here, in this short form field, you can go to edit page of any photo you wish and modify "
				+ "any data you'd sent when was adding it - even it's rating (!) or its source photo!"
				+ endl + "just enter its PhotoID (the number which appears at the end of its link) "
				+ "and then press <b>Edit!</b>";
				break;
		case "Add/Del Photos to Categ/Story" :
			r = "In this short form field, you can do various actions like adding or deleting any photo "
				+ "to/from any story or category. Just fill the photo's id, namely PID (which appears at "
				+ "the end of its link) and then the ID of category or story (which, in the same way, "
				+ "is placed at the end of that container's link)."
				+ endl + "<b>Note</b>: Remember that a photo can't be deleted from its default category "
				+ "or story."
				+ endl + "<b>Hint</b>: Putting a single photo into many (related) categories or stories "
				+ "helps visitors to access it, faster and easier!";
				break;
		case "Photo: Global Data" :
			r = "Essential information about photo has to be entered through these fields."
				+ endl + "Although it's been told that these data are <b>required</b>, but you can leave "
				+ "any of them empty, despite visitors may require them to know.";
				break;
		case "Photo: Title" :
			r = "Title of the photo is a name you let on that photo. a good title can add lots to the "
				+ "worth and meaning of the photo."
				+ endl + "However, if you can't find a proper name for a photo, you can leave it "
				+ "empty - Phormer will show no name for that photo.";
				break;
		case "Photo: Description" :
			r = "Information about the photo, e.g. where photo has taken or who are the people in the "
				+ "photo. Technical information like focus mode, PhotoShop manipulation (if made) should "
				+ "NOT be placed here, but in <b>Photo Info</b> Part."
				+ endl + "<b>Hint</b>: HTML tags are allowed here.";
				break;
		case "Photo: Time Added" :
			r = "The time you're going to add this photo(s) to the gallery. It'll automatically be set to "
				+ "current time and <b>Time Differ</b> with server (if set in <b>Advanced Configuration</b> "
				+ "part) will be added to it by Phormer.";
				break;
		case "Photo: Get Comments" :
			r = "Let visitors leave comments for it (these in drafts) or not.";
				break;
		case "Photo: Photo Info" :
			r = "The technical information of the photo, rather than social ones that should be "
				+ "placed at <b>Photo Desc</b>"
				+ endl + "other informations (like an external script or link) can be set here.";
				break;
		case "Photo: Default Categ" :
			r = "Default <b>Category</b> of the photo, which is the major (nearst in subject) category "
				+ "to the photo."
				+ endl + "You can't remove a photo from its category, but can add it later (in first "
				+ "page of <b>Manage Photos</b> part) to various categories. This category will be "
				+ "used for picking neighbours (if set at advanced configuration area) and <a "
				+ "class=\"q\">[up]</a> link of the photo."
				+ endl + "<b>Note</b>: A photo will be protected (not visible by anyone) if and only "
				+ "if either its <b>Default</b> category or story be passworded."
				+ endl + "<b>Hint<b>: in drafts mode, this default category will apply for all!";
				break;
		case "Photo: Default Story" :
			r = "Same as <b>Default Category</b>, here, the major story (actually the one that photo "
				+ "is taken/occured within) shall be set. later you can add photo to other stories"
				+ endl + "<b>Note</b>: A photo will be protected (not visible by anyone) if and only "
				+ "if either its <b>Default</b> category or story be passworded."
				+ endl + "<b>Hint<b>: in drafts mode, this default story will apply for all!";
				break;
		case "Photo: Date Taken" :
			r = "The date, photo has been taken on that. If you don't remind that, leave it empty.";
				break;
		case "Photo: Hits, Rate" :
			r = "Hit count and rating (sum of all rates / number of raterss) of the photo is here. "
				+ "One may ask it's other of honesty to modify these, manually. The answer (yet is "
				+ "inconvincible somehow) is that, the photo may have been imported (has previously "
				+ "hit counts or got lots of counts due to a test and author wish to dismiss them.";
				break;
		case "Thumbnail" :
			r = "Thumbnail is a small version of the photo which can be either a part of it or "
				+ "reduced / resized of entire photo or a combination of it!"
				+ endl + "Phormer just supports square thumbnails and has provided a handy tool "
				+ "to generate what you do expect of a square thumbnail to be!"
				+ endl + "<b>Hint</b>: by holding shift key on the keyboard, the thumbnail grows / "
				+ "shrinks symmetrically."
				+ endl + "<b>Hint</b>: If the image has not been displayed after upload but picker "
				+ "becomes available, just click on <b>Thumbnail Preview</b> label!"
				+ endl + "<b>Hint</b>: By doing a double-click on thumbnail picker skeleton, the "
				+ "size grows to fix. once again, after that, size shrinks to thumbnail's original!";
				break;
		case "Container Management" :
			r = "This is the place to manage containers. You can add a new container, edit your "
				+ "currently created containers (either categories or stories) or delete them."
				+ endl + "<b>Note</b> that <b>Delete</b> part might be too useful - you can "
				+ "delete only a container or <b>the photos inside that container</b> or &#133; "
				+ "Take a look!";
				break;
		case "Container Name" :
			r = "Name of the container (Category / Story), that would be displayed in list of them "
				+ "and also when is default container of a photo, in that photo's details.";
				break;
		case "Container Description" :
			r = "Notes about the container, like the trip, the story is about to or your idea about "
				+ "the subject of a category.";
				break;
		case "Container Visibility" :
			r = "Whether this container should be listed on containers list (on sidebar) or not. "
				+ endl + "<b>Hint</b>: you may not like your private (passworded) sets to be listed!";
				break;
		case "Container Privacy" :
			r = "Questa opzione serve a proteggere le foto. Tutte le foto con password saranno protette"
				+ "<b>Nota</b> che se aggiungi una foto ad una categoria protetta A, ma la sua categoria predefinita è B"
				+ " che è pubblica, allora la foto sarà ancora visibile al pubblico.";
				break;
		case "Container Inheritance" :
			r = "Qui puoi impostare una storia o categoria come figlia di un'altra storia o categoria. "
				+ endl + "";
				break;
		case "Help System" :
			r = "Scegli la lingua degli aiuti. E' possibile anche disabilitare totalmente questi messaggi. ";
				break;
		case "Copyright Note" :
			r = "Qui puoi inserire le note di <b>Copyright</b> stampate in fondo alle pagine di Phormer"
				+ "Alcune variabili sono disponibili:<br /><ul>"
				+ "<li><b>$name</b>: Mostra il nome dell'autore.</li>"
				+ "<li><b>$email</b>: Mostra l'email dell'autore, definita nelle <b>preferenze</b></li>"
				+ "<li><b>$Phormer</b>: Mostra il link al sito di <a class=\"q\" href=\"http://p.horm.org/er\">"
				+		"Phormer, ver ???</a>, dove ???  la versione attuale.</li>"
				+ "</ul>"
				+ endl + "<b>Hint</b>: i tag HTML e simboli (come &amp;copy; for &copy;) sono permessi."
				+ endl + "<b>Note</b> che queste variabili sono case-sensitive!"
				+ endl + "<b>Ask</b>: si chiede di inserire la variabile $Phormer da qualche parte nel pi di nota. "
				+ "Grazie!";
				break;

		default :
			r = "Messaggio di aiuto non disponibile per questa voce. <br />"
				+ " &nbsp; Notify <a href=\"mailto:"+_AIDIN_MAIL+"&subject=No Help for "+s+"\">Aideen</a> of that!";
				break;
	}

	return "&nbsp;"+r;
}