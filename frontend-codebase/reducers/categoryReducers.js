import { REQUEST_CATEGORIES, RECEIVE_CATEGORIES } from '../actions/actionsConst';

export function categories(state = {
    isFetching: false,
    items: []
}, action) {
    switch(action.type) {
        case REQUEST_CATEGORIES:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_CATEGORIES:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.categories
            });
        default:
            return state;
    }
}