import React,{ Component } from 'react';
import { Nav, FormControl, NavDropdown, Button, Navbar, Form } from 'react-bootstrap';

class Navigation extends Component {

    render() {
        return (
            <>
                <Navbar className="navbar" sticky="top" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/users">About Me</Nav.Link>
                            <Nav.Link href="/mission">My mission</Nav.Link>
                            <Nav.Link href="/reviews">Reviews</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                            <Nav className="mr-auto">
                                <NavDropdown title="Language" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Russian</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">French</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}

export default Navigation;
