# Server

## chi ha bisogno del server?

- circolari
- orario
- pomeriggio [magari in futuro]

## test & debug

Per creare l'alias si un IP siu macOS `sudo ifconfig lo0 alias 10.1.0.52`

Se si vogliono (sovrascrivere le proprietà in application.properties)
[https://stackoverflow.com/questions/47580247/optional-environment-variables-in-spring-app]

In pratica se serve per fare i test si possono fare cose tipo
`export SPRING_DATASOURCE_URL=jdbc:mysql://192.168.64.7:3306/totem`
