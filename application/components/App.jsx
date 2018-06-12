import React from 'react';
import {
    HashRouter,
    Route,
    Switch,
    NavLink
} from 'react-router-dom';
import HomePage from "./home/homePage.jsx";
import AboutPage from "./about/aboutPage.jsx";
import Navigation from "./Navigation.jsx";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap';


const activeStyle = { backgroundColor:'green'};



class App extends React.Component {
    render() {
        return (<div>
            <p className={Jumbotron}>Header tu bedzie
                sadfsdfas</p>
            <HashRouter>
                <div>
                    <Navigation/>
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route path='/about' component={AboutPage} />
                    </Switch>
                </div>
            </HashRouter>
        </div>)
    }
}

export default App;