const express = require('express')
const { join } = require('path')
const app = express()
const jwt = require('express-jwt');
require('dotenv').config()



app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(jwt({ secret: process.env.SECRETKEY}).unless({path: ['/login', '/user', /\/user\/(\d*)/g]}));
require('./model')
require('./routes')(app)

require('./config').sync()
.then(_ =>app.listen( 3001))
.catch(e => console.log(e))
