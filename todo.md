Projekt: Deploy Channels Editor alpha bis Sonntag Abend.

==Sprint 1: Sonntag Abend 26.7. erster deploy

===Features:
-bei jedem icon paper-tooltips verwenden

===Flaws & Bugs
-"homeChannel" beim verschieben von units updaten
-als user "test" "test" kann man nicht löschen -> Pascal
-alte Permissions updaten -> Pascal?
-in den Permissions den Pfad der vererbten Permissions anzeigen (path refactoren) -> Pascal?
-"folder vs. channels" ist unklare terminologie. für eins entscheiden. besser auf "channels" refactoren?
-"admin & author" vs "admin vs channelAdmin" ist unklare terminologie. nur noch ersteres.  -> Pascal?
-sortieren ausschalten, wenn user keine Rechte hat





==Sprint 2  (nicht mehr vor dem ersten deploy)
-login-page
--login mit google

-units und channels per dialog verschieben
--dialog zum auswählen des ziel-channels
--service zum browsen durch die channels, in denen der user permissions hat -> Pascal?

-breadcrumbs
--getPath mit parent berechnen -> Pascal
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
-tests schreiben?


user interface von hier übernehmen:
https://drive.google.com/drive/my-drive
implementieren mit:
https://www.polymer-project.org/1.0/docs/devguide/templates.html#array-selector
