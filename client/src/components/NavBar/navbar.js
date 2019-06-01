
import React, { Component } from 'react'
import { Navbar, Nav, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


class NavBar extends Component {
    render() {
        return (
            <div className="App-intro">
                <Navbar bg="light" expand="lg" fixed="bottom">
                    {/* <Navbar.Brand href="#home">{props.name}</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Container>
                                <Row>
                                    {/* NavBar links  */}
                                    <Nav.Link> <Link to="/AroundMe">Around Me</Link> </Nav.Link>
                                    <Nav.Link> <Link to="/AddBR">Add Bathroom</Link> </Nav.Link>
                                    <Nav.Link> <Link to="/Profile">Profile</Link> </Nav.Link>

                                </Row>
                            </Container>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        )
    }
}

export default NavBar;