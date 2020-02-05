import React,{ Component } from 'react';
import {Link} from 'react-router-dom';

const navStyle = {
    color: 'black'
};

class Nav extends Component {

    render() {

        return (
            <nav>
                <ul className="nav-links">
                    <Link to="/login" style={navStyle}><h3>Login</h3></Link>
                    <Link to="/users" style={navStyle}><h3>Users</h3></Link>
                </ul>
            </nav>
        );
    }
}

export default Nav;
