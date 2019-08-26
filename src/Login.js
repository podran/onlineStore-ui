import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import UserService from './services/user.service';
import cookie from 'react-cookies';


export class Login extends Component {
    
    send(values) {
        const twoWeeksTime = 60*60*24*14;
        UserService
            .login(values)
            .then((res) => res.json())
            .then(res => {
                cookie.save('user', res.token, { path: '/', maxAge: twoWeeksTime })
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
                        <Field type="email" name="email" placeholder="Enter email" />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div>
                        <Field type="password" name="password" placeholder="Enter password" />
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
