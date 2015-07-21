Projekt: Deploy Channels Editor alpha bis Sonntag Abend.

==Sprint 1: Sonntag Abend

=UI
Unit-Liste sortieren                                4h
Folder-Liste sortieren                              4h

Unit in Folder verschieben    (sub und parent)      4h
Folder in Folder verschieben  (sub und parent)      4h

Weiteren Autor hinzufügen per Eingabe des Usernames 1h

setPrivacy




=Server API

getUser
getFolder(id) mit admin rechten

create Unit
rename Unit
sort Units
move Unit
delete Unit
getYoutubeVideoTitle
setPrivacy
import Units by search

create Folder (Rechte erben)
rename Folder
sort Folders
move Folder
delete folder
setPrivacy

getGroup
addUserByName(String:username)  //wird immer der Gruppe des aktuellen Folders hinzugefügt - falls die folder-gruppe noch nicht existiert, wird sie beim ersten user angelegt
setPrivilege
removeUser
(search for User by Name or Email)








==Bugs
Dialogs erzeugen bugs, wenn sie teil der scrollable aria sind...







==Sprint 2
breadcrumbs
leere listen ausblenden, wenn man keine rechte hat items hinzu zu fügen
high performance
responsability
Title des Videos automatisch herausfinden
nach video in youtube suchen (google login und im eigenen kanal suchen)
mehrfach selection
login
profil (rechte)


user interface von hier übernehmen:
https://drive.google.com/drive/my-drive
implementieren mit:
https://www.polymer-project.org/1.0/docs/devguide/templates.html#array-selector
