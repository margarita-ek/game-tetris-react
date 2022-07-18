const {Schema, model, Types} = require('mongoose');

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
    },
    statistics: [{ type: Types.ObjectId, ref: 'StatisticsTetris' }]    
})

module.exports = model('UserTetris', UserTetris)