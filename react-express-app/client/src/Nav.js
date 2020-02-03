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
                    <Link to="/shop" style={navStyle}><h3>Shop</h3></Link>
                </ul>
            </nav>
        );
    }

}

export default Nav;
