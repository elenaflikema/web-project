import React,{ Component } from 'react';
import Navigation from './Navigation';
import UsersList from './UsersList';
import Login from './Login';
import ItemDetail from './ItemDetail';

import './Main.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Main extends Component {

    render() {
        return (
            <Router>
                <Navigation/>
                <React.Fragment>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/users" exact component={UsersList} />
                        <Route path="/users/:id" component={ItemDetail}/>
                    </Switch>
                </React.Fragment>
            </Router>
        );
    }
}

const Home = () => {
    return <div>Home page</div>;
};

export default Main;
