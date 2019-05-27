import React, { Component } from 'react'
import { Navbar, Nav, Container, Row } from 'react-bootstrap'
import { Switch, Route, Link, Redirect } from 'react-router-dom'

import AddBR from '../AddBR/AddBR'
import BRAroundMe from '../BRAroundMe/BRAroundMe'
import Home from '../Home/Home'
import Profile from '../Profile/Profile'


class NavBar extends Component {
    render() {
        return (
            <div className="App-intro">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/AroundMe" component={BRAroundMe} />
                    <Route path="/AddBR" component={AddBR} />
                    <Route path="/Profile" component={Profile} />
                    <Redirect to="/" />

                </Switch>

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