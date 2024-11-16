const { PermissionFlagsBits } = require('discord.js')

module.exports = {
    name: 'test',
    description: 'tester',
    options: [],
    permissionsRequired: [PermissionFlagsBits.Administrator],
    
    execute : (bot, interaction) => {
        interaction.reply('Hi! This is Test Bot for Kureiji Bot.')
        
    }

}