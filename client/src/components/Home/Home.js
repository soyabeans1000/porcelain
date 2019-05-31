import React, { Component } from 'react'
import Login from '../Header/form/login'
// Need to create a add icon

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: this.props.isLoggedIn, 
            loginSelected: false
        }
    }
    render(){
        return (
        <div>
        {this.state.loggedIn == false && this.state.loginSelected == true ? <Login updateLoginStatus={this.props.updateLoginStatus} />: null }
        <h1>Home View</h1>
        </div>
        )
    }

}
    

export default Home;