const mongoose = require('mongoose')

var tile = mongoose.Schema({
	username: String,
	score: Number,
	timestamp: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('HallOfFame', tile)