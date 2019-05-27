const Sequelize = require('sequelize')
require('dotenv').config();
const user = 'root'
const password = process.env.SERVER_PASS
const db = 'porcelain_db'
const port = '3306'

module.exports = new Sequelize(`mysql://${user}:${password}@localhost:${port}/${db}`)