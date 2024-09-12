setup di talos per il totem
---------------------------

nella cartella Documentroot di apache c'è un link

chiosco -> /home/edoardo/totem/web/


i jar sia dei robot che del server sono in `/opt/totem`

## crontab

    JAVA=/home/edoardo/.sdkman/candidates/java/current/bin/java
    # m h  dom mon dow   command
    15 * * * * $JAVA -jar /opt/totem/robotcircolari-1.0-jar-with-dependencies.jar >/tmp/logCircolari.log
    15 1 * * * $JAVA -jar /opt/totem/robotorario-1.0-jar-with-dependencies.jar >/tmp/logOrario.log


## totem.service

    [Unit]
    Description=Server per orientamento

    [Service]
    User=edoardo
    ExecStart=/home/edoardo/.sdkman/candidates/java/current/bin/java -jar /opt/totem/servertotem-0.0.1-SNAPSHOT.jar

    [Install]
    WantedBy=multi-user.target

## bot.service 
    [Unit]
    Description=Server per orientamento

    [Service]
    User=edoardo
    ExecStart=/home/edoardo/totem/bot/lanciaBot.sh

    [Install]
    WantedBy=multi-user.target
