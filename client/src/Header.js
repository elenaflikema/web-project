import React, {Component} from 'react';
import './css/Main.css';
import {Navbar, Button} from "react-bootstrap";
import Login from './Login';

class Header extends Component {

    render() {
        return (
            <Navbar className="header">
                <Navbar.Brand href="#home">Virtual English class</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    <Login />
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;