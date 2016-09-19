import { auth } from '../utils/initializeAuth';
import * as actions from './actionsConst';

export function openLoginModal() {
    return {
        type:actions.OPEN_LOGIN
    }
}

export function openNewModal() {
    return {
        type:actions.OPEN_NEW
    }
}

export function openEditModal() {
    return {
        type:actions.OPEN_EDIT
    }
}

export function closeLoginModal() {
    return {
        type:actions.CLOSE_LOGIN
    }
}

export function closeNewModal() {
    return {
        type:actions.CLOSE_NEW
    }
}

export function closeEditModal() {
    return {
        type:actions.CLOSE_EDIT
    }
}

export function hasLoggedIn(profile) {
    return {
        type:actions.LOGIN,
        profile
    }
}

function needToLogout() {
    return {
        type: actions.LOGOUT
    }
}

export function logout() {
    return (dispatch) => {
        auth.logout();
        return dispatch(needToLogout());
    }
}