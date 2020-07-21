const config = require('./config')
const app = require('./app')
const db = require('./db')
const path = require('path')

app.all('/', (req, res) => {
  res.render('index', {
    title: 'Easy Locate | Home'
  })
})

db().then(dbconnection => {
  console.log(`Connected to database: ${config.message}.`)
  app.listen(config.port, () => {
    console.log(`API up on port: ${config.port}.`)
  })
}).catch(e => console.log(e.message))
