import React,{ Component } from 'react';

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

