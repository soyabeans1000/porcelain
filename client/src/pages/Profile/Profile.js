import React, { Component } from 'react'
import SubMenu from '../../components/Profile_Menu/sub-menu.js'
import User from '../../utils/user.js'
import Testing from '../../components/testing/testing.js'

// Need to create a add icon

class Profile extends Component {
    // state = {
    // }
    constructor(props){
        super(props);
        this.state={
            username: '',
            redirect: false,
            bathroomId: null
        }
        this.toggleredirect = this.toggleredirect.bind(this);
      }

    toggleredirect(num){
        this.setState({
            redirect: !this.state.redirect,
            bathroomId: num
        })
    }

    componentWillMount () {
        User.getOne(localStorage.getItem('userId'))
        .then(({data}) => {
            this.setState({username: data.username})
        })
        .catch(e => console.log(e))
    }
    handlepath = _ => {
        if (this.state.redirect) {
            return (
                <Testing toggleredirect={this.toggleredirect} bathroomId={this.state.bathroomId}/>
            )
        } else {
            return (
                <div>
                <h1 className="username">{this.state.username}</h1>
                <SubMenu toggleredirect={this.toggleredirect}/>                
            </div>
            )
        }
    }
    render() {
        return (
            // <div>
            //     <h1 className="username">{this.state.username}</h1>
            //     <SubMenu toggleredirect={this.toggleredirect}/>                
            // </div>
            <div>
                {this.handlepath()}
            </div>
        )
    }
}

export default Profile;