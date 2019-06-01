import axios from 'axios'

const User = {
    getOne: userId => axios.get(`/user/${userId}`),
    findOne: ({email, password}) => axios.get(`/user/${email}/${password}`),
    postOne: signUpObj => axios.post('/user', signUpObj),
    findAnother: email => axios.get(`/useremail/${email}`)
}

export default User
