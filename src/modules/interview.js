const { ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js')

module.exports = {
    name: 'interview',
    callback: async (message) => {
        let details = [];
        for(let i = 0 ; i < 10 ; i++) {
            const msg_filter = (m) => m.author.id === message.author.id;
            let question = (i == 0) ? 'May I ask your Smule ID?' : //SMULEID
                           (i == 1) ? 'Your name associated in Smule?' : //NAME
                           (i == 2) ? 'And how would you like to be called by your friends?' : //PSEUDONYM  
                           (i == 3) ? 'What pronouns do you prefer?' : //PRONOUNS  
                           (i == 4) ? 'When is your birthday?' : //BIRTHDATE  
                           (i == 5) ? 'Your Timezone?' : //TIMEZONE 
                           (i == 6) ? 'Do you have any other known language or dialects?' : //KNOWN LANGUAGE/DIALECTS
                           (i == 7) ? 'What are the things that you like?' : //LIKE 
                           (i == 8) ? 'And the things that you dislike?' : //DISLIKE  
                           'Can you tell me something interesting about you? And please be creative'//INFO                         
            await message.channel.send(question)
            await message.channel.awaitMessages({filter: msg_filter, max: 1})
            .then((collected) => {
                details.push(collected.first().content)
           
            })
        }
        
        let smuleID = await details[0]
        let name = await details[1]
        let pseudonym = await details[2]
        let pronouns = await details[3]
        let birthdate = await details[4]
        let timezone = await details[5]
        let dialects = await details[6]
        let like = await details[7]
        let dislike = await details[8]
        let info = await details[9]
        const yesbtn = new ButtonBuilder()
                            .setLabel('Yes')
                            .setStyle(ButtonStyle.Primary)
                            .setCustomId('yes-btn')
        const nobtn = new ButtonBuilder()
                            .setLabel('No')
                            .setStyle(ButtonStyle.Danger)
                            .setCustomId('no-btn')
        const confirmationbtn = new ActionRowBuilder().addComponents(yesbtn, nobtn)
    
        const confirmationmsg = await message.channel.send({ 
                                        content: 
                                            'Before we proceed are these details correct? \n\n' +
                                            'Smule ID : ' +  smuleID + '\n' +
                                            'Name : ' +  name + '\n' +
                                            'Psuedonym : ' +  pseudonym + '\n' +
                                            'Pronouns : ' +  pronouns + '\n' +
                                            'Birthdate : ' +  birthdate + '\n' +
                                            'Timezone : ' +  timezone + '\n' +
                                            'Dialects : ' +  dialects + '\n' +
                                            'Like : ' +  like + '\n' +
                                            'Dislike : ' +  dislike + '\n' +
                                            'Info : ' +  info + '\n'  , 
                                        
                                        components: [confirmationbtn]
                                    })
    
        const collector = reply.createMessageComponentCollector
    
    }
}





   
