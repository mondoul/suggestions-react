import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Suggestion from './components/Suggestion';
import SearchResults from './components/SearchResults';
import AuthService from './utils/AuthService';
import config from './config';

const auth = new AuthService(config.auth0ClientId, config.auth0Domain, config.callbackUrl);

// onEnter callback to validate authentication in private routes
const requireAuth = (nextState, replace) => {
    if (!auth.loggedIn()) {
        replace({ pathname: '/login' })
    }
};

// OnEnter for callback url to parse access_token
const parseAuthHash = (nextState, replace) => {
    if (nextState.location.hash) {
        var returnUrl = auth.parseHash(nextState.location.hash);
        replace({ pathname: returnUrl });
    }
};

export default (
    <Route path='/' component={App} auth={auth} onEnter={parseAuthHash}>
        <IndexRoute component={Home}/>
        <Route path='suggestion/:id' component={Suggestion} />
        <Route path='search/:term' component={SearchResults} />
    </Route>
);