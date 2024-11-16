const CHANNELS = require('../../../variables/channels')
const TITOBOT = require('../../../variables/images')
const BUTTONS = require('../api/buttons')
const LOAD_INTERROGATIONBUTTONFUNCTIONALITY = require('../events/interactionCreate/buttonInterrogation')

async function load (bot, interaction) {
    try{
        const interviewCH = await bot.channels.cache.get(CHANNELS.interview)
        await interviewCH.bulkDelete(99)
        await interviewCH.send({
            files: [{ attachment: TITOBOT.kalm }],
            content: 'Welcome! I am Tito Bot and I\'ll be the one to interview you today. It will just be a few questions kaya relax ka lang. Paki seryosohin lang ang tanong dahil ito ay one take lamang. Ready ka na ba?',
            components: [BUTTONS.interrogation]
        })
        LOAD_INTERROGATIONBUTTONFUNCTIONALITY(bot, interaction)
    } catch(e) {}

} 


module.exports = { load }