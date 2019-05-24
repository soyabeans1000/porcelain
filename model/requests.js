const Sequelize = require('sequelize')
const connection = require('../config')

class Requests extends Sequelize.Model {}

Requests.init ({
    location: {
        type: Sequelize.STRING,
        notNull: true,
        len: [1, 100]
    },
    gender: {
        type: Sequelize.STRING,
        notNull: true,
        len: [4, 8]
    },
    stalls: {
        type: Sequelize.INTEGER,
        isNumeric: true, 
        notNull: true
    },
    level: {
        type: Sequelize.INTEGER,
        isNumeric: true, 
        notNull: true
    },
    caption: {
        type: Sequelize.STRING,
        notNull: true,
        len: [1, 200]
    }
},{
    sequelize: connection, 
    modelName: 'requests'
})


module.exports = Requests