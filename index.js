const { Client, GatewayIntentBits } = require('discord.js');
const { exec } = require('child_process');
const { démarrage, éteindre } = require("./const");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers
    ]
});



client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    let commandName = interaction.commandName;

    //Démarrage du PC
    if (commandName === 'démarrage') {
        await interaction.reply('Tentative de démarrage du PC...');
        exec('python3 control_pc.py démarrage', (error, stdout, stderr) => {

            if (error) {
                interaction.followUp(`Erreur lors du démarrage : ${error.message}`);
                return;
            }

            if (stderr) {
                interaction.followUp(`Avertissement lors du démarrage : ${stderr}`);
                return;
            }
            interaction.followUp(`Le PC est en train de démarrer : ${stdout}`);
        });
    }

    //Éteindre le PC
    else if (commandName === 'éteindre') {
        await interaction.reply('Tentative d\'arrêt du PC...');
        exec('python3 control_pc.py éteindre', (error, stdout, stderr) => {

            if (error) {
                ineractzion.followUp(`Erreur lors de l'arrêt : ${error.message}`);
                return;
            }

            if (stderr) {
                interaction.followUp(`Avertissement lors de l'arrêt : ${stderr}`);
                return;
            }
            interaction.followUp(`Le PC est en train de s'éteindre : ${stdout}`);
        });
    }
});



client.once('ready', async () => {
    console.log('Bot en ligne');

    const commands = [
        démarrage,
        éteindre
    ];

    const guild = await client.guilds.cache.first();

    guild.commands.set(commands)

        .then(() => {
            console.log('Commandes enregistrées avec succès.');
        })

        .catch(error => {
            console.error('Une erreur s\'est produite lors de l\'enregistrement des commandes :', error);
        });
});

//Token
client.login('TOKEN_BOT_DISCORD');