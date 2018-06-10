import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class Main extends React.Component { render() {
    return <h1>Hello, World!</h1>; }
}

class Contact extends React.Component {
    render() {
        return <h1>Contact us at contact@example.com</h1>;
    }
}

class App extends React.Component {
    render() {
        return <Main />;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);