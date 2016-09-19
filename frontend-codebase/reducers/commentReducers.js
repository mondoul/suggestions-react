import { REQUEST_COMMENTS, RECEIVED_COMMENTS, COMMENT_ADDED, ADDING_COMMENT } from '../actions/actionsConst';

function comment(state = [], action) {
    switch (action.type) {
        case RECEIVED_COMMENTS:
            if (action.comments) {
                return (
                    [
                        ...action.comments,
                    ]
                );
            }
            break;
        case COMMENT_ADDED:
            if (action.comment){
                return (
                    [
                        action.comment,
                        ...state
                    ]
                );
            }
            break;
        default:
            return state;
    }
}

export function comments(state = { isFetching: false, isSaving: false, isSaved: false }, action) {
    switch (action.type) {
        case REQUEST_COMMENTS:
            return Object.assign({}, state, {
                isFetching: true,
                isSaved: false
            });
        case ADDING_COMMENT:
            return Object.assign({}, state, {
                isSaving: true,
                isSaved: false
            });
        case COMMENT_ADDED:return Object.assign({}, state, {
                [action.id]: comment(state[action.id], action),
                isFetching: false,
                isSaving: false,
                isSaved: true
            });
        case RECEIVED_COMMENTS:
            return Object.assign({}, state, {
                [action.id]: comment(state[action.id], action),
                isFetching: false,
                isSaving: false,
                isSaved: false
            });
        default:
            return state;
    }
}