import React, { Component } from 'react';
import LoginPopup from './LoginPopup';
import { Link } from 'react-router-dom';
import  Navigation from './Navigation';

import './css/Main.scss';
import './css/SideMenu.scss';


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
    }

    handleClick() {
        const wrapper = this.wrapperRef.current;
        wrapper.classList.toggle('is-nav-open');
    }

    render() {
        return (
            <>
                <header className="mainHeader">
                    <div>
                        <button
                            className="Button"
                            onClick={() => this.handleClick()}
                        >
                            {'<'}
                        </button>
                        <Link to="/" className="brandName">
                            English Class
                        </Link>
                    </div>
                    <nav>
                        <LoginPopup />
                    </nav>
                </header>
                <div ref={this.wrapperRef} className="wrapper">
                    <div className="nav">
                        <div className="nav__body">
                            <Navigation
                                onNavigate={() => this.handleClick()}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}