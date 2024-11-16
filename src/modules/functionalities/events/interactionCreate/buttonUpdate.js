async function load(bot, interaction) {
    if(interaction.customId === 'edit') {
        interaction.reply({
            content: 'This function is still in development',
            ephemeral: true
        })
    }

}

module.exports = load