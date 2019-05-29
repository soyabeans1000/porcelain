import axios from 'axios'

const Request = {
    postOne: bathroom => axios.post('/request', bathroom)

}

export default Request