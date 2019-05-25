import React from 'react'
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'
import AddBR from '../AddBR/AddBR'
import BRAroundMe from '../BRAroundMe/BRAroundMe'
import Profile from '../Profile/Profile'
import FavoriteBR from '../FavoriteBR/FavoriteBR'
import OnThePot from '../OnThePot/OnThePot'

function NavBar(props) {
    return (
        <Navbar bg="light" expand="lg" fixed="bottom">
            {/* <Navbar.Brand href="#home">{props.name}</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Container>
                        <Row>
                            <BRAroundMe />
                            <Profile />
                            <AddBR />
                            <FavoriteBR />
                            <OnThePot />

                        </Row>
                    </Container>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;