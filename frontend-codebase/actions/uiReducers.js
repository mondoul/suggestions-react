import { OPEN_LOGIN, CLOSE_LOGIN, LOGIN, LOGOUT, OPEN_NEW, CLOSE_NEW } from './uiActions';
import { ADDING_SUGGESTION, ADDED_SUGGESTION } from './suggestionActions';

export function uiAuth(state = {
    showLogin: false,
    showNew: false,
    isAuthenticated: false,
    addingSuggestionPending: false
}, action) {
    switch (action.type) {
        case OPEN_LOGIN:
            return Object.assign({}, state, {
                showLogin: true
            });
        case CLOSE_LOGIN:
            return Object.assign({}, state, {
                showLogin: false
            });
        case LOGIN:
            return Object.assign({}, state, {
                isAuthenticated: true
            });
        case LOGOUT:
            return Object.assign({}, state, {
                isAuthenticated: false
            });
        case OPEN_NEW:
            return Object.assign({}, state, {
                showNew: true
            });
        case CLOSE_NEW:
            return Object.assign({}, state, {
                showNew: false
            });
        case ADDING_SUGGESTION:
            return Object.assign({}, state, {
                addingSuggestionPending: true
            });
        case ADDED_SUGGESTION:
            return Object.assign({}, state, {
                addingSuggestionPending: false
            });
        default:
            return state;
    }
}