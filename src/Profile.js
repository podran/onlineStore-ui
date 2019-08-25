import React, { Component } from 'react';
import userService from './services/user.service';
import { Tabs, Tab, Col, Row } from 'react-bootstrap';
import { List, ListItem, ListItemText, Divider, Avatar, ListItemAvatar } from '@material-ui/core';
import {PersonSharp, EmailSharp, SentimentDissatisfiedSharp} from '@material-ui/icons'

export class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            tab: 0,
            logged: false
        }
    }
    componentDidMount() {
        userService
            .me()
            .then(res => res.json())
            .then(user => this.setState({
                user,
                logged: true
            }))
            .catch(err => {
                console.log(err);
                this.setState({
                    logged: false
                })       
            });
    }
    render() {
        return (
            <Row className="d-flex justify-content-center my-3">
                <Col md={6}>
                    <h1>Profile</h1>
                    {this.state.logged ? 
                    <Tabs defaultActiveKey="profile" id="noanim-tab-example">
                        <Tab eventKey="profile" title="Profile">
                            <List>
                                {this.state.user.name ? <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <PersonSharp />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={this.state.user.name} />

                                </ListItem> : ''}
                                <Divider variant="fullWidth" component="li" />
                                {this.state.user.email ? <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <EmailSharp />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={this.state.user.email} />

                                </ListItem> : ''}
                                <Divider variant="fullWidth" component="li" />
                                {this.state.user.age ? <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <SentimentDissatisfiedSharp />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={this.state.user.age} />

                                </ListItem> : ''}

                            </List>
                        </Tab>
                        <Tab eventKey="purchases" title="Purchases">
                            purchases
                        </Tab>
                    </Tabs>
                     : 'You Cannot Be Here'}
                </Col>
            </Row>
        )
    }
}

export default Profile
