import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validateScheme } from './models/user';

export class Register extends Component {

    send(e) {
        e.preventDefault();
        fetch({
            method: 'PUT',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    render() {
        return (
            <Formik
                initialValues={{ name: '', email: '', age: '', password: '' }}
                validationSchema={validateScheme}>
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
