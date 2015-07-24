Projekt: Deploy Channels Editor alpha bis Sonntag Abend.

==Sprint 1: Sonntag Abend 26.7. erster deploy

===Features:
undo
units und channels verschieben

===Flaws & Bugs
-"ohne warnung löschen" ist ein zu krasses feature ohne undo funktion
-"has_privilege" funktioniert nur für godmode  -> Pascal
-"folder vs. channels" ist unklare terminologie. für eins entscheiden. besser auf "channels" refactoren?
-leere listen ausblenden, wenn man keine rechte hat items hinzu zu fügen




==Sprint 2  (nicht mehr vor dem ersten deploy)
-breadcrumbs
-high performance
-responsive
-setPrivacy (visible/invisible)
-nach video in youtube suchen (google login und im eigenen kanal suchen)
-mehrfach selection
-login-page
-profil ("my permissions")
-Channel Description
-UI für massenhaften youtube import

user interface von hier übernehmen:
https://drive.google.com/drive/my-drive
implementieren mit:
https://www.polymer-project.org/1.0/docs/devguide/templates.html#array-selector
