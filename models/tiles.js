const mongoose = require('mongoose')

var tile = mongoose.Schema({
	username: String,
	score: Number
})

module.exports = mongoose.model('HallOfFame', tile)