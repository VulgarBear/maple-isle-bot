const { Command } = require('discord-akairo')

class AboutCommand extends Command {
  constructor () {
    super('about', {
      aliases: ['about', 'info'],
      category: 'general',
      clientPermissions: ['EMBED_LINKS'],
      description: { content: 'Shows information about Heimdall.' }
    })
  }

  exec (message) {
    // Resolve current prefix for user's guild, resolve help guild
    const prefix = this.handler.prefix(message)
    const asgard = this.client.guilds.resolve('540671346728763392')
    const vulgar = this.client.users.resolve('101808227385098240')

    // Build embed
    const embed = this.client.util.embed()
      .setColor(process.env.EMBED)
      .setTitle('About Maple Island Bot')
      .setDescription([
        `Maple Island Bot is developed by ${vulgar.tag} and the devs at **Jotunn Development** and is a fork of [Heimdallr](https://top.gg/user/101808227385098240) with custom functionality.`,
        '',
        'Maple Island Bot uses the **[Discord.js](https://discord.js.org)** library and the **[Akairo](https://1computer1.github.io/discord-akairo)** framework.',
        'You can find out more on the **[github](https://github.com/Jotunn-Development/heimdallr)**.',
        '',
        `Use \`${prefix}stats\` for statistics and \`${prefix}invite\` for an invite link.`,
        '',
        'Join the community server [server](https://discord.gg/E9cJjvw) to learn more! Lastly if you enjoy Heimdallr and would like to help support it check out our [Patreon](https://www.patreon.com/jotunndev).'
      ])

    return message.util.send({ embed })
  }
}

module.exports = AboutCommand
