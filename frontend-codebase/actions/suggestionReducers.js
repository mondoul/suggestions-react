import {
    REQUEST_SUGGESTIONS, RECEIVE_SUGGESTIONS, RECEIVE_A_SUGGESTION, REQUEST_A_SUGGESTION,
    LIKE_SUGGESTION, DISLIKE_SUGGESTION
} from './suggestionActions';

export function suggestions(state = {
    isFetching: false,
    items: []
}, action) {
    switch (action.type) {
        case REQUEST_SUGGESTIONS:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case RECEIVE_SUGGESTIONS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.suggestions
            });
        case REQUEST_A_SUGGESTION: {
            return Object.assign({}, state, {
                isFetching: true,
            });
        }
        case RECEIVE_A_SUGGESTION: {
            return Object.assign({}, state, {
                items: [
                    action.result.suggestion,
                    ...state.items
                ]
            });
        }
        case LIKE_SUGGESTION: {
            return Object.assign({}, state, {
                items: state.items.map((item, i) => {
                    if (item._id === action.id){
                        let likes = item.likes + 1;
                        return Object.assign({}, item, {
                            likes
                        });
                    }
                    return item;
                })
            });
        }
        case DISLIKE_SUGGESTION: {
            return Object.assign({}, state, {
                items: state.items.map((item, i) => {
                    if (item._id === action.id){
                        let likes = item.likes - 1;
                        return Object.assign({}, item, {
                            likes
                        });
                    }
                    return item;
                })
            });
        }
        default:
            return state;
    }
}

export function suggestionsByFilter(state = {}, action) {
    switch(action.type) {
        case REQUEST_SUGGESTIONS:
        case RECEIVE_SUGGESTIONS:
            return Object.assign({}, state, {
                [action.filter]: suggestions(state[action.filter], action)
            });
        default:
            return state;
    }
}



