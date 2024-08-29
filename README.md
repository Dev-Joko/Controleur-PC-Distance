🏳 Français :  
▶ Objectif : Pouvoir allumer et éteindre son PC fixe depuis Discord et n'importe où. Le Raspberry doit toujours être allumé et l'alimentation du PC fixe également.  


Structure :  
          - index.js : fichier principal du bot Discord  
          - const.js : fichier d'enregistrement des commandes du bot Discord  
          - package.json et package-lock.json : fichiers de configuration des packages du bot Discord  
          - control_pc.py : gestion des pins sur le Raspberry Pi 4 Model A ou B  

Outils :  
          - Raspberry Pi 4 Model A ou B  
          - 2 câbles Dupont femelle-femelle  

Dépendances PIP et RPi.GPIO :  
          - sudo apt-get install python3-pip  
          - pip3 install RPi.GPIO  

Installation fichiers et logiciels :  
  Créer un bot Discord sur Discord Developers : https://discord.com/developers/applications  
  Ajouter le bot Discord à un serveur (avec les permissions nécessaires)  
  Remplacer TOKEN_BOT_DISCORD par le token du bot dans index.js  
  Installer Node.js, Python 3.9, pip3 RPi.GPIO, et votre IDE (Visual Studio Code) sur le Raspberry Pi 4 sous Debian  
  Héberger tous les fichiers dans un dossier sur le Raspberry Pi 4  

Connection Raspberry Pi 4 à la carte mère :  
  Brancher un câble Dupont sur le pin numéro 6 du Raspberry (Ground)  
  Brancher le deuxième câble Dupont sur le pin numéro 16 du Raspberry (GPIO 23)  
  Image numéros pins Raspberry Pi : ![Raspberry-Pins](https://github.com/user-attachments/assets/070f5e65-37ed-40ea-a9ef-00bbb567f13a)  
  Brancher l'autre bout du câble Dupont (pin 6) sur le pin Ground (ou GND) PWRSW de votre carte mère (consulter le manuel de votre CM)  
  Brancher l'autre bout du câble Dupont (pin 16) sur le pin PWRBTN# de votre carte mère (consulter le manuel de votre CM)  
  Image numéros pins Carte mère (Asus TUF Gaming B660-Plus WIFI D4) : ![PANEL-Pins-Carte-Mere](https://github.com/user-attachments/assets/19e3ebd9-345d-44af-9399-0fc20a72c5e5)

Lancement :
  Quand tout est prêt, lancer le bot Discord sur votre IDE sur le Raspberry, faire les commandes /démarrage ou /éteindre  
  Votre PC fixe devrait se démarrer ou s'éteindre  


Circuit complet :  
![Circuit](https://github.com/user-attachments/assets/c6a6cfc7-e17d-4e0f-8b57-05b42092fed5)




🏳 English :  
▶ Objective: To be able to turn on and off your desktop PC from Discord and anywhere. The Raspberry Pi must always be on, and the desktop PC's power supply as well.  


Structure :  
          - index.js: main file of the Discord bot  
          - const.js: file for registering the Discord bot commands  
          - package.json and package-lock.json: configuration files for the Discord bot packages  
          - control_pc.py: pin management on the Raspberry Pi 4 Model A or B  

Tools :  
          - Raspberry Pi 4 Model A or B  
          - 2 female-to-female Dupont cables  

PIP and RPi.GPIO dependencies :  
          - sudo apt-get install python3-pip  
          - pip3 install RPi.GPIO  

File and software installation :  
  Create a Discord bot on Discord Developers: https://discord.com/developers/applications  
  Add the Discord bot to a server (with the necessary permissions)  
  Replace TOKEN_BOT_DISCORD with the bot's token in index.js  
  Install Node.js, Python 3.9, pip3, RPi.GPIO, and your IDE (Visual Studio Code) on the Raspberry Pi 4 running Debian  
  Host all the files in a folder on the Raspberry Pi 4  

Connecting Raspberry Pi 4 to the motherboard :  
  Connect a Dupont cable to pin number 6 of the Raspberry (Ground)  
  Connect the second Dupont cable to pin number 16 of the Raspberry (GPIO 23)  
  Raspberry Pi pin number image : ![Raspberry-Pins](https://github.com/user-attachments/assets/070f5e65-37ed-40ea-a9ef-00bbb567f13a)  
  Connect the other end of the Dupont cable (pin 6) to the Ground (or GND) PWRSW pin of your motherboard (refer to your motherboard's manual)  
  Connect the other end of the Dupont cable (pin 16) to the PWRBTN# pin of your motherboard (refer to your motherboard's manual)  
  Motherboard pin number image (Asus TUF Gaming B660-Plus WIFI D4) : ![PANEL-Pins-Carte-Mere](https://github.com/user-attachments/assets/19e3ebd9-345d-44af-9399-0fc20a72c5e5)  

Launching :  
  When everything is ready, launch the Discord bot on your IDE on the Raspberry, and use the /start or /shutdown commands  
  Your desktop PC should start up or shut down  

Complete circuit :  
![Circuit](https://github.com/user-attachments/assets/7ea0a697-559f-4156-b568-23b605dc0c46)


Translation with GPT-4o
