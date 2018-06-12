import React from "react";

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