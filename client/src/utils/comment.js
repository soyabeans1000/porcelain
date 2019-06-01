import axios from 'axios'

const Comments = {
    getAll: userId => axios.get(`/comment/${userId}`),
    getAllPost: bathroomId => axios.get(`/comment/${bathroomId}`),
    postOne: comments => axios.post('/comment', comments),
    deleteOne: userId => axios.delete(`/comment/${userId}`)
}

export default Comments