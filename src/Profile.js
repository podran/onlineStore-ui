import React, { Component } from 'react'

export class Profile extends Component {
    componentDidMount() {
        const token = document.cookie.split('user=')[1];
        fetch('http://localhost:9000/api/user/me', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: token
            }
        })
        .then(res => res.json())
        .then(user => console.log(user));
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Profile
