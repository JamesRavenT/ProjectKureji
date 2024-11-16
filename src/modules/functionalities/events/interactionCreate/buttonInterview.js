const { ButtonBuilder, ButtonStyle, ActionRow, ActionRowBuilder, ComponentType } = require('discord.js')
const CHANNELS = require('../../../../variables/channels')
const ROLES = require('../../../../variables/roles')

async function load(bot, interaction) {
        const interviewrole = interaction.guild.roles.cache.get(ROLES.interview)
        const welcomerole = interaction.guild.roles.cache.get(ROLES.welcome)
        if(interaction.customId === 'interview') {
            let newActionRowEmbeds = interaction.message.components.map(oldActionRow => {
                updatedActionRow = new ActionRowBuilder();
                updatedActionRow.addComponents(oldActionRow.components.map(buttonComponent => {
                newInterviewButton = new ButtonBuilder()
                                    .setLabel('[1/1] Interview Room')
                                    .setStyle(ButtonStyle.Danger)
                                    .setCustomId('interview')
                                    console.log('check5')
                if(buttonComponent.style == ButtonStyle.Primary){
                    interaction.member.roles.add(interviewrole)
                    interaction.member.roles.remove(welcomerole)
                    newInterviewButton.setLabel('[1/1] Interview Room')  
                    newInterviewButton.setStyle(ButtonStyle.Danger)
                    interaction.reply({
                        content: `Goodluck!`,
                        ephemeral: true
                    })
                }
                else if (buttonComponent.style == ButtonStyle.Danger){
                    interaction.reply({
                        content: 'Sorry! I\'m currently interviewing someone, please wait for your turn.',
                        ephemeral: true
                    })
                }
                return newInterviewButton
                
                }));
                return updatedActionRow
            });
    
            await interaction.message.edit({
                components: newActionRowEmbeds
            })
            return
        }
   
}

module.exports = load

