/*
  * Help File System of Phormer (based on 3.32)
  * Language: French
  * Author: Masoumeh Nazairan <masi000<at>gmail{dot}com>
  *
  * Translation 1.0: October 2007
  * Version 1.1: [ April 01, 2008] Added to Phormer 3.33
  */
function GetFrHelpMsg(s) {
	var r = "";
	var endl = "<br /> &nbsp; ";
	switch (s) {
		case "help":    //Aide 
			r = "Ceci est le nouveau dispositif d'Aide de Phormer!<br />"
			//r = "This is the new Help feature of Phormer!<br />"	
				+ "&nbsp; Vous trouverez des informations utiles sur chaque article/menu en \
					cliquant sur le point d'interrogation (<a class=\"q\">?</a>) à côté de l'article.<br />"
			    	//+ "&nbsp; You'll find useful information about each item/menu by \
					//clicking on the question mark (<a class=\"q\">?</a>) next to the item.<br />"
			    	+ "Pour écarter cette fenêtre, l'un ou l'autre <br /> <ul> "
				//+ "To dismiss this window, either <br /> <ul> "
				+ "<li> Cliquez sur le lien d'<a class=\"bLink\" onclick=\"HideHelp();\">[Ecarter]</a></li>"
				//+ "<li> Click the <a class=\"bLink\" onclick=\"HideHelp();\">[Dismiss]</a> link </li>"
				+ "<li> Cliquez quelaue part autrement cette zone de dialogue </li>"
				//+ "<li> Click somewhere else this dialogue box </li>"
				+ "<li> Frappez la clef d'echapper (Esc) sur le clavier </li>"
				//+ "<li> Hit escape (Esc) key on keyboard </li>"
				+ "</ul>";
				break;
		case "Update Message" :     //Message de Mise à Jour 
			r = "Si vous ne voulez pas Phormer, vérifier sa mise à jour, neutralisez "
			//r = "If you don't want Phormer to check for its update everytime, disable "
				+ "ce dispositif à la zone de <b>Configuretion Avançée</b>  (Bien entendu, aprés avoir entré!)";
				//+ "this feature at <b>Advanced Configuration</b> area (of course, after logging in!)";
				break;
		case "Administration Region" :    //Zone d'Administration
			r = "Ceci est le panneau de commande de votre GalerieDePhoto. Gérez tout d'ici!";
			//r = "This is the control panel of your PhotoGallery. Manage everything from here!";	
				break;

		case "Default Photo Num in Box" :    //Nombre Compensatoire de Photo en Boîte 
			r = "Nombre compensatoire des photos quand le mode d'affichage est Boîte Jungle. Les valuers plus "
			//r = "Default number of Photos when the display mode is Jungle Box. Values higher "	
				+ "que 50 causera le long délai de chargement et retarde également dans les clients lents."; 
				//+ "than 50 will cause long time to load and also delay in slow clients.";
				
				break;

		case "Default Photo Num in Recents" :   //Nombre Compensatoire de photo Dans Récents
			r = "Nombre compensatoire des photos en \"Les Photos Récemment Visitées\" ou en"
			//r = "Default number of Photos in the \"Recently Visited Photos\" Part or "	
				+ "\"Les Photos Récemment Ajoutées\" partie. "
				//+ "\"Recently Added Photos\". "
				+ endl + "En outre le nombre de photos en mode <b>aléatoire</b> est égal à ce que vous "
				//+ endl + "Also number of photos in <b>Random</b> mode is equal to what you "
				+ "placez ici.";
				//+ "set here.";
				break;
   
		case "Default Photo Num in Tops" :   //Nombre Compensatoire de Photo En Tête
			r = "Le nombre compensatoire des photos dans \"Les Photos Les plus Visitées\" piéce ou \"Maximum Ratées\" Part or \"Top Rateds\". ";
			//r = "Default number of Photos in the \"Most Visited Photos\" Part or \"Top Rateds\". ";	
				break;

		case "Default Story Num in mode" :    //Nombre Compensatoire d'Histoire En Mode
			r = "Nombre de défaut d'histoires à montrer quend le ,ode de défaut est \"Histoire\". Chaque "
			//r = "Default Number of Stories to be displayed when the default mode is \"Story\". Each "	
				+ "Histoire serait montrée dans une rangée avec sa dernière photos supplémentaire."; 
				//+ "Story would be displayed in a row with its last added photos.";
				break;

		case "Default Story Num in Sidebar" :  //Nombre Compensatoire d'Histoire Dans SideBar
			r = "Le Nombre compensatoire d'Histoires à énumérer dans la boîte sidebar. Les valuers moins que le nombre total "
			//r = "Default Number of Stories to be listed in sidebar box. Values less than total number "	
				+ "des histoires fera énumérer à un lien d'option \"List Toutes les Histoires\" à montrer." ;
				//+ "of Stories will cause a link to \"list all stories\" option to be displayed." ;
				break;

		case "Transparency Percentage" :   //Pourcentage De Transparence
			r = "Le pourcentage de l'opacité au-dessus des thumbnails;  souris-au-dessus de ce que soyez purgé au moment. " 
			//r = "The percentage of opacity over the thumbnails; which would be purged upon mouse-over. "
				+ endl + "Plus de pourcentage causera plus d'obscurité. Ainsi, pour neutraliser ce dispositif, " 
				//+ endl + "More Percentage will cause more darkness. Thus, To disable this feature, "
				+ "Seulement placez juste ceci des valeurs à 100% (aucune opacité en effet).";
				//+ " just set this values to 100% (no opacity indeed).";
				break;

		case "Jpeg Compression Percentage" :  //Pourcentage De Compression De JPEG
			r = "le rapport de la compression de JPEG pendant la génération des thumbnails et remettrage des images  à la côte." 
			//r = "The ratio of Jpeg Compression during generation of thumbnails and resizing images. "	
				+ "Des valeurs plus élevées causeront plus de qualité mais, d'autre part, (taille en bytes)" 
				//+ "Higher values will cause more quality but, on the other hand, heavier (size in bytes) "
				+ " dossiers plus lourds ! 70% est suggéré. "
				//+ " files! 70% is suggested. "
				+ endl + "Cette valeur n'affectera pas les dessiers/thumbs actuellement créé et serait employée "
				//+ endl + "This value will not affect currently created files/thumbs and would be used "
				+ "pour de futures créations. ";
				//+ "for future creations. ";
				break;

		case "Thumb Links Target" :   //maniez maladroitement la cible de liens
			r = "la manière une image désirée, en cliquant sur son thumbnail, vous ouvrez -- dans une nouvelle "
			//r = "The way a desired image, when clicking on its thumbnail, opens -- either in a new "
				+ "fenêtre de browser ou dans la même fenêtre."
				//+ "window of browser or in the same window."
				+ endl + "Les options sont: <br /> <ul>"
				//+ endl + "Options are: <br /> <ul>"
				+ "<li> <b> Même </b> : N'ouvre jamais un lien dans une nouvelle fenêtre -- toujours sur "
				//+ "<li> <b> Same </b> : Never opens a link in a new window -- always on the "
				+       "la fenêtre courante. </li>"
				//+       " current window.</li>"
				+ "<li> <b> Terrain communal / courante </b> : Ceci la méthode commune / courante. Ouvrez quelques liens dans de nouvelles fenêtres "
				//+ "<li> <b> Common </b> : This's the common method. Open some links in new windows "
				+       " et d'autres (comme après et des pouces de prev) dans les mêmes fenêtres. </li>"
				//+       " and others (like next and prev thumbs) in the same windows. </li>"
				+ "<li> <b> Novelle </b> : Ouvre toujours n'importe quel lien dans une nouvelle fenêtre. </li>"
				//+ "<li> <b> New </b> : Always opens any link in a new window. </li>"
				+ "</ul>";
				break;
		case "Pick Neighbours" :   //Choisir des Voisins
			r = "Vous voyez / savez, il y a quelques uns (environ 4) des pouces au-dessous de chaque photo, vue dans la grande taille. "
			//r = "You see, there're a few (about 4) thumbs below each photo, viewed in large size. "	
				+ "Ceux sont appelés <b>Les Voisins</b> de cette photo. Cette option, détermine la manière que "
				//+ "Those are named <b>Neighbours</b> of that photo. This option, determines the way the "
				+ "Les Voisins d'une photo seront sélectionnés -- l'un ou l'autre <br /> <ul> "
				//+ "Neighbours of a photo shall be picked -- either <br /> <ul> "
				+ "<li> <b> Tous Les Deux </b> : De tous les deux, de l’histoire et de la catégorie (une combinasion aléatoire d'elles) </li> "
				//+ "<li> <b> Both </b> : From both that story and category (a random combination of them) </li> "
				+ "<li> <b> La Catégorie </b> : De la catégorie que la photo appartient à (juste du défaut) </li> "
				//+ "<li> <b> Category </b> : From the category that photo belongs to (just the default) </li> "
				+ "<li> <b> L'Histoire </b> : De l'histoire que la photo appartient à (juste l'histoire de défaut d'elle) </li> "
				//+ "<li> <b> Story </b> : From the story that photo belongs to (just the default story of it) </li> "
				+ "</ul>";
				break;
		case "HTML icon URL" :   //URL icône HTML
			r = "Si votre GalerieDePhoto a une icône, qui est placée près du URL en browsers, et/ou "
			//r = "If your Photo gallery has an icon, which is placed near the URL in browsers, and/or "	
				+ "s'emploie dans l'action favori, mettez son URL (including http://) ici."
				//+ "uses in favoriting action, put its URL (including http://) here."
				+ endl + "Autrement, si vous n'êtes pas intéressé de ce dispositif, laissez ce champ vide.";
				//+ endl + "Else, If you're not interested in that feature, leave this field empty.";
				break;
		case "Extra HTML Code" :   //Code supplémentaire /extra de HTML
			r = "Voici l'endroit pour mettre des codes additionnels de HTML et les manuscrits que vous souhaitez être placés dans "
			//r = "Here's the place to put additional HTML codes and scripts you wish to be placed in "	
				+ "votre site web, par example des compteurs de coup, bannières, annonce-sentent / ad-sense et ainsi.";
				//+ "your website like hit counters, banners, ad-sense and so.";
				break;
		case "Banned IPs" :   //IPs interdits
			r = "Si vous voulez bloquer une certaine personne de laisser le commentaire pour votre Gallerie de Photo, "
			//r = "If you want to block some person of leaving comment for your PhotoGallery, just "	
				+ "pâte juste leurs adresses d'IP ici, une par la ligne.";
				//+ "paste their IP addresses here, one per line.";
				break;
		case "Manage Photos" :   //Gérer Les Photos
			r = "Editez n'importe quelle photo simple. La modification, s'ajouter, enlever et presque chaque autre travail "
			//r = "Edit any single Photo. Modifying, Adding, removing and almost every other work "	
				+ "avec des photos devraient être effectués dedans ici."
				//+ "with photos should be done in here."
				+ endl + "En cliquant dessus <a>[ajoutez]</a>, vous pouvez rapidement ajouter une photo simple.";
				//+ endl + "By clicking on <a>[Add]</a>, you can quickly add a single photo.";
				break;
		case "Manage Drafts" :   //Gérer Les Brouillons
			r = "Les photos téléchargées (beaucoup une fois en vrac), ferment la fermeture éclair des articles, photos d'importation et n'importe quel autre saved "
			//r = "Uploaded photos (many once in bulk), Zip items, Import photos & any other temporary saved "	
				+ "(et provisoire ne montrant pas au public) ou les articles téléchargés par masse sont stockés ici pour être contrôlés.";
				//+ "(and not showing to public) or mass uploaded items are stored here to be managed.";
				break;
		case "Manage Categories" :   //Gérer Les Catégories
			r = "Une <b>Catégorie</b> est un ensemble de photos qui ont la similitude au sujet ou sont relatives en quelque sorte plutôt "
			//r = "A <b>Category</b> is a set of photos that have similarity in subject or are relative in a manner "	
				+ "de time-line. Des exemples de celui peuvent être \"Les Portraits d'Individu\", \"kitty (mon animal de compagnie)\" "
				//+ "rather than time-line. examples of that can be \"Self Portraits\", \"Kitty (My Pet)\" "
				+ ", \"La Nature\" et etc. Vous pouvez ajouter, enlevez et contrôlez totalement des catégories d'ici.";
				//+ ", \"Nature\" and etc. You can add, remove and totally manage categories from here.";
				break;
		case "Manage Stories" :    //Gérer Les Histoires
			r = "Une <b>Histoire</b> est un autre récipient de photos, qui est utile pour grouper des projectiles dans "
			//r = "A <b>Story</b> is another container of photos, that is useful for grouping shots in a "	
				+ " une période. \"Une Voyage de Euro\", l'\"Anniversaire\" et \"Halloween\" peuvent être des histoires. "
				//+ " period of time. \"Europe Trip\", \"BirthDay\" and \"Halloween\" can be stories. "
				+ " En fait, les histoires sont comme des poteaux d'un weblog qui peut être mis à jour rarement après que la première "
				//+ " Actually, stories are like posts of a weblog which may be updated rarely after first "
				+ " mise à jour mais une nouveau soit ajoutée bientôt. "
				//+ " update but a new one would be added soon."
				+ endl + "Contrôlez-les d'ici.";
				//+ endl + "Manage them from here.";
				break;
		case "Manage Comments" :   //Gérer Les Commentaires
			r = "commentaires sont des avis de visiteurs au sujet de vos photos. Vérifiez (et supprimez-les que vous n'aimez pas !) "
			//r = "Comments are visitors opinions about your photos. Check (and delete which you don't like!) "	
				+ "d'ici.";
				//+ "from here.";
				break;
		case "Adjust Preferences" :   //Le Réglage / Régler / ajuster des Préférences
			r = "Réglez le mode d'indexation d'en première page, du thème, des liens et etc. d'ici. ";
			//r = "Set the indexing mode of front-page, Theme, links and etc. from here. ";	
				break;
		case "Advanced Configurations" :    //Configurations Avancées
			r = "Ceci sont les options costumizables (quelque chose que vous pouvez avoir besoin de / pour changer). Egalement Changement du mot de passé "
			//r = "Customizable options (anything you may need to change) is there. also Change Password "	
				+ "et l'option de Uninstalling Phormer!";
				//+ "and the option of Uninstalling Phormer!";
				break;
		case "Modular Actions" :    //Actions 
			
			//r = "Listed items in below are external actions you can do with your Phormer, like Password "
			
				//+ "changing or Uninstall.";
				break;
		case "Change Password" :   //Changer le MotDePassé
			r = "Changez le mot de passé simple de l'Administration d'ici.";
			//r = "Change the single password of Administration from here.";	
				break;
		case "Uninstall Phormer" :    //
			r = "Effacez Phormer et tous les données (les images, les fichiers de XML), du serveur! "
			//r = "Erase Phormer and all of the datas (image, XML files), from the server! "	
				+ endl + "Vous savez, pendant que des images créées et les fichiers de XML sont écrits par Phormer (PHP) "
				//+ endl + "You know, as created images and XML files are written by Phormer (PHP) "
				+ "sur le serveur, le propriétaire de ces fichiers seriez Phormer et ainsi, vous ne pouvez pas facilement faire "
				//+ "on server, the owner of those files would be Phormer and thus, you may not easily do "
				+ "<tt>rm -rf</tt> pour les omettre tous. Ce module indique Phormer enlever quelque chose qu'il a  "
				//+ "<tt>rm -rf</tt> to omit them all. This module tells Phormer to remove anything it has "
				+ "fait et alors vous pourriez effacer d'autres fichiers (ce que vous êtes leur owner).";
				//+ "made and then you would be able to erase other files (which you are their owner).";
				break;
		case "XML Editor" :    //Editeur De XML
			r = "Editez la source des fichiers de XML, qui sont les pièces de base de stockage de Phormer. En outre "
			//r = "Edit the source of XML files, which are the basic storage parts of Phormer. Also "	
				+ "reconstituez des XMLs manqués / corrompus d'ici.";
				//+ "restore the missed / corrupted XMLs from here.";
				break;
		case "Log Out" :    //Déconnexion
			r = "Dissez au revoir à cette session et menez votre authentification dans la région d'Aministration.";
			//r = "Say goodbye to this session and finalize your authentication in Administration Region.";	
				break;
		case "adminPass.inf missed" :    //adminPass.inf Manqué
			r = "vous peut savoir que Phormer réserve le mot de passe de l'administration, brut dans un fichier de texte dans " 
			//r = "You may know Phormer stores Administration's Password, raw in a text file in "
				+ "le fichier data/adminPass.inf. Malheureusement, maintenant ce fichier est manqué. Remplacez un "
				//+ "data/adminPass.inf file . Unfortunately, now this file is missed. replace one "
				+ "vous-même! c.-à-d. créez un fichier d'adminPass.php en utilisant n'importe quel texte-rédacteur et écrivez votre "
				//+ "yourself! i.e. create a adminPass.php file using any text-editor and write your "
				+ "mot de passe désiré dans une ligne dans elle et placez-alors le dans mot de passe désiré dans une ligne dans elle et placez-alors le dans la chemise des données/." 
				//+ "desired password in one line in it and then place it in data/ folder."
				+ endl + "Si vous n'avez pas d'accès pour écrire là, vous l'une ou l'autre chmod données/ pendant "
				//+ endl + "If you've no write access to there, you shall either chmod data/ for "
				+ "un moment ou écrire un manuscrit de PHP pour copier votre adminPass.php aux données/. "
				//+ "a while or write a PHP script to copy your adminPass.php to data/. "
				+ "<a href=\"mailto:"+_AIDIN_MAIL+"\">Aideen</a> en cela peut vous aider. ";
				//+ "<a href=\"mailto:"+_AIDIN_MAIL+"\">Aideen</a> in this case may help you. ";
				break;
		case "Check Updates" :   //Vérifier La Mis à Jour
			r = "This options is about the update check that runs everytime at the login page. "
			//r = "Cet option est au sujet du contrôle de mise à jour qui toujours exécute à la page d'ouverture. "	
				+ "Tout qu'il doit se relier au <a href=\"http://p.horm.org/er\">homepage de Phormer</a> " 
				//+ "All it does is to connect to <a href=\"http://p.horm.org/er\">Phormer's homepage</a> "
				+ "et vérifie s'il y a une nouvelle version de Phormer pour que vous soyez mis à jour."; 
				//+ "and checks if there's a new version of Phormer for you to be updated.";
				break;
		case "XML Missed" :    //XML Manqué
			r = " Oh!"
				+ endl + "Some XML files, due to bad server actions or synchronous write attemps "
				//+ endl + "Some XML files, due to bad server actions or synchronous write attemps "
				+ "or ... seems to be corrupt -- has less item than the last back-up of them. "
				//+ "or ... seems to be corrupt -- has less item than the last back-up of them. "
				+ "<b>Note that it might be because of a not-logouted session "
				//+ "<b>Note that it might be because of a not-logouted session "
				+ "</b> (which causes no re-back-up action) and thus <b>everything may still be OK!</b>."
				//+ "</b> (which causes no re-back-up action) and thus <b>everything may still be OK!</b>."
				+ endl + "Verify the contents and then if unfortunately Phormer has detected right, "
				//+ endl + "Verify the contents and then if unfortunately Phormer has detected right, "
				+ "<a href=\"?page=editxml\">restore</a> the backup.";
				//+ "<a href=\"?page=editxml\">restore</a> the backup.";
				break;
		case "GD Extension" :    //La Prolongation GD
			//r = "GD is an extension of PHP which is required for creating thumbnails and resizing photos. "
			r = "GD est une prolongation de PHP qui est exigé pour créer des thumbnails et remettre à la côte des photos. "	
				+ endl + "<b>Phormer peut ne pas fonctionner correctement sur des serveurs sans prolongements de GD.</b>";
				//+ endl + "<b>Phormer may not work properly on servers without GD Extensions.</b>";
				break;
		case "ZIP Extension" :    //La Prolongation ZIP
			//r = "ZIP is an extension of PHP which is required for unzipping bulk-uploaded photos though "
			r = "ZIP est une prolongation de PHP qui est exigé pour ouvrir les photos volume-téléchargées cependant " 	
				+ "un fichier de zip. Phormer fonctionne sans ZIP, mais vous ne pourriez pas télécharger un fichier de zip " 
				//+ "a .zip file. Phormer works without ZIP, but you would be unable to upload a .zip file "
				+ "de beaucoup de photos dans des travaux d'ébauche."; 
				//+ "of many photos in draft works.";
				break;
		case "EXIF Extension" :    //La Prolongation EXIF
			r = ""
			//r = "EXIF is an extension of PHP for reading additional datas of photos, caught by digital "
				+ "cameras. flash length, focus mode and date taken are of those kind."
				//+ endl + "Phormer works without EXIF but is unable to read those data in that case";
				break;
		case "GD Not Found" :     //GD Non Trouvé
			r = "La prolongation GD de PHP n'est pas installé sur votre serveur. De cette façon, Phormer ne peut pas "
			//r = "The extension GD of PHP is not installed on your server. This way, Phormer is unable "
				+ "créer des thumbnails d'approperiate et emploiera la photo originale partout requise."; 
				//+ "to create approperiate thumbnails and will use the original photo everywhere needed.";
				break;
		case "Word Verification" :    //La Vérification De Mot
			r = "en permettant ce dispositif, chaque visiteur doit lire une image et écrire son nombre "
			//r = "By enabling this feature, each visitor has to read an image and write its number "
				+ "sur classé. Ce doit protéger le commentaire contre les inondateurs qui sont des bots qui laissent "
				//+ "on a filed. This is to protect commenting from spammers which are bots that leave "
				+ "de nombreux commentaires sur des photos."
				//+ "numerous comments on photos."
				+ endl + "Si votre galerie n'a aucun inondateur, c'est une bonne idée de neutraliser ce dispositif et "
				//+ endl + "If your gallery has no spammer, it's a good idea to disable this feature and "
				+ "ne dérange pas les commentors!"
				//+ "don't disturb commentors!"
				+ endl + "<b>Notez</b> qu'il ne tracasserait jamais l'Admin ! Ainsi, si vous voulez l'examiner, "
				//+ endl + "<b>Note</b> that it would never bother Admin! Thus, if you want to test it, "
				+ "vous devriez déconnecter la zone d'administration, avant.";
				//+ "you should log out the administration area, before.";
				break;
		case "Display Email" :    //Montrer l'email
			
			//r = "The way that Email of the author displays (at sidebar and footer). options are:"
				+ "<br /><ul>"
				
				//+ "<li> <b> Modified </b> : Converts @ to [at] and . to [dot], like <b><a "
					
					//+ "href=\"mailto:me[at]here[dot]com\">Email</a> </li></b> "
				
				//+ "<li> <b> As Is </b> : Just a mailto: link, like <b><a href=\"mailto:me@here.com\">Email</a></b> </li> "
				
				//+ "<li> <b> Text </b> : Simple text, like <b>me [at] here [dot] com</b> </li> "
				
				//+ "<li> <b> Hidden </b> : Hides it private and writes nowhere! </li> "
				+ "</ul>"
				
				//+ endl + "Note that your entered email address has to be valid, since it might be used on "
				
				//+ "notifications.";
				break;
		case "PhotoGallery Name" :    //Nom de GalerieDePhoto
			r = "Le nom de la GallerieDePhoto qui est employé surtout des pages."; 
			//r = "Name of the PhotoGallery which is used above all of pages.";
				break;
		case "PhotoGallery Desc" :    //
			r = "Description du PhotoGallery qui est écrit au-dessous du nom de PhotoGallery au "
			//r = "Description of the PhotoGallery which is written below the name of PhotoGallery at "
				+ "dessus de toutes les pages. Ce peut être un nom simple comme <b>\"Mes Photos avec Mon appareil-photo\"</b> "
				//+ "the top of all of the pages. It can be a simple name like <b>\"My Photos with My camera\"</b> "
				+ "ou compliqué comme <b>\"Hallucination d'une vue d'opalescence.\"</b>."; 
				//+ "or a complicated one like <b>\"Hallucination from an opalescence view\"</b>.";
				break;
		case "Author Name" :    //Nom de l'Author
			r = "Nom de l'author(s) utilisé au-dessous de la PAGE et copyright des photos se tient sur."; 
			//r = "Name of the author(s) used below the PG and copyright of the photos hold to.";
				break;
		case "Author Email" :    //Email de l'Author
			r = "Email de l'administration de la PAGE, cela pourrait être montré (sur la configuration d'affichage "
			//r = "Email of the administration of the PG, that might be displayed (upon display configuration "
				+ " aux configurations avançées) aux utilisateurs et également être nécessaire pour des avis de nouveaux commentaires (si "
				//+ " at advanced configurations) to users and also needed for notifications of new comments (if "
				+ " réglée).";
				//+ " set).";
				break;

		case "Theme" :    //Thème
			r = "La couleur de la page d'index. "
			//r = "The color the index page. "
				+ endl + "En cliquant sur le lien de <b>prévision</b>, vous pouvez avoir une prévision du thème "
				//+ endl + "By clicking on <b>Preview</b> link, you can have a preview of the selected "
				+ "choisi sans économie il en effet."; 
				//+ "theme without saving it indeed.";
				break;
		case "External Links" :    //les Liens Externes
			r = "La présente partie est le directeur de vos liens externes -- liens à d'autres photoblogs ou à vos "
			//r = "This part is the manager of your external Links -- links to other photoblogs or your "
				+ "sites web favoris."
				//+ "favotire websites."
				+ endl + "<b>Conseil: </b> Des liens sans la pièce de URL de lien, seraient assumés comme en-têtes "
				//+ endl + "<b>Hint: </b> Links with <b>no Link URL</b> part, would be assumed as headers "
				+ "et le bidon sépare des liens de divers types de l'un l'autre."; 
				//+ "and can separates links of various types from each other.";
				break;
		case "Link Name" :    //Nom du Lien
			r = "Nom du lien qui serait le texte à apparaître.";
			//r = "Name of the link which would be the text to appear.";
				break;
		case "Link URL" :    //URL du Lien
			r = "URL du lien -- l'adresse de destination du lien, y compris http://";
			//r = "URL of the link -- destination address of the link, including http://";
				break;
		case "Link Title" :    //Titre du Lien
			r = "Titre est le texte qui saute vers le haut quand le curseur de souris plane au-dessus du lien. "
			//r = "Title is the text that pops up when mouse cursor hovers above the link. "
				+ "Sentez-vous libre pour la laisser blanche si vous n'avez aucun choix d'approperiate à l'esprit!"; 
				//+ "Feel free to leave it blank if you have no approperiate choice in mind!";
				break;
		case "Add/Del Link" :    //Ajouter/Supprimer Lien
			r = "ajoutent un nouveau lien au-dessous de ce lien /  effacent le lien courant."; 
			//r = "Add a new link below this one / Delete current link.";
				break;
		case "Index Mode" :    //Mode Index
			r = "Layout of the index.php page to appear on first page. by clicking on <b>preview</b>"
			//r = "Layout of the index.php page to appear on first page. by clicking on <b>preview</b> "
				+ "link, you can have a preview of your customized layout without saving it indeed."
				//+ "link, you can have a preview of your customized layout without saving it indeed."
				+ endl + "<b>Note</b>: SideBar's changes will not be shown in preview";
				//+ endl + "<b>Note</b>: SideBar's changes will not be shown in preview";
				break;
		case "Time Differ" :    //Différ d'Heure
			r = "La différence du temps de votre serveur avec du votre temps (local) de région que ceci serait "
			//r = "The difference of your server's time with your region (local) time. this would be "
				+ "ajouté au temps de serveur, ainsi si votre serveur est à GMT 0 et vous de phase en Iran (GMT "
				//+ "added to server time, so if your server is at GMT 0 and you live in Iran (GMT "
				+ " +3:30) alors ce champ devriez avoir 210."
				//+ " +3:30) then this field should have 210."
				+ endl + "<b>NOTE:</b> L'unité de ce champ est <b> Minutes </b>" 
				//+ endl + "<b>NOTE:</b> the unit of this field is <b> Minutes </b>"
				+ endl + "<b>CONSEIL:</b> On permet des expressions de maths comme \"3*60+30\"!"; 
				//+ endl + "<b>HINT:</b> Math expressions like \"3*60+30\" is allowed!";
				break;
		case "Drafts" :   //Brouillons
			r = "Dans les <b>Brouillons</b> pièce, vous peut l'un ou l'autre <br /><ul>"
			//r = "In <b>Drafts</b> part, you can either <br /><ul>"
				+ "<li><b>Télécharger des Fichiers</b>: Téléchargez plusieurs photos, dans un fichier ZIP ou une chemise sur le serveur.</li>"
				//+ "<li><b>Upload Files</b>: Upload several photos, in a zip file or a folder on server.</li>"
				+ "<li><b>Contrôler Les Articles</b>: Ajoutez rapidement plusieurs photos ou supprimez-les.</li>"  
				//+ "<li><b>Manage Items</b>: Quickly add several photos or delete them.</li>"
				+ "</ul>";
				break;
		case "Upload Photos to Draft" :    //Télécharger les Photos Dans/Comme Brouillon  
			r = "Dans la présente partie, vous pouvez télécharger vos photos Dans la chemise de Brouillon et les ajouter. Les méthodes "
			//r = "In this part, you can upload your photos to draft folder and add them later. methods "
				+ "de mettre un (ou plus dans un volume) est l'une ou l'autre <br /><ul>" 
				//+ "of putting one (or more in a bulk) is either <br /><ul>"
				+ "<li><b>Du PC</b>: ce peut être <b>une photo simple</b> ou <b>un .zip</b> contenant les articles serveral.</li>" 
				//+ "<li><b>From PC</b>: it can be either <b>a single photo</b> or <b>a .zip</b> containing serveral items.</li>"
				+ "<li><b>Du Serveur</b>: un externe (de l'autre site internet, <b>commençant par http:// </b>) photo ou une photo locale " 
				//+ "<li><b>From Server</b>: an external (from other website, <b>beginning with http:// </b>) photo or a local photo "
				+ "(avec relatif / absolu adressant) ou une chemise de locale (<b>nécessairement finie par/</b>).</li>"
				//+ "(with relative / absolute addressing) or a folder of local (<b>necessarily ended with /</b>).</li>"
				+ "</ul>"
				+ endl + "<b>NOTE</b>: on lui recommande vivement d'éviter de télécharger un dossier de zip avec " 
				//+ endl + "<b>NOTE</b>: it's strongly recommended to avoid uploading a .zip file with "
				+ "plus que 25 photos dans lui, car il peut prendre beaucoup (secondes ~30) pour créer leur thumbnail "
				//+ "more than 25 photos in it, as it may take much (~30 seconds) to create their thumbnail "
				+ "et ceci peuvent battre l'action entière. Cependant, dans des serveurs rapides, vous pourraient pouvoir en mesure à!" 
				//+ "and this can beat the entire action. however, in fast servers, you might be able to!";
				break;
		case "Manage Photos in Draft" :    //Gérer les Photos Dans Le Brouillon
			r = "Voici l'endroit pour ajouter vite plusieurs photos de chemise de brouillons ou pour supprimer certaines de "
			//r = "Here is the place to quick add several photos from drafts folder or delete some of "
				+ "téléchargée.";
				//+ "the uploaded ones.";
				break;
		case "Manage Drafts: Thumbnail" :    //Contrôler les Brouillons: Le Thumbnail
			r = "Ceci est un thumbnail automatiquement produit du centre de l'image, juste pour " 
			//r = "This is an automatically generated thumbnail from the center of the image, just in "
				+ "le but de vous aider à identifier le fichier, d'une meilleure façon."
				//+ "aim of helping you to recognize the file, in a better manner."
				+ endl + "Cependant, dans <b>ajouter vite</b>, ce thumbnail serait sélectionné!"; 
				//+ endl + "However, in <b>quick add</b>, this thumbnail would be picked!";
				break;
		case "Manage Drafts: Information" :    //Gérer Les Brouillons: Information
			r = "Ceux-ci sont la moindre information invitée de vous pour s'ajouter vite. Quoi qu'il en soit, vous pouvez même "
			//r = "These are the least information asked from you to quick add. Anyway, you can even "
				+ "laisser ces le blanc, encore ! ";
				//+ "leave these blank, yet!";
				break;
		case "Manage Drafts: Action" :    //Gérer les Brouillons: l'Action
			r = "Ceux-ci sont les actions liées à une image simple. <br /><ul>" 
			//r = "These are the actions related to a single image. <br /><ul>"
				+ "<li><b>Ajouter Détaillé</b>: Comme ajouter une photo simple pour <b>Contrôler des Photos</b> partie, " 
				//+ "<li><b>Detailed add</b>: Like adding a single photo to <b>Manage Photos</b> part, "
				+	"mais exigez en dehors pour télécharger - des utilisations cette photo!</li>" 
				//+	"but without require to upload - uses this photo!</li>"
				+ "<li><b>Supprimez ceci</b>: Supprimez ce fichier simple, plutôt qu'un groupe de fichiers. " 
				//+ "<li><b>Delete this</b>: Delete this single file, rather than a group of files. "
				+ "</ul>";
				break;
		case "Drafts :: Delete Selected" :    //Brouillons :: Supprimer Choisi
			r = "Ici, vous pouvez supprimer plusieurs (ou seulement un) des articles téléchargés dans la chemise de brouillons. "
			//r = "Here, you can delete several (or just one) of the uploaded items in draft folder. "
				+ "Tout simplement prenez eux et, choisissent ce bouton de radio et en conclusion, pressez <b>Exécuter!</b>";
				//+ "Just pick them up and, select this radio button and finally, press <b>Perform!</b>";
				break;
		case "Drafts :: Quick-add Selected" :    //Brouillons :: Rapide-s'ajoutent Choisi
			r = "Ceci est l'endroit pour ajouter plusieurs photos, une fois dans un regard! Ce sont l'étape : <br /><ol> " 
			//r = "This is the place to add several photos, once in a glance! These are the step: <br /><ol> "
				+ "<li>Choisissez les photos désirées à partir de la liste ci-dessous.</li>"
				//+ "<li>Select the desired photos from the list below.</li>"
				+ "<li>Si vous êtes intéressé et avez assez de temps, remplissez champs de <b>Nom</b> et de <b>Description</b>.</li>" 
				//+ "<li>If you are interested and have enough time, fill <b>Name</b> and <b>Description</b> fields.</li>"
				+ "<li>Choisissez ce bouton de radio.</li>" 
				//+ "<li>Select this radio button.</li>"
				+ "<li>Configurez les options communes (comme la catégorie de défaut) pour elles.</li>" 
				//+ "<li>Configure common options (like default category) for them.</li>"
				+ "<li>En conclusion, pressez <b>Exécuter!</b></li>"
				//+ "<li>Finally, press <b>Perform!</b></li>"
				+ "</ol>"
				+ endl + "<b>NOTE</b>: on lui recommande vivement d'éviter s'ajouter rapide "
				//+ endl + "<b>NOTE</b>: it's strongly recommended to avoid quick-adding "
				+ "plus de 20 photos dans un moment, car il peut prendre beaucoup (secondes ~30) pour créer leur thumbnail "
				//+ "more than 20 photos in a while, as it may take much (~30 seconds) to create their thumbnail "
				+ "et ceci peuvent battre l'action entière. Cependant, dans des serveurs rapides, vous pourraient pouvoir en mesure à!"; 
				//+ "and this can beat the entire action. however, in fast servers, you might be able to!";
				break;
		case "Upload Path" :    //Le Chemin De Téléchargement 
			r = "<b>Le Chemin de téléchargement sur PC</b>:<br /> Browsez votre fichier de photo à partir de votre disque dur!!! "
			//r = "<b>Upload Path on PC</b>:<br />Browse your photo file from your hard disk. "
				+ endl + "Notez que <b>des fichiers zip</b> avec plusieurs photos d'intérieur devraient seulement être téléchargés "
				//+ endl + "Note that <b>zip files</b> with several photos inside should only be uploaded "
				+ "dans la zone de brouillons.<br />" 
				//+ "in drafts area.<br />"
				+ "<br /><b>Le Chemin de Téléchargement sur Serveur</b>:<br />"
				//+ "<br /><b>Upload Path on Server</b>:<br />"
			    	+ "Un ou l'autre un chemin local (par absolu / ou parent depuis l'annuaire d'upload.php) à une photo "
			    	//+ "Either a local path (absolute by / or relative since upload.php directory) to a photo "
				+ "ou un lien (commençant par http:// ) à un fichier externe sur le web."
				//+ "or a link to an external (beginning with http:// ) file on the web."
				+ endl + "Notez que <b>la chemise d'importation</b> est disponible dans le mode de <b>brouillons</b> et sur ce " 
				//+ endl + "Note that <b>import folder</b> is available in <b>drafts</b> mode and on that "
				+ "votre lien de chemise (sûrement, local ; mais relatif ou absolu) devrait finir "
				//+ "case, your folder link (surely, local; but either relative or absolute) should end "
				+ "avec / pour inclure toutes les photos sur cet annuaire";
				//+ "with / to include all photos on that directory";
				break;
		case "Add Photo Link" :    //Ajouter le Lien du Photo
			r = "En cliquant sur ce lien, vous pourra ajouter vos photos à la gallerie de photo. "
			//r = "By clicking on that link, you'll be able to add your photos to the PhotoGallery. "
				+ endl + "Si vous souhaitez ajouter (dans les brouillons) une photo déjà-téléchargée, cliquez dessus "
				//+ endl + "If you wish to add an already-uploaded (in drafts) photo, click on "
				+ "le lien <a class=\"q\">du brouillons</a>.";
				//+ "<a class=\"q\">From Drafts</a> Link.";
				break;
		case "Edit Photos Link" :    //Editer le Lien de Photo
			r = "Ici, dans ce domaine de forme courte, vous peut aller éditer la page de n'importe quelle photo que vous souhaitez et modifier "
			//r = "Here, in this short form field, you can go to edit page of any photo you wish and modify "
				+ "n'importe quelles données vous envoyé quand l'ajoutait - même son estimation (!) ou sa photo de source!" 
				//+ "any data you'd sent when was adding it - even it's rating (!) or its source photo!"
				+ endl + "Tout simplement entrez dans son PhotoID (le nombre qui apparaît à la fin de son lien) " 
				//+ endl + "just enter its PhotoID (the number which appears at the end of its link) "
				+ "et alors pressez <b>Edit!</b>";
				//+ "and then press <b>Editer!</b>";
				break;
		case "Add/Del Photos to Categ/Story" :    //Ajouter/Supprimer les Photos à Categ/Histoire
			r = "dans ce domaine de forme courte, vous pouvez faire de diverses actions comme ajouter ou supprimer n'importe quelle photo " 
			//r = "In this short form field, you can do various actions like adding or deleting any photo "
				+ "to/from n'importe quelle histoire ou catégorie. Tout simplement remplirez l'id de la photo, à savoir PID (qui apparaît à "
				//+ "to/from any story or category. Just fill the photo's id, namely PID (which appears at "
				+ "la fin de son lien) et puis l'id de la catégorie ou de l'histoire (qui, de la même manière, "
				//+ "the end of its link) and then the ID of category or story (which, in the same way, "
				+ "sont placées à la fin du lien de ce récipient)."
				//+ "is placed at the end of that container's link)."
				+ endl + "<b>Note</b>: Rappelez-vous qu'une photo ne peut pas être supprimée de sa catégorie ou " 
				//+ endl + "<b>Note</b>: Remember that a photo can't be deleted from its default category "
				+ "histoire de défaut."
				//+ "or story."
				+ endl + "<b>Conseil</b>: La mise d'une photo simple dans beaucoup de catégories ou histoires (relatives) "
				//+ endl + "<b>Hint</b>: Putting a single photo into many (related) categories or stories "
				+ "aide des visiteurs à lui accéder, plus rapidement et plus facile!";
				//+ "helps visitors to access it, faster and easier!";
				break;
		case "Photo: Global Data" :    //Photo: Des Données Globales 
			r = "Des informations essentielles sur la photo doivent être saisies par ces champs." 
			//r = "Essential information about photo has to be entered through these fields."
				+ endl + "Bien qu'on vous lui dise que ces sont <b>eus besoin</b>, mais puisse laisser "
				//+ endl + "Although it's been told that these data are <b>required</b>, but you can leave "
				+ "n'importe lequel d'entre elles vides, en dépit des visiteurs peut exiger d'eux de savoir.";
				//+ "any of them empty, despite visitors may require them to know.";
				break;
		case "Photo: Title" :    //Photo: Le Titre
			r = "Le titre de la photo est un nom vous laissé sur cette photo. Un bon titre peut ajouter des sorts à "
			//r = "Title of the photo is a name you let on that photo. a good title can add lots to the "
				+ "la valeur et à la signification de la photo."
				//+ "worth and meaning of the photo."
				+ endl + "Cependant, si vous ne pouvez pas trouver un nom propre pour une photo, vous pouvez la laisser "
				//+ endl + "However, if you can't find a proper name for a photo, you can leave it "
				+ "vide - Phormer ne montrera aucun nom pour cette photo."; 
				//+ "empty - Phormer will show no name for that photo.";
				break;
		case "Photo: Description" :    //Photo: La Description
			r = "Les informations sur la photo, par exemple où la photo a pris ou qui sont les personnes dans la "
			//r = "Information about the photo, e.g. where photo has taken or who are the people in the "
				+ "photo. L'information technique comme le mode de foyer, manipulation de PhotoShop (si fait) ne devrait "
				//+ "photo. Technical information like focus mode, PhotoShop manipulation (if made) should "
				+ "PAS être placée ici, mais dans la pièce d'<b>Info de Photo</b>."
				//+ "NOT be placed here, but in <b>Photo Info</b> Part."
				+ endl + "<b>Conseil</b>: On permet ici des étiquettes de HTML."; 
				//+ endl + "<b>Hint</b>: HTML tags are allowed here.";
				break;
		case "Photo: Time Added" :    //Photo: Le Temps d'Additioner
			r = "Le temps vous allez ajouter ce(s) photo(s) à la galerie. Elle sera automatiquement réglée au "
			//r = "The time you're going to add this photo(s) to the gallery. It'll automatically be set to "
				+ "temps courant et <b>Différ de Temps</b> serveur"
				"(si régliet dans la pièce  de <b>Configuration Avançée</b> ) "
				//+ "current time and <b>Time Differ</b> with server (if set in <b>Advanced Configuration</b> "
				+ "sera ajouté à lui par Phormer."; 
				//+ "part) will be added to it by Phormer.";
				break;
		case "Photo: Get Comments" :    //Photo: Obtenir les Commentaires 
			r = "Laissez les visiteurs des commentaires de congé pour ça (ceux-ci dans les brouillons) ou pas.";
			//r = "Let visitors leave comments for it (these in drafts) or not.";
				break;
		case "Photo: Photo Info" :    //Photo: l'Info de Photo
			r = "L'information technique de la photo, plutôt que des sociales qui devraient être "
			//r = "The technical information of the photo, rather than social ones that should be "
				+ "placées à la <b>Desc de Photo</b>"
				//+ "placed at <b>Photo Desc</b>"
				+ endl + "L'autres informations (comme un manuscrit ou un lien) peuvent être placées ici.";
				//+ endl + "other informations (like an external script or link) can be set here.";
				break;
		case "Photo: Default Categ" :    //Photo: La Categ de Photo
			r = "<b>Catégorie</b> de Défaut de la photo, qui est (La plus près dans le sujet) la catégorie principale " 
			//r = "Default <b>Category</b> of the photo, which is the major (nearest in subject) category "
				+ "à la photo."
				//+ "to the photo."
				+ endl + "Vous ne pouvez pas enlever une photo de sa catégorie, mais pouvez l'ajouter plus tard (en première "
				//+ endl + "You can't remove a photo from its category, but can add it later (in first "
				+ "page de la partie de <b>Contrôler les Photos</b>) à de diverses catégories. Cette catégorie sera "
				//+ "page of <b>Manage Photos</b> part) to various categories. This category will be "
				+ "employée pour choisir des voisins (si régliet au secteur de configuration avançée) et <a "
				//+ "used for picking neighbours (if set at advanced configuration area) and <a "
				+ "class=\"q\">[up]</a> le lien de la photo."
				//+ "class=\"q\">[up]</a> link of the photo."
				+ endl + "<b>Note</b>: Une photo sera protégée (non évident par quelq'un) si et seulement " 
				//+ endl + "<b>Note</b>: A photo will be protected (not visible by anyone) if and only "
				+ "si sa catégorie ou histoire de <b>Défaut</b> aurat un mot de passé."
				//+ "if either its <b>Default</b> category or story be passworded."
				+ endl + "<b>Conseil<b>: en mode de brouillons, cette catégorie de défaut s'appliquera pour tous!";
				//+ endl + "<b>Hint<b>: in drafts mode, this default category will apply for all!";
				break;
		case "Photo: Default Story" :    //Photo: l'Histoire de Défaut
			r = "Mêmes qui le <b>Catégorie de Défaut</b>, ici, l'histoire principale (réellement celle que la photo " 
			//r = "Same as <b>Default Category</b>, here, the major story (actually the one that photo "
				+ "est taken/occured en dedans) seront réglés. Plus tard vous peuvent ajouter la photo aux autres histoires." 
				//+ "is taken/occured within) shall be set. later you can add photo to other stories."
				+ endl + "<b>Note</b>:Une photo sera protégée (non évident par quelq'un) si et seulement " 
				//+ endl + "<b>Note</b>: A photo will be protected (not visible by anyone) if and only "
				+ "si sa catégorie ou histoire de <b>Défaut</b> aurat un mot de passé."
				//+ "if either its <b>Default</b> category or story be passworded."
				+ endl + "<b>Conseil<b>: en mode de brouillons, cette histoire de défaut s'appliquera pour tous!";
				//+ endl + "<b>Hint<b>: in drafts mode, this default story will apply for all!";
				break;
		case "Photo: Date Taken" :    //Photo: La Date de prener
			r = "La date, photo a été pris cela. Si vous ne rappelez pas cela, laissez-le vide."; 
			//r = "The date, photo has been taken on that. If you don't remind that, leave it empty.";
				break;
		case "Photo: Hits, Rate" :    //Photo: Les Coups, La Cote
			r = "frappent le compte et l'estimation (somme de tous les taux/nombre de raterss) de la photo est ici. "
			//r = "Hit count and rating (sum of all rates / number of raterss) of the photo is here. "
				+ "On peut la demander qu'est autre d'honnêteté pour modifier ces derniers, manuellement. La réponse (pourtant est "
				//+ "One may ask it's other of honesty to modify these, manually. The answer (yet is "
				+ "difficile à convaincre de façon ou d'autre) est celle, la photo a pu avoir été importée (a précédemment "
				//+ "inconvincible somehow) is that, the photo may have been imported (has previously "
				+ "frappé des comptes ou un bon nombr'obtenus de comptes dus à un essai et à un auteur souhaitent les écarter.";
				//+ "hit counts or got lots of counts due to a test and author wish to dismiss them.";
				break;
		case "Thumbnail" :    //Thumbnail
			r = "Thumbnail est une petite version de la photo qui peut être une partie d'elle ou "
			//r = "Thumbnail is a small version of the photo which can be either a part of it or "
				+ "réduite / remise à la côte de la photo entière ou une combinaison d'elle!" 
				//+ "reduced / resized of entire photo or a combination of it!"
				+ endl + "Phormer seulement soutient les thumbnails carrés et a fourni un outil maniable " 
				//+ endl + "Phormer just supports square thumbnails and has provided a handy tool "
				+ "pour produire de ce que vous comptez d'un thumbnail carré pour être!"
				//+ "to generate what you do expect of a square thumbnail to be!"
				+ endl + "<b>Conseil</b>: en tenant la touche MAJ. sur le clavier, le thumbnail se développe / "
				//+ endl + "<b>Hint</b>: by holding shift key on the keyboard, the thumbnail grows / "
				+ "se rétrécit symétriquement." 
				//+ "shrinks symmetrically."
				+ endl + "<b>Conseil</b>: l'image n'a pas été montrée après téléchargement mais récolteuse "
				//+ endl + "<b>Hint</b>: If the image has not been displayed after upload but picker "
				+ "devient le clic disponible et juste sur l'étiquette de prévision de Thumbnail!" 
				//+ "becomes available, just click on <b>Thumbnail Preview</b> label!"
				+ endl + "<b>Conseil</b>: En faisant un double-clic sur le squelette de récolteuse de thumbnail, la taille devient la difficulté de nouveau, "
				//+ endl + "<b>Hint</b>: By doing a double-click on thumbnail picker skeleton, the "
				+ "taille devient la difficulté de nouveau, après ce, taille se rétrécit aux thumbnail originaux!";
				//+ "size grows to fix. once again, after that, size shrinks to thumbnail's original!";
				break;
		case "Container Management" :    //La Gestion/Direction de Récipient/Container
			r = "Ceci est l'endroit pour contrôler des récipients. Vous pouvez ajouter un nouveau récipient, éditer vos "
			//r = "This is the place to manage containers. You can add a new container, edit your "
				+ "récipients actuellement créés (des catégories ou des histoires) ou les supprimer."
				//+ "currently created containers (either categories or stories) or delete them."
				+ endl + "<b>Notez</b> que la pièce d'<b>Effacement</b> pourrait être trop utile - vous pouvez " 
				//+ endl + "<b>Note</b> that <b>Delete</b> part might be too useful - you can "
				+ "supprimer seulement un récipient ou <b>des photos à l'intérieur de ce récipient</b> ou &#133; "
				//+ "delete only a container or <b>the photos inside that container</b> or &#133; "
				+ ""
				//+ "Take a look!";
				break;
		case "Container Name" :    //Le Nom de Récipient/Container
			r = "Nom du récipient (Catégorie / Histoire), celui serait montré dans la liste d'eux " 
			//r = "Name of the container (Category / Story), that would be displayed in list of them "
				+ "et également quand est le récipient de défaut d'une photo, dans les détails de cette photo.";
				//+ "and also when is default container of a photo, in that photo's details.";
				break;
		case "Container Description" :    //La Description de Récipient/Container
			r = "Les notes au sujet du récipient, comme le voyage, l'histoire est environ à ou votre idée"
			//r = "Notes about the container, like the trip, the story is about to or your idea about "
				+ "au sujet du sujet d'une catégorie."; 
				//+ "the subject of a category.";
				break;
		case "Container Visibility" :    //La Visibilité de Récipient/Container
			r = "Si ce récipient devrait être énuméré sur des récipients énumèrent (sur sidebar) ou pas. "
			//r = "Whether this container should be listed on containers list (on sidebar) or not. "
				+ endl + "<b>Conseil</b>: vous pouvez ne pas aimer vos ensembles privés (qui ont un mot de passé) être énuméré!"; 
				//+ endl + "<b>Hint</b>: you may not like your private (passworded) sets to be listed!";
				break;
		case "Container Privacy" :    //L'Intimité de Récipient/Container
			r = "Ceci est l'option vous a laissé protéger des photos/ensembles contre n'importe qui vue. Toutes les "
			//r = "This is the option to let you protect photos / sets from anyone's view. All of the "
				+ "photos avec un défaut passworded le récipient (catégorie ou histoire) seront protégées " 
				//+ "photos with a default passworded container (category or story) will be protected "
				+ "également. <b>Note</b>ez que si vous ajoutez une photo, au par exemple, la catégorie à mot de passé de "
				//+ "also. <b>Note</b> that if you add a photo to, for example, passworded category of "
				+ "A, mais sa catégorie de défaut restent B, qui est public, alors la photo est "
				//+ "A, but its default category remain B, which is public, then the photo is still "
				+ "public. ";
				//+ "public. ";
				break;
		case "Container Inheritance" :    //L'Héritage de récipient
			r = "Ici, vous pouvez placer un récipient (histoire/catégorie) pour être un enfant d'un autre récipient. "
			//r = "Here, you can set a container (story / category) to be a child of another container. "
				+ endl + "<b>Note</b>ez qu'il doit montrer seulement et ne signifie rien autrement à Phormer."; 
				//+ endl + "<b>Note</b> that, it's only to display and means nothing else to Phormer.";
				break;
		case "Help System" :    //Le Système d'Aide
			r = "Ceci est la manière, ces genre de dialogue-boîtes d'aide sont censés montrer. La langue "
			//r = "This is the way, these kind of help dialogue-boxes are supposed to show. The default "
				+ "de défaut est l'Anglais. La traduction Italienne va être ajoutée bientôt!" 
				//+ "language is English. Italian translation is going to be added soon!"
				+ endl + "Cependant, les Phormers professionnel peut aimer neutraliser ce dispositif à " 
				//+ endl + "However, professional Phormers may like to disable this feature to be "
				+ "montrer partout! ";
				//+ "displayed everywhere! ";
				break;
		case "Copyright Note" :    //La Note de Copyright
			r = "Ceci est l'endroit pour mettre <b>Les Notes de Copyright</b> qui sont imprimées en bas "
			//r = "This is the place to put the <b>Copyright notes</b> which are printed at the bottom "
				+ "de chaque page. Les variables disponibles sont:<br /><ul>"  
				//+ "of every page. available variables are:<br /><ul>"
				+ "<li><b>$name</b>: Affiche le nom de l'auteur, comme réglé.</li>"
				//+ "<li><b>$name</b>: Displays Author's name, as set.</li>"
				+ "<li><b>$email</b>: Affiche l'email de l'auteur au format défini. (dans la pièce de "
				//+ "<li><b>$email</b>: Displays Author's email in the defined (in <b>preferences</b> "
				+ 		"<b>préférences</b>)</li>"
				//+ 		"part) format.</li>"
				+ "<li><b>$Phormer</b>: Affiche le lien de Phormer comme <a class=\"q\" href=\"http://p.horm.org/er\">"
				//+ "<li><b>$Phormer</b>: Displays Phormer's link as <a class=\"q\" href=\"http://p.horm.org/er\">"
				+		"Phormer, ver ???</a>, où ??? est votre version employé.</li>" 
				//+		"Phormer, ver ???</a>, where ??? is your using version.</li>"
				+ "</ul>"
				+ endl + "<b>Conseil</b>: Étiquettes et marques de HTML (comme &amp;copy; pour &copy;) sont permits/laissés."
				//+ endl + "<b>Hint</b>: HTML tags and marks (like &amp;copy; for &copy;) are allowed."
				+ endl + "<b>Note</b>ez que ces variables sont sensibles de!" 
				//+ endl + "<b>Note</b> that these variables are case-sensitive!"
				+ endl + "<b>Demande</b>: On lui demande de mettre $Phormer quelque part dans l'apostille/la note. "
				//+ endl + "<b>Ask</b>: It's requested to put $Phormer somewhere in the footnote. "
				+ "Merci!";
				//+ "Thank you!";
				break;

		default :
			r = "Malheureusement il n'y a aucun message approprié d'aide  disponible pour cet article. <br />" 
			//r = "Unfortunately there's no approperiate help message available for this item. <br />"
				+ " &nbsp; Notifiez <a href=\"mailto:"+_AIDIN_MAIL+"&subject=No Help for "+s+"\">Aideen</a> de cela!";
				//+ " &nbsp; Notify <a href=\"mailto:"+_AIDIN_MAIL+"&subject=No Help for "+s+"\">Aideen</a> of that!";
				break;
	}
	return r;
}