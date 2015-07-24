Projekt: Deploy Channels Editor alpha bis Sonntag Abend.

==Sprint 1: Sonntag Abend 26.7. erster deploy

===Features:
-undo
-units und channels verschieben -> Daniel?
--dialog zum auswählen des ziel-channels
--service zum browsen durch die channels, in denen der user permissions hat -> Pascal?

===Flaws & Bugs
-"ohne warnung löschen" ist ein zu krasses feature ohne undo funktion
-"has_privilege" funktioniert nur für godmode  -> Pascal
-"folder vs. channels" ist unklare terminologie. für eins entscheiden. besser auf "channels" refactoren?
-"admin & author" vs "admin vs channelAdmin" ist unklare terminologie. nur noch ersteres.  -> Pascal?
-leere listen ausblenden, wenn man keine rechte hat items hinzu zu fügen
-tests schreiben?






==Sprint 2  (nicht mehr vor dem ersten deploy)
-login-page
-breadcrumbs
-high performance
-responsive
-setPrivacy (visible/invisible)
-nach video in youtube suchen (google login und im eigenen kanal suchen)
-mehrfach selection
-profil ("my permissions")
-Channel Description
-UI für massenhaften youtube import
--Youtube Channel "abbonieren" - also automatisch neue videos einbinden
-App Theming als Element auslagern, um über alle Capira-Module hinweg das gleiche Theme zu haben.
-Statistiken
-Units als Material-Cards
-Momentan gibt es mehrere Wurzeln - das verwirrt in der navigation
-Units per Suche hinzufügen
-"Thumbnail selector"-dialog für folders

user interface von hier übernehmen:
https://drive.google.com/drive/my-drive
implementieren mit:
https://www.polymer-project.org/1.0/docs/devguide/templates.html#array-selector
