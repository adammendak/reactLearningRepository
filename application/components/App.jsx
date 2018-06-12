import React from 'react';
import {
    HashRouter,
    Route,
    Switch,
    NavLink
} from 'react-router-dom';
import HomePage from "./home/homePage.jsx";
import AboutPage from "./about/aboutPage.jsx";

const activeStyle = { backgroundColor:'green'};

class Navigation extends React.Component {
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li>
                        <NavLink activeStyle={activeStyle} exact to="/">HomePage</NavLink> </li>
                    <li>
                        <NavLink activeStyle={activeStyle} to="/about">AboutPage</NavLink>
                    </li>
                </ul>
            </div>
        )}
}

class App extends React.Component {
    render() {
        return (<div>
            <p>Header tu bedzie
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