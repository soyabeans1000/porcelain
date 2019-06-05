import React, { Component } from 'react'
import Request from '../../utils/request'
import Bathrooms from '../../utils/bathroom'

class Requests extends Component {
    state = {
        requests: []
    }
    componentWillMount (){
        Request.getAll()
        .then(({data}) => {
            let newrequests = []
            data.forEach(item => {
                newrequests.push({
                    street: item.street,
                    city: item.city,
                    state: item.state,
                    zipcode: item.zipcode,
                    image: item.image,
                    gender: item.gender,
                    stalls: item.stalls,
                    level: item.level,
                    cleanliness: item.cleanliness,
                    caption: item.caption,
                    id: item.id,
                    userId: item.userId
                })
                
            });
            this.setState({requests: newrequests})
        })
        .catch(e => console.log(e))
    }
    handleapproval = e => {
        let i = e.currentTarget.value
        let request = this.state.requests
        let newbathroom= {
            street: request[i].street,
            city: request[i].city,
            state: request[i].state,
            zipcode: parseInt(request[i].zipcode),
            gender: request[i].gender,
            stalls: parseInt(request[i].stalls),
            level: parseInt(request[i].level),
            cleanliness: request[i].cleanliness,
            caption: request[i].caption,
            image: request[i].image,
            userId: request[i].userId
        }
        Bathrooms.postOne(newbathroom)
        .catch(e => console.log(e))
        Request.deleteOne(request[i].id)
        .catch(e => console.log(e))
        request.splice(i, 1)
        this.setState({requests: request})
    }
    handledeny = e => {
        let i = e.currentTarget.value
        let request = this.state.requests
        console.log(request[i].id)
        console.log(e.currentTarget.id)
        Request.deleteOne(request[i].id)
        .catch(e => console.log(e))
        request.splice(i, 1)
        this.setState({requests: request})
    }

    render () {
        return (
            <> 
                <h1>Bathroom Submission</h1>
                {this.state.requests.map((request, index) => (
                    <div>
                        <h4>{request.street} {request.city}, {request.state} {request.zipcode}</h4>
                        <img src={request.image} />
                        <span>Gender: {request.gender}</span>
                        <span>Stall(s): {request.stalls}</span>
                        <span>On level: {request.level}</span>
                        <span>cleanliness: {request.cleanliness}</span>
                        <p>{request.caption}</p> 
                        <button id={request.id} value={index} onClick={this.handleapproval}>approve</button>
                        <button id={request.id} value={index} onClick={this.handledeny}>deny</button>
                    </div>
                ))}
            </>
        )
    }
}

export default Requests