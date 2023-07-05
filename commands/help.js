const { EmbedBuilder } = require('discord.js');


module.exports = {
	name: 'help',
    aliases: ['hlp', 'h'],
	description: 'Shows a list of available commands',
	execute(message, args) {
		// Create an embed object
		const embed = new EmbedBuilder()
            .setAuthor({ name: 'MODERATION BOT' })
            .setColor('#FFFFFF')
            .setDescription('**HERE ARE THE AVAILABLE COMMANDS**   \n\n <a:arrow:1119532745165647902> __Basic__:\n avatar, ascii, prefix  \n\n <a:arrow:1119532745165647902>__Advanced__:\n kick, ban, serverinfo, userinfo, ping  \n\n <a:arrow:1119532745165647902> __Utility__:\n prefix, owner, support, invite  ')
			.setThumbnail('https://cdn.discordapp.com/attachments/1111392372564168754/1119534562515624007/3696917.png')

		
		
		
		message.channel.send({ embeds: [embed] });
	},
};
