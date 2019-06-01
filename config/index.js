const Sequelize = require('sequelize')

require('dotenv').config()
const user = process.env.db_acc
const password = process.env.db_pw
const db_base = process.env.db_base
const port = process.env.port


module.exports = new Sequelize(`mysql://${user}:${password}@localhost:${port}/${db_base}`)