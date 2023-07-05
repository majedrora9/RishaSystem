const { EmbedBuilder } = require('discord.js');


module.exports = {
	name: 'avatar',
    aliases: ['profilepic', 'pfp', 'av'],
	description: 'sends user avatar',
    execute(message, args) {
        const user = message.mentions.users.first() || message.author;
        const avatar = user.displayAvatarURL({ format: 'png', dynamic: true, size: 4096 });
		
        const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setTitle(`${user.username}'s Avatar`)
            .setImage(avatar);

		
		
		
		message.channel.send({ embeds: [embed] });
	},
};
