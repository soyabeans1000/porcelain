import React, { Component } from 'react'
import SubMenu from '../../components/Profile_Menu/sub-menu.js'

// Need to create a add icon

class Profile extends Component {
    render() {
        return (
            <div>
                <h1 className="username">User Name Goes here</h1>
                <SubMenu />                
            </div>
        )
    }
}

export default Profile;