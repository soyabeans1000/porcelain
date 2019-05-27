import React from 'react'
import { Navbar } from 'react-bootstrap'

function HeaderBar(props) {
        return (
            <Navbar bg="light" expand="lg" fixed="top">
                <Navbar.Brand href="#home">{props.name}</Navbar.Brand>
            </Navbar>
    )
    }

    export default HeaderBar;