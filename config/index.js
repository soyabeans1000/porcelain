const Sequelize = require('sequelize')

const user = process.env.db_acc
const password = process.env.db_pw
const db = process.env.db
const port = process.env.port
const sqlstring = `mysql://${user}:${password}@localhost:${port}/${db}`

module.exports = new Sequelize(sqlstring)