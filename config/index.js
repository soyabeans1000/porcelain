const Sequelize = require('sequelize')

require('dotenv').config()
const user = process.env.db_acc
const password = process.env.db_pw
const db = process.env.db
const port = process.env.port


module.exports = new Sequelize(`mysql://${user}:${password}@localhost:${port}/${db}`)