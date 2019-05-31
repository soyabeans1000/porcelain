import React, { Component } from 'react'
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
         {this.children}
        {/* NavBar for views */}
        <NavBar />
      </div>
    )
  }
}


export default App