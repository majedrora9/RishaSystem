const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'userinfo',
    aliases: ['user', 'uinfo'],
    description: 'Get information about a user',
    execute(message, args) {
        // Check if a user was mentioned in the command, or use the message author as the default user
        const user = message.mentions.users.first() || message.author;

        // Create an embed object
        const embed = new EmbedBuilder()
        .setColor('#FFFFFF')
        .setTitle(`<a:Sus_anime_excited:1119569055213424771> User Info -  ${user.username}`)
        .setThumbnail(user.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
        .setDescription(`**Username**:  ${user.username}\n**Discriminator**:  ${user.discriminator}\n**ID**:  ${user.id}\n**Joined Discord**:  ${user.createdAt.toUTCString()}`)
        .setTimestamp();

        message.channel.send({ embeds: [embed] });
    },
};
