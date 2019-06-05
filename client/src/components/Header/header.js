import React from 'react'
import { Navbar } from 'react-bootstrap'
import {Button} from 'reactstrap'
import Logo from '../../images/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const style = {
    logo: 
    {
    width: 'auto',
    height: '50px',     
    }
    
}

const element = <FontAwesomeIcon icon={faSignOutAlt} />

const HeaderBar = (props) => (
    <>
    <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="#home">Porcelain</Navbar.Brand>
       {props.loggedIn ? <Button className="ml-auto" outline color="secondary" onClick={_=>{
           props.updateLoginStatus()
           localStorage.removeItem('userId')
           }}>{element}</Button> : null } 
         
   
  </Navbar.Collapse>
</Navbar>


    

   
  


       
      
     

    </>
        )


export default HeaderBar
