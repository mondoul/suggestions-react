import { OPEN_LOGIN, CLOSE_LOGIN, LOGIN, LOGOUT, OPEN_NEW, CLOSE_NEW, OPEN_EDIT, CLOSE_EDIT,
        SAVING_SUGGESTION, SUGGESTION_SAVED } from '../actions/actionsConst';

export function uiInteractions(state = {
    showLogin: false,
    showNew: false,
    showEdit: false,
    isAuthenticated: false,
    savingSuggestionPending: false,
    showDeleteConfirm: false,
    profile: {}
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
                isAuthenticated: true,
                profile: action.profile
            });
        case LOGOUT:
            return Object.assign({}, state, {
                isAuthenticated: false,
                profile: {}
            });
        case OPEN_NEW:
            return Object.assign({}, state, {
                showNew: true
            });
        case CLOSE_NEW:
            return Object.assign({}, state, {
                showNew: false
            });
        case OPEN_EDIT:
            return Object.assign({}, state, {
                showEdit: true
            });
        case CLOSE_EDIT:
            return Object.assign({}, state, {
                showEdit: false
            });
        case SAVING_SUGGESTION:
            return Object.assign({}, state, {
                savingSuggestionPending: true
            });
        case SUGGESTION_SAVED:
            return Object.assign({}, state, {
                savingSuggestionPending: false
            });
        default:
            return state;
    }
}