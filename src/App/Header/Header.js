import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import './Header.scss';
import userService from '../../services/user.service';

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            me: {}
        }
    }
    componentDidMount() {
        userService
        .me()
        .then(res => res.json())
        .then(user => this.setState({
            me : user
        }))
        .catch(err => console.log(err));
    }
    render() {
        return (
            <header>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="d-flex justify-content-between">
                    <NavLink to="/" className="navbar-brand">Home</NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <NavLink to="/profile" className="nav nav-link">Profile</NavLink>
                            <NavLink to="/login" className="nav nav-link">Login</NavLink>
                            <NavLink to="/register" className="nav nav-link">Register</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {/* <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/profile">Profile</Link></li>

                </ul> */}
            </header>
        )
    }
}

export default Header
