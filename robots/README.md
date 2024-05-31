# Robots

Programmi che scaricano qualcosa da qualche parte on line e dopo
averla elaborata la mettono da qualche altra parte in locale. dentro un db?

## Circolari

Ce l'ha Filippo ma dove li mettiamo i pdf? usiamo quelli on line o istruiamo Spring a prenderli da una cartella... o forse basta buttarli in una cartella di apache.

`mvn compile exec:java -Dexec.mainClass="it.edu.iisgubbio.robotorario.Orario"`

se il server non è talos e state usando una qualche variante di unix:

`export TOTEM_DATABASE=jdbc:mysql://192.168.64.7:3306/totem`

## Orario

- Questo basta che da HTML si fanno le singole insert
- La versione base basta che prende l'orario di FET
- curl deve essere installato (lo è per macOS, è un pacchetto presente in tutte le distribuzioni di Linux)

`mvn compile exec:java -Dexec.mainClass="it.edu.iisgubbio.robotcircolari.DownloadCircolari"`

se il server non è talos e state usando una qualche variante di unix:

`export TOTEM_DATABASE=jdbc:mysql://192.168.64.7:3306/totem`
`export TOTEM_CIRCOLARI=/Volumes/ramdisk/`
