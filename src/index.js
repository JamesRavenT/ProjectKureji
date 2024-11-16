require('dotenv').config()
const { Client, IntentsBitField } = require('discord.js')
const mongoose = require('mongoose')
const load_Events = require('./modules/functionalities/handlers/loadEvents');
const bot = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,

    ]
});

main();
init_System()

/** 
 * FUNCTIONS AND METHODS
 * 
 * 
 */
function main(){
//VARIABLES

load_Events(bot)


}
//MAIN FUNCTION



//METHODS
async function init_System () {
    init_DB()
    init_Bot()
}


async function init_DB() {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Connection to Database Stabilized')
}

function init_Bot() {
    bot.on('ready', (b) => {
        console.log('Bot Successfully Initialized')
    })
    bot.login(process.env.TESTBOTTOKEN);
    
}






//322319