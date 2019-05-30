import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './App.css'

import NavBar from './components/NavBar/navbar'
import HeaderBar from './components/Header/header'
import AddBR from './components/AddBR/AddBR'
import BRAroundMe from './components/BRAroundMe/BRAroundMe'
import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'

const App = _ => 
  <div className="App">
    {/* header component */}
    <HeaderBar name='Porcelain' />
    {/* React Reoutes for components. This is coming from the navbar */}
    <Router>
      <Route exact path="/" component={_ => <Home />} />
      <Route path="/AddBR" component={_ => <AddBR />} />
      <Route path="/AroundMe" component={_ => <BRAroundMe/>} />
      <Route path="/Profile" component={_ => <Profile />} />
    </Router>
    {/* NavBar for views */}
    <NavBar />
  </div>


export default App