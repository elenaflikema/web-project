import React,{ Component } from 'react';
import { Nav } from 'react-bootstrap';

class Navigation extends Component {


    render() {
        const { onTabChange, selectedTab } = this.props;

        console.info(selectedTab)
        return (
            <Nav justify variant="pills" activeKey={selectedTab} onSelect={onTabChange}>
                <Nav.Item>
                    <Nav.Link eventKey="login" href="/login" >
                        Login
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="users" href="/users">
                        Users
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="users" href="/users">
                        Contacts
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        );
    }
}

export default Navigation;
