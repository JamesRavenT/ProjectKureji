const { server, admins} = require('../../../../../config.json')
const loadCommands = require('../../handlers/loadCommands')

module.exports = async (bot, interaction) => {
    if(!interaction.isChatInputCommand()) return
    const commands = loadCommands()
    try{
        const command = commands.find((cmd) => cmd.name == interaction.commandName)
        if(!command) return
        if(!command.adminOnly) {
            if(!admins.includes(interaction.member.id)) {
                interaction.reply({
                    content: 'Only developers',
                    ephemeral: true,
                })
                return
            }

            if(command.permissionRequired?.length) {
                for (const permission of command.permissionRequWired) {
                    if(!interaction.members.permissions.has(permission)) {
                        interaction.reply({
                            content: 'Admins Only',
                            ephermeral: true
                        })
                        break
                    }
                }
            }
    
            await command.execute(bot, interaction)
        }
    } catch(e) {
        console.log(e)
    }

}