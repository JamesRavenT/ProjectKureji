const { server } = require('../../../../../config.json')
const loadBotCommands = require('../../handlers/loadBotCommands')
const loadCommands = require('../../handlers/loadCommands')
const validateCommands = require('../../handlers/validateCommands')
module.exports = async (bot) =>  {
    try {
        const commands = loadCommands()
        const botCommands = await loadBotCommands(bot, server)

        for (const command of commands){
            const {name, description, options} = command
            const existingCommand = await botCommands.cache.find((cmd) => cmd.name === name)
            if (existingCommand) {
                if(command.deleted) {
                    await botCommands.delete(existingCommand.id)
                    continue;

                }

                if(validateCommands(existingCommand, command) === true) {
                    await botCommands.edit(existingCommand.id, { description, options })
                }
            } else {
                if (command.deleted) {
                    continue
                }

                await botCommands.create({ name, description, options})
            }

        }

    } catch (e) {
        console.log(e)
    }
    
}