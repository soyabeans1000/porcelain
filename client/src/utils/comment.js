import axios from 'axios'

const Comments = {
    getAll: userId => axios.get(`/comment/${userId}`),
    postOne: comment => axios.post('/comment', comment)
}

export default Comments