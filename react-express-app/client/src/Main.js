import React,{ Component } from 'react';
import CustomNavigation from './CustomNavigation';
import UsersList from './UsersList';
import Login from './Login';
import ItemDetail from './ItemDetail';
import { Container } from 'react-bootstrap';
import { Header } from './Header';
import './css/Main.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Main extends Component {

    render() {
        return (
            <Container className="main">
                <Header />
                <Router>
                    <CustomNavigation/>
                    <React.Fragment>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/login" component={Login} />
                            <Route path="/users" exact component={UsersList} />
                            <Route path="/users/:id" component={ItemDetail}/>
                        </Switch>
                    </React.Fragment>
                </Router>
            </Container>
        );
    }
}

const Home = () => {
    return <div>Home page</div>;
};

export default Main;
