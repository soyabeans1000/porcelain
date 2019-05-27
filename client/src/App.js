import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar/navbar'
import HeaderBar from './components/Header/header'
import AddBR from './components/AddBR/AddBR'
import BRAroundMe from './components/BRAroundMe/BRAroundMe'
import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'



class App extends Component {
  render() {
    return (
      <div className="App">
        {/* header component */}
        <HeaderBar name='Porcelain' />
        {/* React Reoutes for components. This is coming from the navbar */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/AddBR" component={AddBR} />
          <Route path="/AroundMe" component={BRAroundMe} />
          <Route path="/Profile" component={Profile} />
        </Switch>
        {/* NavBar for views */}
        <NavBar />
      </div>
    )
  }
}

export default App;
