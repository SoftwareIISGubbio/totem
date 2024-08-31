# Server

## ambiente di esecuzione
Se si vogliono (sovrascrivere le proprietà in application.properties)
[https://stackoverflow.com/questions/47580247/optional-environment-variables-in-spring-app]

In pratica se serve per fare i test si possono fare cose tipo

    export SPRING_DATASOURCE_URL=jdbc:mariadb://192.168.64.7:3306/totem
    export TOTEM_IMMAGINIBOT=/Volumes/ramdisk/
    export TOTEM_CIRCOLARI=/Volumes/ramdisk/

## provare

FIXME: impostare variabili con cartelle circolari/immagini

`curl http://localhost:8080/classi`

`curl http://localhost:8080/circolari`

`curl "http://localhost:8080/notizie?N=3"`
