import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

import "./css/CustomStyle.css";

class CustomNavigation extends Component {

    render() {
        return (
            <div className="flex-container">
                <div className="nav-link flex-item"><Link to="/users">ABOUT ME</Link></div>
                <div className="nav-link flex-item"><Link to="/mission">MY MISSION</Link></div>
                <div className="nav-link flex-item"><Link to="/reviews">REVIEW</Link></div>
            </div>
        );
    }
}

export default CustomNavigation;
