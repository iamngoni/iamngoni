const mongoose = require('mongoose')

var postsSchema = mongoose.Schema({
  title: String,
  date: {
    type: Date,
    default: Date.now
  },
  body: String
})

module.exports = mongoose.model('Posts', postsSchema)
