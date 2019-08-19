import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validateScheme } from './models/user';

export class Login extends Component {

    send(values) {
        fetch('http://localhost:9000/api/user/login', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then(res => document.cookie = "user=" + res.token);
    }

    render() {
        return (
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={this.send.bind(this)}>
                <Form>
                    <div>
                        <Field type="text" name="email" placeholder="Enter email" />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div>
                        <Field type="text" name="password" placeholder="Enter password" />
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

export default Login
