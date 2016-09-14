import React, { PropTypes as T } from 'react';
import ReactDOM from 'react-dom';
import AuthService from '../utils/AuthService';
import { Form, FormGroup, FormControl, ControlLabel, Button, ButtonToolbar } from 'react-bootstrap';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.auth.login({
            connection: 'Username-Password-Authentication',
            responseType: 'token',
            email: ReactDOM.findDOMNode(this.refs.email).value,
            password: ReactDOM.findDOMNode(this.refs.password).value
        }, function(err) {
            if (err) toastr.error("something went wrong: " + err.message);
        });
    }

    signUp(){
        // calls auth0 signup api, sending new account data
        this.props.auth.signup({
            connection: 'Username-Password-Authentication',
            responseType: 'token',
            email: ReactDOM.findDOMNode(this.refs.email).value,
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
                    <ControlLabel>E-mail</ControlLabel>
                    <FormControl type='email' ref='email' placeholder='email@example.com' required/>
                </FormGroup>
                <FormGroup controlId='password'>
                    <ControlLabel>Password</ControlLabel>
                    <FormControl type='password' ref='password' placeholder='Password' required/>
                </FormGroup>
                <ButtonToolbar>
                    <Button type='submit' bsStyle='primary'>Sign In</Button>
                    <Button onClick={this.signUp.bind(this)}>Sign Up</Button>
                    <Button bsStyle="link" onClick={this.googleLogin.bind(this)}>Login with Google</Button>
                </ButtonToolbar>
            </Form>
        );
    }
}

Login.propTypes = {
    auth: T.instanceOf(AuthService)
};

export default Login;
