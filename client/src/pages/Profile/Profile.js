import React, { Component } from 'react'
import User from '../../utils/user.js'
import Comments from '../../utils/comment'
import Bathroom from '../../utils/bathroom'
import Commentedpost from '../../components/commentedpost'
import Likes from '../../utils/likes'
import Likedposts from '../../components/likedposts/index.js';
import ProfileSubMenu from './Profile-sub-level/sub-menu.js'

// Need to create a add icon

class Profile extends Component {
    render() {
        return (
            <div>
                <h1 className="username">User Name Goes here</h1>
                <ProfileSubMenu />
                
            </div>
        )
    }
}

export default Profile;