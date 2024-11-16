const { PermissionFlagsBits } = require('discord.js')
const WELCOMECH = require('../../channels/welcome')
const INTERVIEWCH = require('../../channels/interview')
const RULESCH = require('../../channels/rules')


module.exports = {
    name: 'bonktitobot',
    description: '-- ADMINS ONLY -- || Paluin ng malupit si Tito Bot para tumino',
    options: [],
    permissionsRequired: [PermissionFlagsBits.Administrator],
    
    execute : (bot, interaction) => {
        WELCOMECH.load(bot, interaction)
        INTERVIEWCH.load(bot, interaction)
        RULESCH.load(bot, interaction)
    }

}