const { EmbedBuilder } = require('discord.js');
const {
    MessageEmbed,
    Permissions
  } = require(`discord.js`)
  
module.exports = {
    name: 'ban',
    description: 'Ban a user from the server',
    execute(message, args) {
        // Check if the user has the necessary permissions to use the command
        if (!message.member.permissions.has('BAN_MEMBERS')) {
            return message.reply('<a:b_no:1119561187093389312> You do not have permission to use this command.');
        }

        // Check if a user was mentioned in the command
        const user = message.mentions.users.first();
        if (!user) {
            return message.reply('<a:4957alert1:1119561732654907453> You need to mention a user to ban.');
        }

        // Ban the mentioned user
        const member = message.guild.members.cache.get(user.id);
        member.ban();

        // Create an embed object
        const embed = new EmbedBuilder()
            .setColor('#FF0000')
            .setTitle('User Banned <a:utility_verified2:1119532934924345354>')
            .setDescription(`${user.tag} has been banned from the server by ${message.author.tag}.`)
            .setTimestamp();

        message.channel.send({ embeds: [embed] });
    },
};
