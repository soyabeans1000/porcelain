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
  render() {
    return (
      <div className="App">
        {/* header component */}
        <HeaderBar />
        {/* React Reoutes for components. This is coming from the navbar */}
         <Switch>
                    <Route exact path="/" component={Home} />
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