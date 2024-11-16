const CHANNELS = require('../../../variables/channels')
const EMBEDS = require('../api/embeds')

async function load (bot, interaction) {
    
    try{
        const rulesCH = await bot.channels.cache.get(CHANNELS.rules)
        await rulesCH.bulkDelete(99)
        await rulesCH.send({ 
            embeds : [
                        EMBEDS.welcomeBanner, 
                        EMBEDS.welcomeText, 
                        EMBEDS.discordPolicyText, 
                        EMBEDS.rulesBanner,
                        EMBEDS.rulesText,
                    ], 
        })
        await rulesCH.send({ 
            embeds : [
                        EMBEDS.guidelineBanner,
                        EMBEDS.guidelineText,
                        EMBEDS.strikeSystemBanner,
                        EMBEDS.strikeSystemText
                    ], 
        })
        interaction.reply('Loaded!')
    } catch(e) {}
    
} 

module.exports = { load }