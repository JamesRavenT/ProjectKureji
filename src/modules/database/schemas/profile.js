const {Schema, model} = require('mongoose')

let profile = new Schema({
    memberId: { 
        type: String, 
        required: true 
    },

    userName: { 
        type: String, 
        required: true 
    },

    smuleId: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
    pronouns: {
        type: String,
        required: true
    },
    timezone: {
        type: String,
        required: true
    },
    languages: {
        type: String,
        required: true
    },
    likes: {
        type: String,
        required: true
    },
    dislikes: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

})

module.exports = model('member-profile', profile)