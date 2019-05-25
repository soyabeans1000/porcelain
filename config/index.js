const Sequelize = require('sequelize')
require('dotenv').config();
const user = 'root'
const password = 'fomf6yf7'
const db = 'porcelain_db'
const port = '3306'

module.exports = new Sequelize(`mysql://${user}:${password}@localhost:${port}/${db}`)