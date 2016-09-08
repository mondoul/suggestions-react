import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Suggestion from './components/Suggestion';
import AuthService from './utils/AuthService';

const auth = new AuthService('ClohFBYJyM7q0Nc6y9tY5blht98wjaBw', 'suggestions.auth0.com','http://localhost:3000');

// onEnter callback to validate authentication in private routes
const requireAuth = (nextState, replace) => {
    if (!auth.loggedIn()) {
        replace({ pathname: '/login' })
    }
};

// OnEnter for callback url to parse access_token
const parseAuthHash = (nextState, replace) => {
    if (nextState.location.hash) {
        console.log('next state', JSON.stringify(nextState));
        var returnUrl = auth.parseHash(nextState.location.hash);
        replace({ pathname: returnUrl });
    }
};

export default (
    <Route path='/' component={App} auth={auth} onEnter={parseAuthHash}>
        <IndexRoute component={Home}/>
        <Route path='suggestion/:id' component={Suggestion} />
    </Route>
);