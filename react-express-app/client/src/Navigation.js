import React,{ Component } from 'react';
import { Nav } from 'react-bootstrap';

class Navigation extends Component {

    render() {

        return (
            <Nav variant="tabs" defaultActiveKey="/login">
                <Nav.Item>
                    <Nav.Link href="/login" >
                        Login
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" href="/users">
                        Users
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        );
    }
}

export default Navigation;
