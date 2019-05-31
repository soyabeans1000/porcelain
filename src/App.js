import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar/navbar'
import HeaderBar from './components/Header/header'
import CommentBox from './components/Comments/comments'
// import HeaderBar from './components/Header/header'


function App() {
  return (
    <div className="App">
      <HeaderBar name='Porcelain' />
      {/* <Mapof LocalArea /> */}
      <CommentBox name="Comments" />
      <NavBar name='Mike' />
    </div>
  );
}

export default App;
