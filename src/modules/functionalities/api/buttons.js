const { ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js')

//Interview Button
const interview = new ActionRowBuilder().addComponents(
                            new ButtonBuilder()
                            .setLabel('[0/1] Interview Room')
                            .setStyle(ButtonStyle.Primary)
                            .setCustomId('interview')
                        ) 

const interrogation = new ActionRowBuilder().addComponents(
                            new ButtonBuilder()
                            .setLabel('Ready na Ready ako Tito Bot!')
                            .setStyle(ButtonStyle.Primary)
                            .setCustomId('start'),

                            // new ButtonBuilder()
                            // .setLabel('Update')
                            // .setStyle(ButtonStyle.Primary)
                            // .setCustomId('update'),

                            new ButtonBuilder()
                            .setLabel('Di pa po ako ready Tito bot...')
                            .setStyle(ButtonStyle.Danger)
                            .setCustomId('cancel'),
                        )
const confirmation = new ActionRowBuilder().addComponents(
                            new ButtonBuilder()
                            .setLabel('Yes po Tito Bot!')
                            .setStyle(ButtonStyle.Primary)
                            .setCustomId('yes'),

                            new ButtonBuilder()
                            .setLabel('Di po Tito Bot..')
                            .setStyle(ButtonStyle.Danger)
                            .setCustomId('no')
                        )

const update = new ActionRowBuilder().addComponents(
                    new ButtonBuilder()
                    .setLabel('Update')
                    .setStyle(ButtonStyle.Primary)
                    .setCustomId('edit'),
                    )

const update_basicInfo = new ActionRowBuilder().addComponents(
                    new ButtonBuilder()
                    .setLabel('Name')
                    .setStyle(ButtonStyle.Primary)
                    .setCustomId('update-name'),

                    new ButtonBuilder()
                    .setLabel('SmuleID')
                    .setStyle(ButtonStyle.Primary)
                    .setCustomId('update-smuleid'),

                    new ButtonBuilder()
                    .setLabel('Birthday')
                    .setStyle(ButtonStyle.Primary)
                    .setCustomId('update-bday'),

                    new ButtonBuilder()
                    .setLabel('Pronoun')
                    .setStyle(ButtonStyle.Primary)
                    .setCustomId('update-pronoun')
                    )

const update_region = new ActionRowBuilder().addComponents(
                    new ButtonBuilder()
                    .setLabel('TimeZone')
                    .setStyle(ButtonStyle.Primary)
                    .setCustomId('update-timezone'),

                    new ButtonBuilder()
                    .setLabel('Language')
                    .setStyle(ButtonStyle.Primary)
                    .setCustomId('update-language')
                    )

const update_hobbies = new ActionRowBuilder().addComponents(
                    new ButtonBuilder()
                    .setLabel('Likes')
                    .setStyle(ButtonStyle.Primary)
                    .setCustomId('update-like'),

                    new ButtonBuilder()
                    .setLabel('Dislikes')
                    .setStyle(ButtonStyle.Primary)
                    .setCustomId('update-dislike'),
                    )

const update_description = new ActionRowBuilder().addComponents(
                    new ButtonBuilder()
                    .setLabel('Description')
                    .setStyle(ButtonStyle.Primary)
                    .setCustomId('update-description')
                    )

module.exports = {
    interview,
    interrogation,
    confirmation,
    update,
    update_basicInfo,
    update_region,
    update_hobbies,
    update_description

}
