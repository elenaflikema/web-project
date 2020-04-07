import React,{ Component } from 'react';
import {Link} from 'react-router-dom';

export default class Navigation extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul onClick={() => this.props.onNavigate()}>
                <li>
                    <Link to="/blog">My Blog</Link>
                </li>
                <li>
                    <Link to="/tests">Tests</Link>
                </li>
                <li>
                    <Link to="/lessons">Lessons</Link>
                </li>
            </ul>
        );
    }
}
