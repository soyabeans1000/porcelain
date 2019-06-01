const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./model')
require('./routes')(app)

require('./config').sync()
.then(_ =>app.listen( 3001))
.catch(e => console.log(e))
