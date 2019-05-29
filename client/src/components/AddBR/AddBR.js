import React, { Component } from 'react'
import Form from '../form'
import Bathrooms from '../../utils/bathroom.js'
import Image from '../../utils/image.js'
import Dispbathroom from '../dispbathroom'
// Need to create a add icon

class AddBR extends Component {
    state = {
        street: '',
        city: '',
        state: '',
        zipcode: '',
        gender: '',
        stalls: '',
        level:  '',
        caption: '', 
        file: null,
        image: '',
        bathroom: []
    }
    componentWillMount() {
        localStorage.setItem('userId', 1)
    }
    handleInputChange = event => {
        if (event.target.id === "image") {
            this.setState({ file: event.target.files })
        } else {
            this.setState({ [event.target.id]: event.target.value })
        }
    }
    handleFormSubmit = event => {
        event.preventDefault()
        let state = this.state
        if (state.file === null || state.street === '' || state.city === '' || state.state === '' || state.zipcode === '' || state.gender === '' || state.stalls === '' || state.level === '' || state.caption === ''){
            alert('Please fill out form')
        } else {
        const fd = new FormData()
        let image = ''
        fd.append('image', this.state.file[0])
        Image.postOne(fd)
        .then(({data}) => {
            image = data.imageUrl
            this.setState({image: image})
            Bathrooms.postOne({
                street: this.state.street,
                city: this.state.city,
                state: this.state.state,
                zipcode: parseInt(this.state.zipcode),
                gender: this.state.gender,
                stalls: parseInt(this.state.stalls),
                level:  parseInt(this.state.level),
                caption: this.state.caption, 
                image: this.state.image,
                userId: localStorage.getItem('userId')
            })
            let bathroom = this.state.bathroom
            bathroom.push({
                street: this.state.street,
                city: this.state.city,
                state: this.state.state,
                zipcode: parseInt(this.state.zipcode),
                gender: this.state.gender,
                stalls: parseInt(this.state.stalls),
                level:  parseInt(this.state.level),
                caption: this.state.caption, 
                image: this.state.image
            })
            this.setState({bathroom})
            console.log(this.state)
        })
        .catch(e => console.log(e))
    }
    }
    render() {
        let state = this.state
        return (
        <>
            <h1>Add a bathroom</h1>
            <Form handleInputChange={this.handleInputChange} 
                handleFormSubmit={this.handleFormSubmit} 
                street={state.street}
                city={state.city}
                state={state.state}
                zipcode={state.zipcode}
                gender={state.gender}
                stalls={state.stalls}
                level={state.level}
                caption={state.caption}
            />
            <Dispbathroom bathroom={state.bathroom} />
        </>
        )
    }
}

export default AddBR; 