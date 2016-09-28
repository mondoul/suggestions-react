import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Modal from '../components/Modal';
import Login from '../components/Login';
import EditSuggestion from '../components/EditSuggestion';
import SearchBar from '../components/SearchBar';
import { openLoginModal, closeLoginModal, openNewModal, closeNewModal, logout } from '../actions/uiActions';
import { queryUpdated, search } from '../actions/searchActions';
import { createSuggestion } from '../actions/suggestionActions';
import AuthService from '../utils/AuthService';

class Navbar extends Component {

    componentDidMount() {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });
    }

    componentDidUpdate() {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });
    }

    render() {

        const { onLogoutClick, onLoginClick, onModalClose, onNewModalOpen, onNewModalClose,
                showLogin, showNew, auth, isAuthenticated, query, onSearch,
                savingSuggestionPending, handleSubmit, isFetching} = this.props;

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
                        <button type='button' className='btn btn-default navbar-btn navbar-right pull-right login' onClick={onLogoutClick}>Sign out</button>
                    }
                    {
                        !isAuthenticated &&
                        <button type='button' className='btn btn-default navbar-btn navbar-right pull-right login' onClick={onLoginClick}>Sign in</button>
                    }
                    <SearchBar query={query} onSearch={onSearch} isFetching={isFetching}/>
                </div>
                <Modal close={onModalClose} showModal={showLogin} title='Sign-in / Sign-up'>
                    <Login auth={auth} />
                </Modal>
                <Modal title='Create a new Suggestion' showModal={showNew} close={onNewModalClose}>
                    <EditSuggestion savingSuggestionPending={savingSuggestionPending} cancel={onNewModalClose} handleSubmit={handleSubmit}/>
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
        onSearch: (event) => {
            event.preventDefault();
            let query = event.currentTarget.value || '';
            dispatch(queryUpdated(query));
            if (query.length > 2) {
                dispatch(search(query));
            } else {
                dispatch(push('/'));
            }
        },
        handleSubmit: (title, content, isAnonymous) => {
            if (title && content) {
                dispatch(createSuggestion(title, content, isAnonymous))
            }
        },
    }
}

function mapStateToProps(state) {
    const { showLogin, showNew, isAuthenticated, savingSuggestionPending } = state.ui;
    const { query, isFetching } = state.search;
    return {
        showLogin,
        showNew,
        isAuthenticated,
        savingSuggestionPending,
        query,
        isFetching
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);