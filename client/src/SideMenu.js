import React, { Component } from 'react';

import './css/SideMenu.scss';
import './css/Button.scss';

export default class SideMenu extends Component {
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
            <div ref={this.wrapperRef} className="wrapper">
                <div className="nav">
                    <button
                        className="nav__button Button"
                        onClick={() => this.handleClick()}
                    >
                        {'<'}
                    </button>
                    <div className="nav__body">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}