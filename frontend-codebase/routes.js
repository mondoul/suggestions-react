import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Suggestion from './components/Suggestion';

export default (
  <Route component={App}>
      <Route path='/' component={Home} />
      <Route path='/suggestion/:id' component={Suggestion} />
  </Route>
);