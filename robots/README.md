# Robots

Programmi che scaricano qualcosa da qualche parte on line e dopo
averla elaborata la mettono da qualche altra parte in locale. dentro un db?

## Circolari

Scarica le informazioni sulle circolari e i relativi pdf
perché utilizzare direttamente quelli sul sito della scuola viene impedito
dagli header di Content-Security-Policy

Per provare, se il server non è talos e state usando una qualche variante di unix:

impostare il server a cui inviare i dati: `export TOTEM_DATABASE=jdbc:mariadb://192.168.64.7:3306/totem`

impostare la cartella in cui salvare le circolari: `export TOTEM_CIRCOLARI=/Volumes/ramdisk/`

`mvn compile exec:java -Dexec.mainClass="it.edu.iisgubbio.robotcircolari.DownloadCircolari"`

`mvn package` produce un jar avviabile

## Orario

Carica i dati dell'orario dal file di FET presente sul sito

Per provare, se il server non è talos e state usando una qualche variante di unix:

impostare il server a cui inviare i dati:
`export TOTEM_DATABASE=jdbc:mariadb://192.168.64.7:3306/totem`

`mvn compile exec:java -Dexec.mainClass="it.edu.iisgubbio.robotorario.Orario"`

`mvn package` produce un jar avviabile
