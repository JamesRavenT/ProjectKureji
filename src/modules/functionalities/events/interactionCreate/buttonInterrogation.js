const { EmbedBuilder } = require('discord.js')
const profile = require('../../../database/schemas/profile')
const CHANNELS = require('../../../../variables/channels')
const TITOBOT = require('../../../../variables/images')
const BUTTONS = require('../../api/buttons')
const COLORS = require('../../../../variables/colors')
const ROLES = require('../../../../variables/roles')
const WELCOMECHANNEL = require('../../channels/welcome')
const INTERVIEWCHANNEL = require('../../channels/interview')

async function load(bot, interaction) {
    try {
        const msg_filter = (m) => m.author.id === interaction.user.id;   
        const interviewCH = await bot.channels.cache.get(CHANNELS.interview)
        const generalCH = await bot.channels.cache.get(CHANNELS.general)
        const profileCH = await bot.channels.cache.get(CHANNELS.profile)
        const memba = interaction.guild.members.cache.get(interaction.user.id)
        const welcomerole = interaction.guild.roles.cache.get(ROLES.welcome)
        const interviewrole = interaction.guild.roles.cache.get(ROLES.interview)
        const memberRole = interaction.guild.roles.cache.get(ROLES.member)
        let details = []
        const questions= [
            '# YOROSHI SOSHITE HAJIMERO!' + '\n' + '# ANO ANG NICKNAME MO?!',
            '# SMULE ID?!',
            '# BIRTHDAY?!' + '\n Ganitong format ha.. MM/DD\n' + '# GO!',
            '# PREFERRED PRONOUN(S)?!',
            '# TIMEZONE?!',
            '# LANGUAGES AND DIALECTS?!',
            '# LIKES?!',
            '# DISLIKES?!',
            '# TELL ME SOMETHING ABOUT YOURSELF OR KAHIT YUNG FAVORITE QUOTATION MO.'
        ]

        if(interaction.customId === 'cancel') {
            interaction.reply({
                content: ' ALIS',
                ephemeral: true
            })
            await interaction.member.roles.remove(interviewrole)
            await interaction.member.roles.add(welcomerole) 
            await WELCOMECHANNEL.load(bot, interaction)
        }
    
        if(interaction.customId === 'update') {
            interaction.reply({
                content: '  This function is still not available',
                ephemeral: true
            })
    
        }
    
        if(interaction.customId === 'start') {
            await interviewCH.bulkDelete(3)
            await interviewCH.send({files: [{ attachment: TITOBOT.angy }]})
            for(let i = 0 ; i < 9 ; i++) {            
                await interviewCH.send(questions[i])
                await interviewCH.awaitMessages({filter: msg_filter, max: 1})
                .then(async (collected) => {
                    await interviewCH.bulkDelete(2)
                    details.push(collected.first().content)
                })}
            let stringContainer = details[1]
            let smuleID = stringContainer.replace('@', '')      
            const profileEmbed = new EmbedBuilder()
                                    .setColor(COLORS.accent)
                                    .setTitle('KUREIJI MEMBER ID')
                                    .setThumbnail(TITOBOT.logo)
                                    .setDescription( '\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦' )
                                    .addFields(
                                                {
                                                    name: 'Name',
                                                    value: details[0] + ', ' + details[3]
                                                },
                                                {
                                                    name: 'Smule ID',
                                                    value: '@' + smuleID
                                                },
                                                {
                                                    name: 'Birthdate',
                                                    value: details[2]
                                                },
                                                {
                                                    name: 'TimeZone and Known Languages',
                                                    value: details[4] + ' || ' + details[5]
                                                },
                                                {
                                                    name: 'Likes and Dislikes',
                                                    value: 'O:' + details[6] + 
                                                            '\nX: ' + details[7] 
                                                },
                                                {
                                                    name: ' ',
                                                    value: '*\"' + details[8] + '\"*'
                                                },
                                            ) 
            interaction.reply({
                content: 'TAPOS NA TAYO. ALIS',
                ephemeral: true
            })
            await profileCH.send({ embeds: [profileEmbed] })
            await generalCH.send(`Everyone, please welcome.. <@${interaction.user.id}> a.k.a @${smuleID} from Smule!!!`)
            await interaction.member.roles.remove(interviewrole)
            await interaction.member.roles.add(memberRole) 
            await profileCH.messages.fetch({limit: 1}).then(async m => {
                let memID = m.first().id
                profile.create({
                    memberId: memID,
                    userName: details[0],
                    smuleId: smuleID,
                    birthday: details[2],
                    pronouns: details[3],
                    timezone: details[4],
                    languages: details[5],
                    likes: details[6],
                    dislikes: details[7],
                    description: details[8],
                }) 
            await WELCOMECHANNEL.load(bot, interaction)
            await interviewCH.bulkDelete(99)
            await interviewCH.send({
                    files: [{ attachment: TITOBOT.kalm }],
                    content: 'Welcome! I am Tito Bot and I\'ll be the one to interview you today. It will just be a few questions kaya relax ka lang. If ready ka na, type \"I am a Kureiji Person\". Okay?',
                    components: [BUTTONS.interrogation]
                }) 
            }) 
            // await load_Profile(bot, interviewCH, profileCH, interviewrole, memberRole, interaction, details)
        }
    } catch (e) { console.log(e) }
}

module.exports = load

////METHODS

async function load_Profile(bot, interviewCH, profileCH, interviewrole, memberRole, i, details) {
    const msg_filter = (m) => m.author.id === i.user.id;   
    
    await interviewCH.bulkDelete(1)
    await interviewCH.send({ files: [{ attachment: TITOBOT.kalm }]})
    await interviewCH.send({ 
            content: 'Ayan, natapos rin tayo ^^. To confirm lang ha, tama ba ito?',
            embeds : [profileEmbed],
            components: [BUTTONS.confirmation]
    })
    bot.on('interactionCreate' , async (interaction) => {
        if(interaction.customId === 'yes') {
            let stringContainer = details[1]
            let smuleID = stringContainer.replace('@', '')
            
        } 
        
        if(interaction.customId === 'no') {
            await interviewCH.bulkDelete(2)
            await interviewCH.send({ files: [{ attachment: TITOBOT.angy }] })
            await interviewCH.send('# ANO?! SAN KA NAGKAMALI?!')
            await interviewCH.send({ content: '# Basic Information', components: [BUTTONS.update_basicInfo] })
            await interviewCH.send({ content: '# Language and TimeZones', components: [BUTTONS.update_region] })      
            await interviewCH.send({ content: '# Likes and Dislikes', components: [BUTTONS.update_hobbies] }) 
            await interviewCH.send({ content: '# Description', components: [BUTTONS.update_description]})
        }

        if(interaction.customId === 'update-name') {
            await interviewCH.bulkDelete(6)
            await interviewCH.send({ files: [{ attachment: TITOBOT.angy }]})
            await interviewCH.send('Sige.\n' + '# ANO ANG TAMANG NICKNAME MO?!')
            await interviewCH.awaitMessages({filter: msg_filter, max: 1})
            .then(async (collected) => {
                details[0] = collected.first().content
                console.log(collected.first().content)
                console.log(details[1])
                await interviewCH.bulkDelete(2)
                
            })
            await load_Profile(interviewCH, details) 
        }

        if(interaction.customId === 'update-smuleid') {
            await interviewCH.bulkDelete(6)
            await interviewCH.send({ files: [{ attachment: TITOBOT.angy }]})
            await interviewCH.send('Sige.\n' + '# ANO ANG TAMANG SMULE ID MO?!')
            await interviewCH.awaitMessages({filter: msg_filter, max: 1})
            .then(async (response) => {
                await interviewCH.bulkDelete(2)
                details[1] = response.first().content
            })
            await load_Profile(interviewCH, details) 
        }

        if(interaction.customId === 'update-bday') {
            await interviewCH.bulkDelete(6)
            await interviewCH.send({ files: [{ attachment: TITOBOT.angy }]})
            await interviewCH.send('Sige.\n' + '# ANO ANG TAMANG BIRTHDAY MO?!')
            await interviewCH.awaitMessages({filter: msg_filter, max: 1})
            .then(async (collected) => {
                await interviewCH.bulkDelete(2)
                details[2] = collected.first().content
            })
            await load_Profile(interviewCH, details) 
        }

        if(interaction.customId === 'update-pronouns') {
            await interviewCH.bulkDelete(6)
            await interviewCH.send({ files: [{ attachment: TITOBOT.angy }]})
            await interviewCH.send('Sige.\n' + '# ANO ANG TAMANG PRONOUNS MO?!')
            await interviewCH.awaitMessages({filter: msg_filter, max: 1})
            .then(async (collected) => {
                await interviewCH.bulkDelete(2)
                details[3] = collected.first().content
            })
            await load_Profile(interviewCH, details) 
        }

        if(interaction.customId === 'update-timezone') {
            await interviewCH.bulkDelete(6)
            await interviewCH.send({ files: [{ attachment: TITOBOT.angy }]})
            await interviewCH.send('Sige.\n' + '# ANO ANG TAMANG TIMEZONE MO?!')
            await interviewCH.awaitMessages({filter: msg_filter, max: 1})
            .then(async (collected) => {
                await interviewCH.bulkDelete(2)
                details[4] = collected.first().content
            })
            await load_Profile(interviewCH, details) 
        }

        if(interaction.customId === 'update-language') {
            await interviewCH.bulkDelete(6)
            await interviewCH.send({ files: [{ attachment: TITOBOT.angy }]})
            await interviewCH.send('Sige.\n' + '# ANO ANG TAMANG LANGUAGES NA ALAM MO?!')
            await interviewCH.awaitMessages({filter: msg_filter, max: 1})
            .then(async (collected) => {
                await interviewCH.bulkDelete(2)
                details[5] = collected.first().content
            })
            await load_Profile(interviewCH, details) 
        }
        if(interaction.customId === 'update-likes') {
            await interviewCH.bulkDelete(6)
            await interviewCH.send({ files: [{ attachment: TITOBOT.angy }]})
            await interviewCH.send('Sige.\n' + '# ANO ANG TAMANG LIKES MO?!')
            await interviewCH.awaitMessages({filter: msg_filter, max: 1})
            .then(async (collected) => {
                await interviewCH.bulkDelete(2)
                details[6] = collected.first().content
            })
            await load_Profile(interviewCH, details) 
            
        }

        if(interaction.customId === 'update-dislikes') {
            await interviewCH.bulkDelete(6)
            await interviewCH.send({ files: [{ attachment: TITOBOT.angy }]})
            await interviewCH.send('Sige.\n' + '# ANO ANG TAMANG DISLIKES MO?!')
            await interviewCH.awaitMessages({filter: msg_filter, max: 1})
            .then(async (collected) => {
                await interviewCH.bulkDelete(2)
                details[7] = collected.first().content
            })
            await load_Profile(interviewCH, details) 
        }

        if(interaction.customId === 'update-description') {
            await interviewCH.bulkDelete(6)
            await interviewCH.send({ files: [{ attachment: TITOBOT.angy }]})
            await interviewCH.send('Sige.\n' + '# ANO ANG TAMANG DESCRIPTION MO?!')
            await interviewCH.awaitMessages({filter: msg_filter, max: 1})
            .then(async (collected) => {
                await interviewCH.bulkDelete(2)
                details[8] = collected.first().content
            })
            await load_Profile(interviewCH, details) 
        }

    })
}

function addArr() {

}

