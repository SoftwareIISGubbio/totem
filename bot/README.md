# pacchetti da installare

## windows (credo)

only pyTelegramBotAPI & telegram & pip install --upgrade python-telegram-bot
pip install mysql-connector-python

## debian

python3 -m venv penv/
source penv/bin/activate

pip install --upgrade python-telegram-bot
pip install --upgrade pyTelegramBotAPI
pip install --upgrade mysql-connector-python
pip install Pillow

## per avviarlo

ATTENZIONE: se il bot è in esecuzione su Talos due non se ne possono lanciare

se il server non è talos: `export SERVER_TOTEM="192.168.1.1"` 
se il server non è talos: `export IMMAGINI_TOTEM="/Volumes/ramdisk"` 

In caso non ci siano dati per provare può essere utile:

    `INSERT INTO immagini (id,tag,username,data,descrizione)
    VALUES(100,'TESTIMG','utentetelegram', '2024-08-30 12:30:00','immagine di prova');`

## per usarlo

FIXME