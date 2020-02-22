import React,{ Component } from 'react';
import { Nav } from 'react-bootstrap';

export class Navigation extends Component {

    render() {
        return (

            <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/lessons">Lessons</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/progress" eventKey="link-1">Your progress</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/catalog" eventKey="link-2">Catalog</Nav.Link>
                </Nav.Item>
            </Nav>
        );
    }
}
