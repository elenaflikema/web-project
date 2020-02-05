import React,{ Component } from 'react';
import { Input } from 'react-dom';

export default class Login extends Component {

    state = {
        auth: false
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const data = await fetch('/auth');
        const result = await data.json();
        this.setState({auth: result.auth});
    };

    render() {
        const { auth } = this.state;
        console.info(auth)
        return (
            <div>
                This is a login page
                <input type="text"/>
                <div>
                    {auth.toString()}
                </div>
            </div>

        );
    }

}

