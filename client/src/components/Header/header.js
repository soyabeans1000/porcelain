import React from 'react'
import { Navbar } from 'react-bootstrap'
import {Button} from 'reactstrap'
import { IoIosExit } from "react-icons/io";


const HeaderBar = (props) => (
    <>
    <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="#home">Porcelain</Navbar.Brand>
       {props.loggedIn ? <Button outline color="secondary" onClick={_=>{
           props.updateAdmin()
           props.updateLoginStatus()
           localStorage.removeItem('userId')
           }}><IoIosExit /></Button> : null } 
    </Navbar>
    
    </>
        )

export default HeaderBar;   