import { OPEN_LOGIN, CLOSE_LOGIN, LOGIN, LOGOUT } from './uiActions';

export function uiAuth(state = { showLogin: false, isAuthenticated: false }, action) {
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
        default:
            return state;
    }
}