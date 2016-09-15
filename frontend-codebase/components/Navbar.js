import React, { Component, PropTypes } from 'react';
import {Link, withRouter} from 'react-router';
import { connect } from 'react-redux';
import Modal from './Modal';
import Login from './Login';
import NewSuggestion from './NewSuggestion';
import SearchBar from './SearchBar';
import { openLoginModal, closeLoginModal, openNewModal, closeNewModal, logout } from '../actions/uiActions';
import AuthService from '../utils/AuthService';

class Navbar extends Component {

    onSearch(e) {
        console.log('onSearch', e.currentTarget);
    }

    render() {

        const { onLogoutClick, onLoginClick, onModalClose, onNewModalOpen, onNewModalClose, showLogin, showNew, auth, isAuthenticated } = this.props;

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
                        <button type="button" className="btn btn-success navbar-btn" onClick={onNewModalOpen}>New</button>
                    }
                    {
                        !isAuthenticated &&
                        <button type="button" className="btn btn-success navbar-btn disabled" data-toggle='tooltip' data-placement='bottom' title='Login or Sign up to post a new suggestion'>New</button>
                    }
                    {
                        isAuthenticated &&
                        <button type='button' className='btn btn-default navbar-btn navbar-right login' onClick={onLogoutClick}>Sign out</button>
                    }
                    {
                        !isAuthenticated &&
                        <button type='button' className='btn btn-default navbar-btn navbar-right login' onClick={onLoginClick}>Sign in</button>
                    }
                    <SearchBar onSearch={this.onSearch} searchQuery={this.query}/>
                </div>
                <Modal close={onModalClose} showModal={showLogin} title='Sign-in / Sign-up'>
                    <Login auth={auth} />
                </Modal>
                <Modal title='Create a new Suggestion' showModal={showNew} close={onNewModalClose}>
                    <NewSuggestion/>
                </Modal>
            </nav>
        );
    }
}

Navbar.propTypes = {
    onLoginClick: PropTypes.func.isRequired,
    onLogoutClick: PropTypes.func.isRequired,
    onModalClose: PropTypes.func.isRequired,
    onNewModalOpen: PropTypes.func.isRequired,
    onNewModalClose: PropTypes.func.isRequired,
    showLogin: PropTypes.bool.isRequired,
    showNew: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    auth: PropTypes.instanceOf(AuthService)
};

function mapDispatchToProps(dispatch) {
    return {
        onLogoutClick: () => dispatch(logout()),
        onLoginClick: () => dispatch(openLoginModal()),
        onModalClose: () => dispatch(closeLoginModal()),
        onNewModalOpen: () => dispatch(openNewModal()),
        onNewModalClose: () => dispatch(closeNewModal()),
        onSearch: (query) => dispatch(searchSuggestions(query))
    }
}

function mapStateToProps(state) {
    const { showLogin, showNew, isAuthenticated } = state.ui;
    return {
        showLogin,
        showNew,
        isAuthenticated
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);