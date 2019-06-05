
import React, { Component } from 'react'
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaToilet, FaPlus, FaCheckSquare } from "react-icons/fa"
import { GoPerson } from "react-icons/go"
import './NavBar.css'



class NavBar extends Component {
    handlestatus = _ => {
        if (localStorage.getItem('adminstatus') === 'true') {
            return (
                <div className="App-intro">
                <Navbar bg="light" expand="lg" fixed="bottom">
                        <Nav className="mr-auto">
                            <Container>
                                <Row>
                                    <Col><Nav.Link> <Link to="/AroundMe"><FaToilet className="navicon"/></Link> </Nav.Link></Col>
                                    <Col><Nav.Link> <Link to="/AddBR"><FaPlus className="navicon"/></Link> </Nav.Link></Col>
                                    <Col><Nav.Link> <Link to="/Profile"><GoPerson className="navicon"/></Link> </Nav.Link></Col>
                                    <Col><Nav.Link> <Link to="/request"><FaCheckSquare className="navicon"/></Link> </Nav.Link></Col>
                                </Row>
                            </Container>
                        </Nav>
                </Navbar>

            </div>
            )
        } else {
            return (
                <div className="App-intro">
                <Navbar bg="light" expand="lg" fixed="bottom">
                        <Nav className="mr-auto">
                            <Container className="container">
                                <Row>
                                    <Col><Nav.Link> <Link to="/AroundMe"><FaToilet className="navicon"/></Link> </Nav.Link></Col>
                                    <Col><Nav.Link> <Link to="/AddBR"><FaPlus className="navicon"/></Link> </Nav.Link></Col>
                                    <Col><Nav.Link> <Link to="/Profile"><GoPerson className="navicon"/></Link> </Nav.Link></Col>
                                </Row>
                            </Container>
                        </Nav>
                </Navbar>
            </div>
            )
        }
    }

    render() {
        return (
            <div className="App-intro">
                {this.handlestatus()}
            </div>
        )
    }
}

export default NavBar;