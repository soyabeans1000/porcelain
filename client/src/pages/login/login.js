import React, { Component } from 'react'
import Login from '../../components/Header/form/login.js'
import {Button} from 'reactstrap'
// Need to create a add icon

class Loginpage extends Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: this.props.isLoggedIn, 
            loginSelected: false
        }
    }

    handleLoginClick = _ => {
        this.setState({loginSelected: true})
    }

    render(){
        return (
            <div>

            <h1>LOGO HERE</h1>
            {this.state.loggedIn == false && this.state.loginSelected == true ? <Login updateLoginStatus={this.props.updateLoginStatus} />: null }
            {this.state.loggedIn ? null : <Button outline color="secondary" onClick={this.handleLoginClick}>Log In</Button> } 
            </div>
        )
    }

}
    

export default Loginpage;