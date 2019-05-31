import React, { Component } from 'react'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import AddBR from './pages/AddBR/AddBR'
import BRAroundMe from './components/BRAroundMe/BRAroundMe'
import Home from './components/Home/Home'
import Profile from './pages/Profile'
import './App.css'


import NavBar from './components/NavBar/navbar'
import HeaderBar from './components/Header/header'
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isLoggedIn: false,
    }

    this.toggleLogin = this.toggleLogin.bind(this);

  }
  //add state here
  //set the value of isLoggedIn to be false by default

  //update the value to be true once the login is successful
  //that data will have to come from the home component
  //(which will trigger the login in request as the login component is a child of it)
//remember to bind this function in the constructor object (like you did in login)
  toggleLogin(){
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    })
  }
  render() {
    return (
      <div className="App">
        {/* header component */}
        <HeaderBar loggedIn={this.state.isLoggedIn}/>
        {/* React Reoutes for components. This is coming from the navbar */}
         <Switch>
                    <Route exact path="/" component={ () => {<Home isLoggedIn={this.state.isLoggedIn} updateLoginStatus={this.toggleLogin} />} />
                    <Route path="/AroundMe" component={BRAroundMe} />
                    <Route path="/AddBR" component={AddBR} />
                    <Route path="/Profile" component={Profile} />
                    <Redirect to="/" />

          </Switch>
        {/* NavBar for views */}
        <NavBar />
      </div>
    )
  }
}


export default App