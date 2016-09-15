import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import Home from './Home';
import Suggestion from './Suggestion';
import { auth } from '../utils/initializeAuth';
import { hasLoggedIn } from '../actions/uiActions';

// onEnter callback to validate authentication in private routes
const requireAuth = (nextState, replace) => {
    if (!auth.loggedIn()) {
        replace({ pathname: '/login' })
    }
};

// OnEnter for callback url to parse access_token
function parseAuthHash(store) {
  return (nextState, replace) => {
      if (nextState.location.hash) {
          var returnUrl = auth.parseHash(nextState.location.hash);
          if (auth.loggedIn()){
              store.dispatch(hasLoggedIn());
          }
          replace({ pathname: returnUrl });
      } else {
          if (auth.loggedIn()){
              store.dispatch(hasLoggedIn());
          }
      }
  };
};

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App} auth={auth} onEnter={parseAuthHash(store)}>>
                <IndexRoute component={Home}/>
                <Route path='suggestion/:suggestionId' component={Suggestion} />
            </Route>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;