import React, {Component} from 'react';
import './css/Main.css';
import {Navbar} from "react-bootstrap";
import LoginPopup from './LoginPopup';

class Header extends Component {

    render() {
        return (
            <Navbar className="header">
                <Navbar.Brand href="#home">Welcome to Virtual English Class</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    <LoginPopup />
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;