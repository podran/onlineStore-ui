import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import UserService from './services/user.service';


export class Login extends Component {
    
    send(values) {
        UserService
            .login(values)
            .then((res) => res.json())
            .then(res => {
                document.cookie = "user=" + res.token;
                this.props.history.push('/');
            })
            .catch(err => console.log(err));
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
