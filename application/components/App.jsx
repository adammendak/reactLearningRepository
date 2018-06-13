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
import {Button, Container, Jumbotron, Row} from 'reactstrap';

class App extends React.Component {
    render() {
        return (<Container>
            <BrowserRouter>
                <div>
                    <Navigation/>
                    <Jumbotron>
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route path='/about' component={AboutPage} />
                    </Switch>
                    </Jumbotron>
                </div>
            </BrowserRouter>
            <Button color="danger">test bootstrap button</Button>
        </Container>)
    }
}

export default App;