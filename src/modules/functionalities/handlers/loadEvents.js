const path = require('path')
const getFiles = require('../../utilities/filestructure/getfiles')

module.exports = (bot) => {
    const eventFolders = getFiles(path.join(__dirname, '..', 'events'), true)
    for (const eventFolder of eventFolders){
        const eventFiles = getFiles(eventFolder)
        const eventName = eventFolder.replace(/\\/g, '/').split('/').pop()
        
        bot.on(eventName, async(arg) => {
            for (const eventFile of eventFiles) {
                const eventFunction = require(eventFile)
                await eventFunction(bot ,arg)
            } 
        })

    }

}