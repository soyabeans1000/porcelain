const { Users } = require('../model')

module.exports = app => {
    // get login user id
    // app.get('/user/:email/:password', (req, res) => {
    //     Users.findOne({where: {
    //         email: req.params.email, 
    //         password: req.params.password
    //     }})
    //     .then(user => res.json(user.id))
    //     .catch(e => res.json('Invalid credentials'))
    // })
    app.post('/login', (req, res) => {
        Users.findOne({
            where:{
                email: req.body.email, 
                password: req.body.password
            }
        })
        .then(r => res.json(r.id))
        .catch(e => res.json('Invalid credentials'))
    })
    app.get('/useremail/:email', (req, res) => {
        Users.findOne({where: {email: req.params.email}})
        .then(({email}) => res.json(email))
        .catch(e => res.sendStatus(200))
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
        .then(r => res.json(r.id))
        .catch(e => console.log(e))
    })
}