const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log(`${client.user.username} is online!`)
})

client.login('MTA0OTQ3MTc5Njc1MzIxOTY2NA.GkNmHd.ykQLB4FGEX1XaFGw5SVifIFmzyhlufd1PNksWA')