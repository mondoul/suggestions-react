import React, { PropTypes as T } from 'react';
import ReactDOM from 'react-dom';
import AuthService from '../utils/AuthService';
import { Form, FormGroup, FormControl, ControlLabel, Button, ButtonToolbar } from 'react-bootstrap';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    isValidEmail(email) {
        return email.indexOf('@valtech.com') > -1;
    }

    handleSubmit(e) {
        e.preventDefault();
        let email = ReactDOM.findDOMNode(this.refs.email).value;
        if (!this.isValidEmail(email)) {
            toastr.error("Please enter a valid @valtech.com email address.");
            return;
        }
        this.props.auth.login({
            connection: 'Username-Password-Authentication',
            responseType: 'token',
            email: email,
            password: ReactDOM.findDOMNode(this.refs.password).value
        }, function(err) {
            if (err) toastr.error("something went wrong: " + err.message);
        });
    }

    signUp() {
        // calls auth0 signup api, sending new account data
        let email = ReactDOM.findDOMNode(this.refs.email).value;
        if (!this.isValidEmail(email)) {
            toastr.error("Please enter a valid @valtech.com email address.");
            return;
        }
        this.props.auth.signup({
            connection: 'Username-Password-Authentication',
            responseType: 'token',
            email: email,
            password: ReactDOM.findDOMNode(this.refs.password).value
        }, function(err) {
            if (err) toastr.error("something went wrong: " + err.message);
        });
    }

    googleLogin(){
        this.props.auth.login({
            connection: 'google-oauth2'
        }, function(err) {
            if (err) toastr.error("something went wrong: " + err.message);
        });
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit.bind(this)} className='form-horizontal login-form'>
                <FormGroup controlId='email'>
                    <ControlLabel className='col-sm-2'>E-mail</ControlLabel>
                    <div className='col-sm-10'>
                        <FormControl type='email' ref='email' placeholder='email@valtech.com' required/>
                    </div>
                </FormGroup>
                <FormGroup controlId='password'>
                    <ControlLabel className='col-sm-2'>Password</ControlLabel>
                    <div className='col-sm-10'>
                        <FormControl type='password' ref='password' placeholder='Password' required/>
                    </div>
                </FormGroup>
                <ButtonToolbar>
                    <Button type='submit' bsStyle='primary'>Sign In</Button>
                    <Button onClick={this.signUp.bind(this)}>Sign Up</Button>
                </ButtonToolbar>
            </Form>
        );
    }
}

Login.propTypes = {
    auth: T.instanceOf(AuthService)
};

export default Login;
