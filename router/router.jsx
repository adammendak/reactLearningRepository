import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class Main extends React.Component {
    render() {
        return(
        <div>
            <h1>Hello, World!</h1>
            <Link to="/contact">Go to contact</Link>
        </div>
        )
    }
}

class Contact extends React.Component {
    render() {
        return (
        <div>
            <h1>Contact us at contact@example.com</h1>
            <Link to="/">Home</Link>
        </div>
        )
    }
}

class NotFound extends React.Component {
    render() {
        return <h1>404 : not found</h1>
    }
}

class Navigation extends React.Component {
    render() {
    return (
        <div>
            <h1>App</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link> </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/userInfo/1">go to user 1 </Link>
                </li>
            </ul>
        </div>
    )}
}

class UserInfo extends React.Component {
    render() {
        return (
            <h1>
                Info about User with ID:
                {this.props.match.params.userId}
            </h1>
        )
    }
}

class App extends React.Component {
    render() {
        return (
        <div>
            <HashRouter>
                <div>
                    <Navigation/>
                    <Switch>
                        <Route exact path='/' component={Main} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/userInfo/:userId' component={UserInfo}/>
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </HashRouter>
        </div>
        )
    }
}

    ReactDOM.render(
    <App />,
    document.getElementById('app')
);