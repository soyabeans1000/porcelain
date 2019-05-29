import axios from 'axios'

const Bathrooms = {
    getAll(city, state) {
        axios.get(`/bathrooms/${city}/${state}`)
        .then(bathrooms => {

        })
        .catch(e => console.log(e))
    },
    getOne(id) {
        axios.get(`/bathrooms/${id}`)

        .then(bathroom => {

        })
        .catch(e => console.log(e))
    },
    postOne: bathroom => axios.post('/bathrooms', bathroom),
    putOne(id) {
        axios.put(`/bathrooms/increase/${id}`)
        .then(_ => {

        })
        .catch(e => console.log(e))
    },
    putOne(id) {
        axios.put(`/bathrooms/decrease/${id}`)
        .then(_ => {

        })
        .catch(e => console.log(e))
    }
}

export default Bathrooms