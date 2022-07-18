const {Schema, model} = require('mongoose');

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
    }
})

module.exports = model('StatisticsTetris', StatisticsTetris)