// @ts-ignore
import React,{ Component } from 'react';
import { Navigation } from './Navigation';
import LessonsList from './LessonsList';
import Login from './LoginPopup';
import ItemDetail from './ItemDetail';
import { Container } from 'react-bootstrap';
import Header from './Header';

import './css/Main.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Main extends Component {

    render() {
        return (
            <div className="main" >
                <Header />
                <Container>
                    <Router>
                        <Navigation/>
                        <React.Fragment>
                            <Switch>
                                <Route path="/" exact component={Home} />
                                <Route path="/lessons" exact component={LessonsList} />
                                <Route path="/lessons/:id" component={ItemDetail}/>
                                <Route path="/progress" component={Login} />
                            </Switch>
                        </React.Fragment>
                    </Router>
                </Container>
            </div>
        );
    }
}

const Home = () => {
    return <div>Home page</div>;
};

export default Main;
