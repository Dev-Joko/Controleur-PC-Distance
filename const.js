const { SlashCommandBuilder } = require('discord.js');

const démarrage = new SlashCommandBuilder()
.setName('démarrage')
.setDescription('Démarre le PC')

const éteindre = new SlashCommandBuilder()
.setName('éteindre')
        .setDescription('Éteint le PC')

module.exports = { 
    démarrage,
    éteindre
 };