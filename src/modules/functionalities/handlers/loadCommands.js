const path = require('path')
const getFiles = require('../../utilities/filestructure/getfiles')

module.exports = (exceptions = []) => {
    let listOfCommands = []

    const commands = getFiles( path.join(__dirname, '..', 'commands'), true )
    
    for(const command of commands) {
        const commandList = getFiles(command)
        for(const commandItem of commandList) {
            const commandObj = require(commandItem)
            if (exceptions.includes(commandObj.name)){
                continue
            }
            listOfCommands.push(commandObj)
        } 
    }

    return listOfCommands
}