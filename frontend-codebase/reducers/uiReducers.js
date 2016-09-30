import { OPEN_LOGIN, CLOSE_LOGIN, LOGIN, LOGOUT, OPEN_NEW, CLOSE_NEW, OPEN_EDIT, CLOSE_EDIT,
        SAVING_SUGGESTION, SUGGESTION_SAVED, SAVING_CATEGORY, CATEGORY_SAVED,
        OPEN_NEW_CATEGORY, CLOSE_NEW_CATEGORY, SELECT_CATEGORY } from '../actions/actionsConst';

export function uiInteractions(state = {
    showLogin: false,
    showNew: false,
    showEdit: false,
    showNewCategory: false,
    isAuthenticated: false,
    savingSuggestionPending: false,
    savingCategoryPending: false,
    showDeleteConfirm: false,
    selectedCategory: null,
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
        case OPEN_NEW_CATEGORY: {
            return Object.assign({}, state, {
                showNewCategory: true
            });
        }
        case CLOSE_NEW_CATEGORY: {
            return Object.assign({}, state, {
                showNewCategory: false
            });
        }
        case SAVING_SUGGESTION:
            return Object.assign({}, state, {
                savingSuggestionPending: true
            });
        case SUGGESTION_SAVED:
            return Object.assign({}, state, {
                savingSuggestionPending: false
            });
        case SAVING_CATEGORY:
            return Object.assign({}, state, {
                savingCategoryPending: true
            });
        case CATEGORY_SAVED:
            return Object.assign({}, state, {
                savingCategoryPending: false
            });
        case SELECT_CATEGORY: {
            return Object.assign({}, state, {
                selectedCategory: action.categoryId
            });
        }
        default:
            return state;
    }
}