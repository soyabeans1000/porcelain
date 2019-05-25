const Sequelize = require('sequelize')
const connection = require('../config')

class Requests extends Sequelize.Model {}

Requests.init ({
    location: {
        type: Sequelize.STRING,
        notNull: true
    },
    gender: {
        type: Sequelize.STRING,
        notNull: true,
        len: [1, 100]
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
        allowNull: true,
        len: [1, 200]
    },
    likecount: {
        type: Sequelize.INTEGER,
        isNumeric: true,
        defaultValue: 0, 
        notNull: true
    }
},{
    sequelize: connection, 
    modelName: 'requests'
})


module.exports = Requests