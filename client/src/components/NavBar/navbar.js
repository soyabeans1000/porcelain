
import React, { Component } from 'react'
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaPlusSquare, FaLocationArrow, FaToilet } from 'react-icons/fa'
// import { FaLocationArrow } from 'react-icons/fa'




class NavBar extends Component {
    render() {
        return (
            <div className="App-intro">
                <Navbar expand="lg" fixed="bottom" >
                    {/* <Navbar.Brand href="#home">{props.name}</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav"  >
                        <Nav expand="lg" fixed="bottom" style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }} >
                            <Container >
                                <Row >
                                    
                                        {/* NavBar links  */}
                                       <Col> <Nav.Link> <Link to="/AroundMe">Around Me<FaLocationArrow /></Link> </Nav.Link></Col>
                                       <Col> <Nav.Link> <Link to="/AddBR">Add Bathroom<  FaPlusSquare /></Link> </Nav.Link></Col>
                                       <Col> <Nav.Link> <Link to="/Profile">Profile<FaToilet /></Link> </Nav.Link> </Col>
                                  
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