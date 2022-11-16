const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const userSchema = new Schema({
    id: ObjectId,
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }, 
}, {versionKey: false})

const userModel = mongoose.model('user', userSchema)
module.exports = userModel