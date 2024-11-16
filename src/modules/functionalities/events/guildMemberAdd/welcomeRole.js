const ROLES = require('../../../../variables/roles')

module.exports = async (bot, member) => {
    member.roles.add(member.guild.roles.cache.get(ROLES.welcome))
}