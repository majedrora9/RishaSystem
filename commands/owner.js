const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'owner',
    description: 'Bot owner info',
    execute(message, args) {
        const youtubeLink = 'https://discord.gg/FUEHs7RCqz';
        const InstagramLink = 'https://discord.gg/FUEHs7RCqz';
        const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setTitle(' <:ClashRoyale:1050995292016758824> Owner Info')
            .setDescription(`__**About me**__:\n <:BotDeveloper:1119532893987934328> Myself Shiva aka RTX. I am a discord bot developer and web developer. I love playing games, watching anime and building different webserver applications. You will get faster replies on instagram than other social media. Feel free to contact me!\n <:YouTube:1119978767318786109> [RTX GAMING](${youtubeLink})\n <:instagram:1119978840706519120> [Atstreak](${InstagramLink})`)
            .setTimestamp();


        message.channel.send({ embeds: [embed] });
    },
};
