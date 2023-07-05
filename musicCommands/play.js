const { Command } = require('discord.js');
const { Manager } = require('erela.js');

module.exports = {
  name: 'play',
  aliases: ['p'],
  description: 'Play a song or add it to the queue',
  usage: 'play <song name or YouTube URL>',
  args: true,
  guildOnly: true,
  execute(message, args) {
    const query = args.join(' ');
  
    if (!query) {
      return message.channel.send('Please provide a song name or YouTube URL.');
    }
  
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.channel.send('You must be connected to a voice channel to use this command.');
    }
  
    const player = new Manager({
      nodes: [
        {
          host: 'localhost',
          port: 2333,
          password: 'youshallnotpass',
        },
      ],
      send(id, payload) {
        const guild = client.guilds.cache.get(id);
        if (guild) guild.shard.send(payload);
      },
    }).create({
      guild: message.guild.id,
      voiceChannel: voiceChannel.id,
      textChannel: message.channel.id,
    });

    player.search(query, message.author).then((searchResult) => {
      if (!searchResult.tracks.length) {
        return message.channel.send('No results found for the given query.');
      }

      const track = searchResult.tracks[0];

      player.queue.add(track);
      if (!player.playing && !player.paused && !player.queue.size) player.play();
      message.channel.send(`Enqueued: **${track.title}**`);
    }).catch((error) => {
      console.error(error);
      message.channel.send('An error occurred while searching for the song.');
    });
  },
};
