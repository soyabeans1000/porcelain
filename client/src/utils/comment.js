import axios from 'axios'

const Comments = {
    getAll: userId => axios.get(`/comment/${userId}` , {headers:{Authorization: "Bearer " + window.localStorage.getItem('token')} })
}

export default Comments