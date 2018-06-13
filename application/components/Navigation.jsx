import React from "react";
import {NavLink} from "react-router-dom";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem} from 'reactstrap';

class Navigation extends React.Component {
    render() {
        return (
            <div>
                <Navbar color="light" light>
                    <NavbarBrand href="/">App</NavbarBrand>
                    <Nav className="mr-auto">
                        <NavItem className="mr-2">
                            <NavLink exact to="/">HomePage</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/about">AboutPage</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )}
}

export default Navigation;