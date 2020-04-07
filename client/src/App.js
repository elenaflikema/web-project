import React,{ Component } from 'react';
import LessonsList from './LessonsList';
import Login from './LoginPopup';
import LessonDetail from './LessonDetail';
import Header from './Header';
import { TestsList } from './TestsList'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <div className="mainContainer">
                <Router>
                    <Header/>
                    <React.Fragment className="block">
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/lessons" exact component={LessonsList} />
                            <Route path="/lessons/:id" component={LessonDetail}/>
                            <Route path="/progress" component={Login} />
                            <Route path="/tests" component={TestsList} />
                        </Switch>
                    </React.Fragment>
                </Router>
            </div>
        );
    }
}

const Home = () => {
    return <div>Home page</div>;
};

export default App;
