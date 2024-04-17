# il database: MariaDB

come creare e gestire il db

## creazione su debian
va installato il server se non lòo è già

    apt install mariadb-server

Nel file `/etc/mysql/mariadb.cnf` bisogna fare in modo
che il server si metta in ascolto `port = 3306`

Nel file del server `/etc/mysql/mariadb.conf.d/50-server.cnf`
va indicato `bind-address = 0.0.0.0`

Per riavviare il server: `systemctl restart mariadb`

Da mysql va creato l'utente con i relativi privilegi, attenzione ai nomi!

    CREATE USER 'utente'@'%' IDENTIFIED BY 'password';
    create database totem;
    grant all privileges on totem.* to 'utente'@'%';

per provare se mysql è in ascolto basta una roba del genere:
`nc -v localhost 3306`

Per provare la connessione da terminale `mysql -h localhost -u utente -p totem` e poi si può usare SQL per, ad esempio, creare le tabelle.

## le tabelle