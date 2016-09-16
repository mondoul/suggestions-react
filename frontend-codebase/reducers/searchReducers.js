import { QUERY_UPDATED, SEARCH_FINISHED, SEARCH_NO_RESULT, SEARCHING } from '../actions/actionsConst';

export function search(state = {
    query: '',
    isFetching: false,
    results: []
}, action) {
    switch (action.type) {
        case QUERY_UPDATED:
            return Object.assign({}, state, {
                query: action.query
            });
        case SEARCHING:
            return Object.assign({}, state, {
                isFetching: true
            });
        case SEARCH_NO_RESULT:
            return Object.assign({}, state, {
                isFetching: false,
                results: []
            });
        case SEARCH_FINISHED:
            return Object.assign({}, state, {
                isFetching: false,
                results: action.results
            });
        default:
            return state;
    }
}