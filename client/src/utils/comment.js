import axios from 'axios'

const Comments = {
    getAll: userId => axios.get(`/comment/${userId}`)
}

export default Comments