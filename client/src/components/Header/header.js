import React from 'react'
import { Navbar } from 'react-bootstrap'
import {Button} from 'reactstrap'
const HeaderBar = (props) => (
    <>
    <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="#home">Porcelain</Navbar.Brand>
       {props.loggedIn ? <Button outline color="secondary" onClick={console.log('click')}>Log Out</Button> : <Button outline color="secondary" onClick={console.log('click')}>Log In</Button> } 
    </Navbar>
    
    </>
        )


export default HeaderBar;