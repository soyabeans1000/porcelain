import axios from 'axios'

const Comments = {
    getAll: userId => axios.get(`/comment/${userId}`),
    postOne: comment => axios.post('/comment', comment),
    deleteOne: userId => axios.delete(`/comment/${userId}`)

}

export default Comments