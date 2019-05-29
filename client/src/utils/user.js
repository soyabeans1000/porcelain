import axios from 'axios'

const User = {
    getOne: id => axios.get(`/user/${id}`)
}

export default User