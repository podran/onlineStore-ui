import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";


export class Header extends Component {
    render() {
        return (
                <header>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/profile">Profile</Link></li>

                    </ul>
                </header>
        )
    }
}

export default Header
