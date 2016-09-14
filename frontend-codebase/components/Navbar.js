import React, { Component, PropTypes } from 'react';
import {Link, withRouter} from 'react-router';
import { connect } from 'react-redux';
import Modal from './Modal';
import Login from './Login';
import { openLoginModal, closeLoginModal, logout } from '../actions/uiActions';
import AuthService from '../utils/AuthService';

class Navbar extends Component {


    render() {

        const { dispatch, showLogin, auth, isAuthenticated } = this.props;

        return (
            <nav className='navbar navbar-default navbar-static-top'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <Link to='/' className='navbar-brand'>
                        Suggestions
                    </Link>
                </div>
                <div id='navbar' className='navbar-collapse collapse'>
                    {
                        isAuthenticated &&
                        <button type='button' className='btn btn-default navbar-btn navbar-right login' onClick={() => dispatch(logout())}>Logout</button>
                    }
                    {
                        !isAuthenticated &&
                        <button type='button' className='btn btn-default navbar-btn navbar-right login' onClick={() => dispatch(openLoginModal())}>Login</button>
                    }
                </div>
                <Modal close={() => dispatch(closeLoginModal())} showModal={showLogin} title='Test Modal'>
                    <Login auth={auth} />
                </Modal>
            </nav>
        );
    }
}

Navbar.propTypes = {
    dispatch: PropTypes.func.isRequired,
    showLogin: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    auth: PropTypes.instanceOf(AuthService)
};

function mapStateToProps(state) {
    const { showLogin, isAuthenticated } = state.ui;
    return {
        showLogin,
        isAuthenticated
    };
}

export default connect(mapStateToProps)(Navbar);