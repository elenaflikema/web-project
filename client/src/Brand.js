import React from 'react';
import { Navbar } from "react-bootstrap";
import './css/Main.css';

export function Brand() {
    return <Navbar.Brand className="brand" sticky="top" href="/">JF</Navbar.Brand>;
}