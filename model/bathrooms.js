const Sequelize = require('sequelize')
const connection = require('../config')

class Bathrooms extends Sequelize.Model {}

Bathrooms.init ({
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
    },
    likecount: {
        type: Sequelize.INTEGER,
        isNumeric: true, 
        notNull: true
    }
},{
    sequelize: connection, 
    modelName: 'bathrooms'
})

module.exports = Bathrooms