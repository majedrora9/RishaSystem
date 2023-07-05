const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'support',
    description: 'support server of this Bot',
    execute(message, args) {
        const supportServerLink = 'https://discord.gg/FUEHs7RCqz';
        const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setTitle('Support server')
            .setDescription(`Click [here](${supportServerLink}) to join our server.\nWe will be there for you anytime <a:69:1119532854699896842>`)
            .setThumbnail(`https://cdn.discordapp.com/attachments/1113800537402527903/1119995338359586837/a_e8d3128cee7f07ccec68962a8294f43d.gif`)
            .setTimestamp();


        message.channel.send({ embeds: [embed] });
    },
};
