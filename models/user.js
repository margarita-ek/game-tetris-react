const {Schema, model} = require('mongoose');

const UserTetris = new Schema({
    username: {
        type: String,
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
    }
})

module.exports = model('UserTetris', UserTetris)