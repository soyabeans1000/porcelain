import React from 'react'
import { Navbar } from 'react-bootstrap'
import {Button} from 'reactstrap'

const HeaderBar = (props) => (
    <>
    <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="#home">Porcelain</Navbar.Brand>
       {props.loggedIn ? <Button className="ml-auto" outline color="secondary" onClick={_=>{
           props.updateLoginStatus()
           localStorage.removeItem('userId')
           }}>Log Out</Button> : null } 
    </Navbar>
    
    </>
        )

export default HeaderBar;   