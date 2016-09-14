import React, { PropTypes as T } from 'react';
import ReactDOM from 'react-dom';
import {Link, withRouter} from 'react-router';
import AuthService from '../utils/AuthService';
import NewSuggestion from './NewSuggestion';
import Login from './Login';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        NavbarStore.initAuthService(props.auth); // passing the AuthService to the Store
        this.state = NavbarStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount()  {
        NavbarStore.listen(this.onChange);

        $(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });
    }

    componentDidUpdate() {
        $('[data-toggle="tooltip"]').tooltip();
    }

    componentWillUnmount() {
        NavbarStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    newSuggestion(event) {
        this.refs.newSuggestionBtn.open();
    }

    processSearchQuery(event) {
        event.preventDefault();

        let searchQuery = ReactDOM.findDOMNode(this.refs.searchQuery).value.trim();

        if (searchQuery && searchQuery.length > 2) {
            this.props.router.push('/search/?q=' + encodeURIComponent(searchQuery));
        } else {
            NavbarActions.queryChanged(searchQuery);
            this.props.router.push('/');
        }

    }

    login(event) {
        event.preventDefault();
        this.refs.loginBtn.open();
    }

    logout(event) {
        event.preventDefault();
        this.props.auth.logout();
    }

    render() {

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
                        <span ref='triangles' className={'triangles animated ' + this.state.ajaxAnimationClass}>
                          <div className='tri invert'></div>
                          <div className='tri invert'></div>
                          <div className='tri'></div>
                          <div className='tri invert'></div>
                          <div className='tri invert'></div>
                          <div className='tri'></div>
                          <div className='tri invert'></div>
                          <div className='tri'></div>
                          <div className='tri invert'></div>
                        </span>
                        Suggestions
                    </Link>
                </div>
                <div id='navbar' className='navbar-collapse collapse'>
                    {
                        this.state.authenticated ? (
                            <button type="button" className="btn btn-success navbar-btn" onClick={this.newSuggestion.bind(this)}>New</button>
                        ) : (
                            <button type="button" className="btn btn-success navbar-btn disabled" data-toggle='tooltip' data-placement='bottom' title='Login or Sign up to post a new suggestion'>New</button>
                        )
                    }
                    {
                        this.state.authenticated ? (
                            <button type='button' className='btn btn-default navbar-btn navbar-right login' onClick={this.logout.bind(this)}>Logout</button>
                        ) : (
                            <button type='button' className='btn btn-default navbar-btn navbar-right login' onClick={this.login.bind(this)}>Login</button>
                        )
                    }
                    <form ref='searchForm' className='navbar-form navbar-right animated' onSubmit={this.processSearchQuery.bind(this)}>
                        <div className='input-group'>
                            <input type='text' className='form-control' placeholder='Search suggestions...' ref='searchQuery' value={this.state.searchQuery} onChange={this.processSearchQuery.bind(this)} />
                            <span className='input-group-btn'>
                                <button className='btn btn-default' onClick={this.processSearchQuery.bind(this)}>
                                    <span className='glyphicon glyphicon-search'></span>
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
                <NewSuggestion ref='newSuggestionBtn' auth={this.props.auth}/>
                <Login ref='loginBtn' auth={this.props.auth} />
            </nav>
        );
    }
}

Navbar.propTypes = {
    auth: T.instanceOf(AuthService)
};

export default withRouter(Navbar);