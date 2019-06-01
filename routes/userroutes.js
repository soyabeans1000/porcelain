const { Users } = require('../model')

module.exports = app => {
    // get login user id
    app.get('/user/:username/:password', (req, res) => {
        Users.findOne({where: {
            username: req.params.username, 
            password: req.params.password
        }})
        .then(user => res.json(user.id))
        .catch(e => console.log(e))
    })
    // get user adminstatus
    app.get('/user/:id', (req, res) => {
        Users.findOne({where: {id: req.params.id}})
        .then(user => res.json({
            username: user.username, 
            adminstatus: user.adminstatus
        }))
        .catch(e => console.log(e))
    })
    // create user
    app.post('/user', (req, res) =>{
        Users.create(req.body)
        .then(_ => res.sendStatus(200))
        .catch(e => console.log(e))
    })
}