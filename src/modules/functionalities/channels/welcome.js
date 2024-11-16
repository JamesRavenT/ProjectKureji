const CHANNELS = require('../../../variables/channels')
const EMBEDS = require('../api/embeds')
const BUTTONS = require('../api/buttons')
const LOAD_INTERVIEWBUTTONFUNCTIONALITY = require('../events/interactionCreate/buttonInterview')

async function load(bot, interaction) {
    try{
        const welcomeCH = await bot.channels.cache.get(CHANNELS.welcome)
        await welcomeCH.bulkDelete(99)
        await welcomeCH.send({ 
            embeds : [
                        EMBEDS.welcomeBanner, 
                        EMBEDS.welcomeText, 
                        EMBEDS.discordPolicyText, 
                        EMBEDS.rulesBanner,
                        EMBEDS.rulesIntro,
                        EMBEDS.rulesText,
                        EMBEDS.interviewText
                    ], 
            components: [BUTTONS.interview]
        })
        LOAD_INTERVIEWBUTTONFUNCTIONALITY(bot, interaction)

    } catch(e) { }
    
} 

module.exports = { load }