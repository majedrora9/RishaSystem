const figlet = require('figlet');
const { EmbedBuilder } = require('discord.js');


module.exports = {
    name: 'ascii',
    description: 'Convert text into ASCII art',
    execute(message, args) {
        const text = args.join(' ');

        figlet.text(text, (error, result) => {
            if (error) {
                console.error('Error:', error);
                return;
            }

            message.channel.send('```' + result + '```');
        });
    },
};









