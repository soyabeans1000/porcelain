import axios from 'axios'

const User = {
    getOne: userId => axios.get(`/user/${userId}`)
}

export default User