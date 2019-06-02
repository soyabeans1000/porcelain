import React from 'react'
import { Navbar, Button } from 'react-bootstrap'
import logo from '../../images/Logo.png'


const HeaderBar = (props) => (
    <>
         <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="#home"><img src={logo} className="main_logo"></img></Navbar.Brand>
       {props.loggedIn ? <Button outline color="secondary" onClick={_=>{
           props.updateLoginStatus()
           localStorage.removeItem('userId')
           }}>Log Out</Button> : null } 
    </Navbar>
      
    </>
        )

export default HeaderBar;   





// <Navbar bg="light" expand="lg" fixed="top">
//         <Navbar.Brand href="#home">Porcelain</Navbar.Brand>
//        {props.loggedIn ? <Button outline color="secondary" onClick={_=>{
//            props.updateLoginStatus()
//            localStorage.removeItem('userId')
//            }} className="navbar-right">Log Out</Button> : null } 
//     </Navbar>
