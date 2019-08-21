import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validateScheme } from './models/user';
import UserService from './services/user.service'

export class Register extends Component {

    send(values) {
        UserService
        .create(values)
        .then(() => this.props.history.push('/login'))
        .catch(err => console.log(err));
    }

    render() {
        return (
            <Formik
                initialValues={{ name: '', email: '', age: '', password: '' }}
                validationSchema={validateScheme}
                onSubmit={this.send.bind(this)}>
                <Form>
                    <div>
                        <Field type="text" name="name" placeholder="Enter Name" />
                        <ErrorMessage name="name" component="div" />
                    </div>
                    <div>
                        <Field type="text" name="email" placeholder="Enter Email" />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div>
                        <Field type="number" name="age" placeholder="Enter Age" />
                        <ErrorMessage name="age" component="div" />
                    </div>
                    <div>
                        <Field type="password" name="password" placeholder="Enter Password" />
                        <ErrorMessage name="password" component="div" />
                    </div>
                    <div>
                        <input type="submit" />
                    </div>
                </Form>
            </Formik>
        )
    }
}

export default Register
