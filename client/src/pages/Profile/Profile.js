import React, { Component } from 'react'
import SubMenu from '../../components/Profile_Menu/sub-menu.js'
import User from '../../utils/user.js'

// Need to create a add icon

class Profile extends Component {
    state = {
        username: ''
    }
    componentWillMount () {
        User.getOne(localStorage.getItem('userId'))
        .then(({data}) => {
            this.setState({username: data.username})
        })
        .catch(e => console.log(e))
    }
    render() {
        return (
            <div>
                <h1 className="username">{this.state.username}</h1>
                <SubMenu />                
            </div>
        )
    }
}

export default Profile;