const { Command } = require('discord-akairo')

class InviteCommand extends Command {
  constructor () {
    super('invite', {
      aliases: ['invite'],
      category: 'general',
      clientPermissions: ['EMBED_LINKS'],
      description: { content: 'Gets the bot invite for Heimdall.' }
    })
  }

  async exec (message) {
    // Build Embed
    const embed = this.client.util.embed()
      .setColor(process.env.EMBED)
      .setFooter('Created by Jotunn Development with love.')
      .setDescription('[Add our main bot to your server!](https://discord.com/oauth2/authorize?client_id=391050398850613250&scope=bot&permissions=537390278)')
      .addField('Disclaimer', 'The bot on this server is a custom build and is not available for download. The above link we direct to our bot **Heimdallr\'s** invite link.')

    return message.util.send({ embed })
  }
}

module.exports = InviteCommand
