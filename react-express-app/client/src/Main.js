import React,{ Component } from 'react';
import Nav from './Nav';
import Shop from './Shop';
import Login from './Login';
import ItemDetail from './ItemDetail';

import './Main.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Main extends Component {

    render() {
        return (
            <Router>
                <Nav/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/shop" exact component={Shop} />
                    <Route path="/shop/:id" component={ItemDetail}/>
                </Switch>
            </Router>
        );
    }
}

const Home = () => {
    return <div>Home page</div>;
};

export default Main;
