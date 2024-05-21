import telebot, pathlib, os, random, mysql.connector
from PIL import Image
from datetime import date

API_TOKEN = "6693052658:AAHY8dHg8j2lip9tKWD8TmUL47R2WMgN8yg"
bot = telebot.TeleBot(API_TOKEN)
print("bot online")

# __ help __
@bot.message_handler(commands=['aiuto', 'help'])
def help_command(message):
    bot.send_message(message.chat.id, ("Ciao {0}, chat {1}").format(message.from_user.username, message.chat.id))

@bot.message_handler(content_types=['photo'])
def scaricoImmagine(message):

    # prendo l'ultima immagine presente nella lista del server
    file_info = bot.get_file(message.photo[len(message.photo) - 1].file_id)
    downloaded_file = bot.download_file(file_info.file_path)
    nomeFile = (file_info.file_path).split("/")

    id = file_info.file_unique_id
    username = message.from_user.username
    data =  date.today()
    # .strftime("%d/%m/%Y")
    caption = message.caption

    db = mysql.connector.connect(
        host = "localhost",
        user = "root",
        password = "",
        database = "totem"
    )

    cursor = db.cursor()
    cursor.execute("INSERT INTO immagini VALUES ('{0}','{1}','{2}','{3}')".format(id, username, data, caption))

    with open("immagini/current.jpg", 'wb') as new_file:
        new_file.write(downloaded_file)

    with open("immagini/"+nomeFile[len(nomeFile)-1], 'wb') as new_file:
        new_file.write(downloaded_file)


bot.infinity_polling()
