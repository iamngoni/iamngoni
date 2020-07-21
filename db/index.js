const mongoose = require('mongoose')
const config = require('./../config')

function connect () {
  if (config.env == 'development') {
    return mongoose.connect(config.db, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true
    }).then(dbconnection => dbconnection).catch(e => console.log(e))
  } else if (config.env == 'production') {
    return mongoose.connect(config.db, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true
    }).then(dbconnection => dbconnection).catch(e => console.log(e))
  } else {
    console.log("This doesn't work")
  }
}

module.exports = async function () {
  await connect()
}
