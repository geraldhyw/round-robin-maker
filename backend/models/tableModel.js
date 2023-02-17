const mongoose = require('mongoose')

const Schema = mongoose.Schema

const tableSchema = new Schema({
    tableName: {
        type: String,
        required: true
    },
    numTeams: {
        type: Number,
        required: true
    },
    winPoints: {
        type: Number,
        required: true
    }, 
    losePoints: {
        type: Number,
        required: true
    }, 
    drawPoints: {
        type: Number,
        required: true
    }, 
    teamNames: {
        type: Array,
        required: true
    }, 
    teamScores: {
        type: Array,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Table', tableSchema)