import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import suggestionsByFilter from './reducers';

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
    return createStore(
        suggestionsByFilter,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    );
};