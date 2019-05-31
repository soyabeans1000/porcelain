import React from 'react'
import { Navbar } from 'react-bootstrap'
import {Button} from 'reactstrap'
const HeaderBar = () => (
    <>
    <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="#home">Porcelain</Navbar.Brand>
       {this.props.loggedIn ? <Button outline color="secondary" onClick={this.props.handleLogoutClick}>Log Out</Button> : <Button outline color="secondary" onClick={this.props.handleLoginClick}>Log In</Button> } 
    </Navbar>
    
    </>
        )


export default HeaderBar;