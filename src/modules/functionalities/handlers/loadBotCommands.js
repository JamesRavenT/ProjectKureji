module.exports = async (bot, serverID) => {
    let botCommands;

    if(serverID) {
        const guild = await bot.guilds.fetch(serverID)
        botCommands = guild.commands
    } else {
        botCommands = await bot.application.commands
    }

    await botCommands.fetch()
    return botCommands
}