const { Users } = require('../model')
const jwt = require('jsonwebtoken')

const generateJWT =(userObj)=>{
let expire = new Date();
expire.setDate(expire.getDate()+7)
return jwt.sign({
    id: userObj.id,
    name: userObj.username,
    email: userObj.email,
    adminstat: userObj.adminstatus,
    exp: expire.getTime()/1000
},process.env.SECRETKEY)
}

module.exports = app => {
    // get login user id
    app.get('/user/:email/:password', (req, res) => {
        Users.findOne({where: {
            email: req.params.email, 
            password: req.params.password
        }})
        .then(user => res.json(user.id))
        .catch(e => res.json('Invalid credentials'))
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
        .then(response => { 
            console.log(response)
            res.json({success: true, token: generateJWT(response)})
            console.log(response)
            res.sendStatus(200)
        
        })
        .catch(e => console.log(e))
    })
    // app.get('/user/email/:email', (req, res) => {
    //     Users.findOne({where: {email: req.params.email}})
    //     .then(user => res.json(user))
    // })
}