import React from 'react';
import {
    HashRouter,
    BrowserRouter,
    Route,
    Switch,
    NavLink
} from 'react-router-dom';
import HomePage from "./home/homePage.jsx";
import AboutPage from "./about/aboutPage.jsx";
import Navigation from "./Navigation.jsx";
import {Button} from 'reactstrap';

class App extends React.Component {
    render() {
        return (<div>
            <p>Header tu bedzie</p>
            <BrowserRouter>
                <div>
                    <Navigation/>
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route path='/about' component={AboutPage} />
                    </Switch>
                </div>
            </BrowserRouter>
            <Button color="danger">test bootstrap button</Button>
        </div>)
    }
}

export default App;