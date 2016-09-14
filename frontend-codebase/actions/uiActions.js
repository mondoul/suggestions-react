export const OPEN_LOGIN = 'OPEN_LOGIN';
export const CLOSE_LOGIN = 'CLOSE_LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGIN = 'LOGIN';

import { auth } from '../utils/initializeAuth';

export function openLoginModal() {
    return {
        type:OPEN_LOGIN
    }
}

export function closeLoginModal() {
    return {
        type:CLOSE_LOGIN
    }
}

export function hasLoggedIn() {
    return {
        type:LOGIN
    }
}

function needToLogout() {
    return {
        type: LOGOUT
    }
}

export function logout() {
    return (dispatch) => {
        auth.logout();
        return dispatch(needToLogout());
    }
}