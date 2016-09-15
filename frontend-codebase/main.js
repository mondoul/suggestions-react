import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import configureStore from './actions/configureStore';
import { browserHistory } from 'react-router';

const store = configureStore({}, browserHistory);

render(
    <Root store={store}/>,
    document.querySelector('#app')
);

