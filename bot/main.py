import telebot
import pathlib
import os
import csv
import mysql.connector
from PIL import Image
from datetime import datetime

API_TOKEN = "6693052658:AAHY8dHg8j2lip9tKWD8TmUL47R2WMgN8yg"
indirizzo_server = os.getenv('SERVER_TOTEM', "10.1.0.52");
cartella_immagini = os.getenv('IMMAGINI_TOTEM', "totem/bot/immagini");
bot = telebot.TeleBot(API_TOKEN)
print("bot online")

# Load whitelist
whitelist = set()
with open('whitelist.csv', newline='') as csvfile:
    reader = csv.reader(csvfile)
    for row in reader:
        whitelist.add(row[0])

def is_whitelisted(username):
    return username in whitelist

# __ help __    
@bot.message_handler(commands=['aiuto', 'help', 'start'])
def help_command(message):
    bot.send_message(message.chat.id, ("Salve {0}, invia un immagine con una descrizione ed essa verrà visualizzata a scuola!").format(message.from_user.username))

@bot.message_handler(content_types=['photo'])
def scaricoImmagine(message):

    if not is_whitelisted(message.from_user.username):
        bot.send_message(message.chat.id, "Non sei autorizzato ad utilizzare questo bot.")
        return

    try:
        # prendo l'ultima immagine presente nella lista del server
        file_info = bot.get_file(message.photo[len(message.photo) - 1].file_id)
        downloaded_file = bot.download_file(file_info.file_path)
        nomeFile = (file_info.file_path).split("/")

        tag = file_info.file_unique_id
        username = message.from_user.username
        data =  datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        caption = message.caption

        db = mysql.connector.connect(
            host = indirizzo_server,
            user = "totem",
            password = "totem",
            database = "totem"
        )

        cursor = db.cursor()
        cursor.execute("INSERT INTO immagini (tag, username, data, descrizione) VALUES ('{0}','{1}','{2}','{3}')".format(tag, username, data, caption))
        db.commit() # salvatagggio

        with open(cartella_immagini+"/"+tag+".jpg", 'wb') as new_file:
            new_file.write(downloaded_file)

        bot.send_message(message.chat.id, "Immagine salvata correttamente!")
        print(username+" ha caricato un immagine.")

    except Exception as e:
        print(e)
        bot.send_message(message.chat.id, "Si è verificato un errore durante il salvataggio dell'immagine.")
        db.rollback()  # Rollback if there's an error

    finally:
        cursor.close()
        db.close()

bot.infinity_polling()


"""
    # nomeFile[len(nomeFile)-1] ultimo file
only pyTelegramBotAPI & telegram & pip install --upgrade python-telegram-bot
pip install mysql-connector-python 

"""
