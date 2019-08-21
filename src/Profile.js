import React, { Component } from 'react';
import userService from './services/user.service'

export class Profile extends Component {
    componentDidMount() {
        userService
            .me()
            .then(res => res.json())
            .then(user => console.log(user))
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Profile
