
import React, { Component } from 'react'
import { Navbar, Nav, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaToilet, FaPlus, FaCheckSquare } from "react-icons/fa";
import { GoPerson } from "react-icons/go";



class NavBar extends Component {
    handlestatus = _ => {
        if (localStorage.getItem('adminstatus') === 'true') {
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
                                    <Nav.Link> <Link to="/AroundMe"><FaToilet /></Link> </Nav.Link>
                                    <Nav.Link> <Link to="/AddBR"><FaPlus /></Link> </Nav.Link>
                                    <Nav.Link> <Link to="/Profile"><GoPerson /></Link> </Nav.Link>
                                    <Nav.Link> <Link to="/request"><FaCheckSquare /></Link> </Nav.Link>
                                </Row>
                            </Container>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>
            )
        } else {
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
                                    <Nav.Link> <Link to="/AroundMe"><FaToilet /></Link> </Nav.Link>
                                    <Nav.Link> <Link to="/AddBR"><FaPlus /></Link> </Nav.Link>
                                    <Nav.Link> <Link to="/Profile"><GoPerson /></Link> </Nav.Link>
                                </Row>
                            </Container>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            )
        }
    }

    render() {
        return (
            <div className="App-intro">
                {/* <Navbar bg="light" expand="lg" fixed="bottom">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Container>
                                <Row>
                                    <Nav.Link> <Link to="/AroundMe">Around Me</Link> </Nav.Link>
                                    <Nav.Link> <Link to="/AddBR">Add Bathroom</Link> </Nav.Link>
                                    <Nav.Link> <Link to="/Profile">Profile</Link> </Nav.Link>

                                </Row>
                            </Container>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar> */}
                {this.handlestatus()}
            </div>
        )
    }
}

export default NavBar;