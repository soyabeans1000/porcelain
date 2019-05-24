const Sequelize = require('sequelize')
const connection = require('../config')

class Users extends Sequelize.Model {}

Users.init ({
    username: {
        type: Sequelize.STRING,
        notNull: true,
        len: [4, 12]
    },
    email: {
        type: Sequelize.STRING,
        isEmail: true,
        notNull: true
    },
    password: {
        type: Sequelize.STRING,
        notNull: true,
        len: [4, 12],
        notIn: [['password', '123456789']]
    },
    adminstatus: {
        type: Sequelize.BOOLEAN,
        notNull: true,
        defaultValue: false
    }
},{
    sequelize: connection, 
    modelName: 'users'
})


module.exports = Users