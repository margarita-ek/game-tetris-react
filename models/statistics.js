const {Schema, model, Types} = require('mongoose');

const StatisticsTetris = new Schema({
    score: {
        type: Number,
        required: true
    },
    rows: {
        type: Number,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },    
    owner: {
        type: Types.ObjectId,
        ref: 'UserTetris'
    }    
})

module.exports = model('StatisticsTetris', StatisticsTetris)