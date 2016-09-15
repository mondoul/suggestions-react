import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import suggestionsByFilter from './reducers';

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState, browserHistory) {
    return createStore(
        suggestionsByFilter,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
            routerMiddleware(browserHistory)
        )
    );
};