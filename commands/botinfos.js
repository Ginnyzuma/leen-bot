const {
  SlashCommandBuilder
} = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('botinfo')
    .setDescription('Voici les différentes commande du serveur : /add /ban /botinfo /kick /mute'),
  async execute(interaction, client) {
    const embed = new client.discord.MessageEmbed()
      .setColor('ff9600')
      .setAuthor('Bot Info', client.user.avatarURL())
      .setDescription('Bot Info.\n\nBot Developer<@629031362351071252>')
      .setFooter(client.config.footerText, client.user.avatarURL())
      .setTimestamp();

    await interaction.reply({
      embeds: [embed]
    });
  },
};