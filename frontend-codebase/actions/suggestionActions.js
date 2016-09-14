import fetch from 'isomorphic-fetch';
import config from '../config';

/*
 *  Requesting / Receiving a LIST of suggestions, using a filter (top, last) and a size
 */

export const REQUEST_SUGGESTIONS = 'REQUEST_SUGGESTIONS';
export const RECEIVE_SUGGESTIONS = 'RECEIVE_SUGGESTIONS';

function requestSuggestions(filter, size) {
    return {
        type: REQUEST_SUGGESTIONS,
        filter,
        size
    }
}

function receiveSuggestions(filter, size, json) {
    return {
        type: RECEIVE_SUGGESTIONS,
        suggestions: json,
        filter,
        size
    }
}

export function fetchSuggestions(filter, size) {
    return dispatch => {
        dispatch(requestSuggestions(filter, size));
        return fetch(`${config.apiUrl}/suggestions/${filter}/${size}`)
            .then(response => response.json())
            .then(json => dispatch(receiveSuggestions(filter, size, json)));
    }
}

/*
 *  Requesting / Receiving a SINGLE suggestion by Id (if necessary)
 */

export const REQUEST_A_SUGGESTION = 'REQUEST_A_SUGGESTION';
export const RECEIVE_A_SUGGESTION = 'RECEIVE_A_SUGGESTION';

function requestASuggestion(id){
    return {
        type: REQUEST_A_SUGGESTION,
        id
    }
}

function receiveASuggestion(id, json) {
    return {
        type: RECEIVE_A_SUGGESTION,
        result: json,
        id
    }
}

function fetchSuggestion(id) {
    return dispatch => {
        dispatch(requestASuggestion(id));
        return fetch(`${config.apiUrl}/suggestions/${id}`)
            .then(response => response.json())
            .then(json => dispatch(receiveASuggestion(id, json)));
    }
}

function shouldRequestASuggestion(state, id) {
    if (!state.suggestions)
        return true;
    const suggestion = state.suggestions.items.find(el => {
        return el._id === id;
    });
    return !!!suggestion; // !! turns suggestion into bool, if found, it's 'true', but if found, we don't want to fetch, so we negate
}

export function retrieveASuggestionIfNeeded(id) {
    return (dispatch, getState) => {
        if (shouldRequestASuggestion(getState(), id)) {
            return dispatch(fetchSuggestion(id));
        } else {
            return Promise.resolve();
        }

    }
}