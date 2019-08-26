import React, { Component } from 'react';
import userService from './services/user.service';
import { Tabs, Tab, Col, Row } from 'react-bootstrap';
import { Fab } from '@material-ui/core';
import { PersonSharp, EmailSharp, SentimentDissatisfiedSharp, EditSharp, CheckCircleSharp } from '@material-ui/icons'
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';
import { simpleValidateScheme } from './models/user';


export class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            tab: 0,
            logged: false,
            edit: false
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
    send(values, { setSubmitting, setErrors, setStatus, resetForm }) {
        userService.update(this.state.user._id, values)
            .then((res) => res.json())
            .then(user => {
                resetForm({
                    name: user.name,
                    email: user.email,
                    age: user.age
                });
                setStatus({ success: true })
                this.setState({
                    user,
                    edit: false
                })
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <Row className="d-flex justify-content-center my-3">
                <Col md={6}>
                    <h1>Profile</h1>
                    {this.state.logged ?
                        <div>

                            <Tabs defaultActiveKey="profile" id="noanim-tab-example">
                                <Tab eventKey="profile" title="Profile">

                                    <Formik
                                        initialValues={{
                                            name: this.state.user.name,
                                            email: this.state.user.email,
                                            age: this.state.user.age
                                        }}
                                        validationSchema={simpleValidateScheme}
                                        onSubmit={this.send.bind(this)}>
                                        <Form className="d-flex flex-column my-3">


                                            <Field
                                                type="text"
                                                className="my-3"
                                                name="name"
                                                component={TextField}
                                                InputProps={{
                                                    readOnly: !this.state.edit
                                                }}
                                            />



                                            <Field
                                                type="email"
                                                className="my-3"
                                                name="email"
                                                component={TextField}
                                                InputProps={{
                                                    readOnly: !this.state.edit,
                                                }}
                                            />



                                            <Field
                                                type="number"
                                                className="my-3"
                                                name="age"
                                                component={TextField}
                                                InputProps={{
                                                    readOnly: !this.state.edit,
                                                }}
                                            />

                                            <div className="d-flex justify-content-end">

                                                {this.state.edit ?
                                                    <Fab color="primary" aria-label="accept" size="small" type="submit" component="button">
                                                        <CheckCircleSharp />
                                                    </Fab>
                                                    :
                                                    <Fab color="secondary" aria-label="edit" size="small" onClick={() => this.setState({ edit: !this.state.edit })}>
                                                        <EditSharp />
                                                    </Fab>
                                                }

                                            </div>
                                        </Form>
                                    </Formik>
                                </Tab>



                                <Tab eventKey="purchases" title="Purchases">
                                    purchases
                            </Tab>
                            </Tabs>

                        </div>
                        : 'You Cannot Be Here'}
                </Col>
            </Row>
        )
    }
}

export default Profile
