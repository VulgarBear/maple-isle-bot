const { Listener } = require('discord-akairo')
const signale = require('signale')
const Starboard = require('../../struct/Starboard')
const roleClaim = require('../../helpers/role-claim.js')

class ReadyListener extends Listener {
  constructor () {
    super('ready', {
      event: 'ready',
      emitter: 'client',
      category: 'client'
    })
  }

  exec () {
    const client = this.client

    /* Log Information about the bot */
    signale.start({ prefix: '[Client]', message: `${client.user.tag} is ready to server!` })

    /* Post Intial Client Activity */
    client.user.setActivity(`Over ${this.client.guilds.cache.size} Villagers`, { type: 'WATCHING' })

    /* Intialize Starboard */
    for (const guild of this.client.guilds.cache.values()) {
      const starboard = new Starboard(guild)
      client.starboards.set(guild.id, starboard)
    }

    /* Load Reaction Role Claim */
    roleClaim(client)

    /* Post client Activity every 20 seconds */
    setInterval(() => {
      client.user.setActivity(`Over ${this.client.guilds.cache.size} Villagers`, { type: 'WATCHING' })
    }, 20000)
  }
}

module.exports = ReadyListener
