const { Client, GatewayIntentBits, ActivityType, Collection } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping,
    ],
});

// Set the prefix for the bot
const prefixData = require('./prefix.json');
const prefix = prefixData.prefix;
const config = require('./config.json');

const spotifyClientId = config.spotify.clientId;
const spotifyClientSecret = config.spotify.clientSecret;
const youtubeApiKey = config.youtube.apiKey;



client.once('ready', () => {
    console.log('Commands Loaded successfully ❤️.');
    console.log(`Logged in as ${client.user.username}`);
    console.log(`Bot is in ${client.guilds.cache.size} servers`);
    console.log(`Total members across all servers: ${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)}`);
    console.log('MADE BY RTX GAMING');
    client.user.setPresence({
        activities: [{
            name: 'with RTX',
            type: ActivityType.Playing,
            url: 'https://www.twitch.tv/RTX'
        }],
        status: 'available'
    });
});
client.commands = new Map();


const commandsPath = path.join(__dirname, 'commands');
const musicCommandsPath = path.join(__dirname, 'musicCommands');

const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
const musicCommandFiles = fs.readdirSync(musicCommandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(path.join(commandsPath, file));
    client.commands.set(command.name, command);
}

for (const file of musicCommandFiles) {
    const command = require(path.join(musicCommandsPath, file));
    client.commands.set(command.name, command);
}


client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName);

    if (!command) return;

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('There was an error trying to execute that command!');
    }
});


client.login(process.env.TOKEN);
