const mongoose = require('mongoose')

//model - schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profile: {
        type: String
    },
    linkedIn: {
        type: String,

    },
    github: {
        type: String,
    }
})

const users = mongoose.model("users", userSchema)

module.exports = users;