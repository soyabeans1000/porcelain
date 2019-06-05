
import React, { Component } from 'react'
import { Navbar, Nav, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaPlusSquare, FaLocationArrow, FaToilet } from 'react-icons/fa'
// import { FaLocationArrow } from 'react-icons/fa'




class NavBar extends Component {
    render() {
        return (
            <div className="App-intro">
                <Navbar expand="lg" fixed="bottom" style={{
                    flex: 3,
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }} >
                    {/* <Navbar.Brand href="#home">{props.name}</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav expand="lg" fixed="bottom" >
                            <Container>
                                <Row>
                                    {/* NavBar links  */}
                                    <Nav.Link> <Link  to="/AroundMe">Around Me<FaLocationArrow /></Link> </Nav.Link>
                                    <Nav.Link> <Link  to="/AddBR">Add Bathroom<  FaPlusSquare /></Link> </Nav.Link>
                                    <Nav.Link> <Link  to="/Profile">Profile<FaToilet /></Link> </Nav.Link>

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