import fetch from 'isomorphic-fetch';
import config from '../config';
import { auth } from '../utils/initializeAuth';
import { closeNewModal } from './uiActions';
import { push } from 'react-router-redux';
import * as actions from './actionsConst';

/*
 * Navigate to a given Suggestion
 */


export function navigateTo(id) {
    return dispatch => dispatch(push('/suggestion/' + id));
}

/*
 *  Requesting / Receiving a LIST of suggestions, using a filter (top, last) and a size
 */

function requestSuggestions(filter, size) {
    return {
        type: actions.REQUEST_SUGGESTIONS,
        filter,
        size
    }
}

function receiveSuggestions(filter, size, json) {
    return {
        type: actions.RECEIVE_SUGGESTIONS,
        suggestions: json,
        filter,
        size
    }
}

function fetchSuggestions(filter, size) {
    return dispatch => {
        dispatch(requestSuggestions(filter, size));
        return fetch(`${config.apiUrl}/suggestions/${filter}/${size}`)
            .then(response => response.json())
            .then(json => dispatch(receiveSuggestions(filter, size, json)));
    }
}

export function fetchMostRecentSuggestions() {
    return dispatch => dispatch(fetchSuggestions('last', 10));
}

export function fetchTopSuggestions() {
    return dispatch => dispatch(fetchSuggestions('top', 10));
}

/*
 *  Requesting / Receiving a SINGLE suggestion by Id (if necessary)
 */

function requestASuggestion(id){
    return {
        type: actions.REQUEST_A_SUGGESTION,
        id
    }
}

function receiveASuggestion(id, json) {
    return {
        type: actions.RECEIVE_A_SUGGESTION,
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
    return !suggestion;
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

/*
 * Like / Dislike a suggestion
 */

function votedLikeSuggestion(id) {
    console.log('like suggestion');
    return {
        type: actions.LIKE_SUGGESTION,
        id
    }
}

function votedDislikeSuggestion(id) {
    return {
        type: actions.DISLIKE_SUGGESTION,
        id
    }
}

function voteSuggestion(id, action) {
    return dispatch => {
        return fetch(`${config.apiUrl}/suggestions/${id}/${action}`, {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + auth.getToken()
            }
        }).then(response => {
            if (response.status >= 400) {
                toastr.error(response.statusText);
                return Promise.resolve();
            } else {
                return response.json();
            }
        }).then(json => {
            let callback = action === 'like' ? votedLikeSuggestion : votedDislikeSuggestion;
            if (json.type === 'success') {
                dispatch(callback(id));
                toastr.success(json.message);
            } else {
                toastr.warning(json.message);
            }
        })
    }
}

export function likeSuggestion(id) {
    return dispatch => dispatch(voteSuggestion(id, 'like'));
}

export function dislikeSuggestion(id) {
    return dispatch => dispatch(voteSuggestion(id, 'dislike'));
}

/*
 * Add a new Suggestion
 */

function addingSuggestion(){
    return {
        type: actions.ADDING_SUGGESTION
    }
}

function addedSuggestion(){
    return {
        type: actions.ADDED_SUGGESTION
    }
}

export function createSuggestion(title, content) {
    return dispatch => {
        dispatch(addingSuggestion());

        return fetch(`${config.apiUrl}/suggestions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + auth.getToken()
            },
            body: JSON.stringify({title, content})
        }).then(response => {
            if (response.status >= 400) {
                toastr.error(response.statusText);
                dispatch(addedSuggestion());
                return Promise.resolve();
            } else {
                return response.json();
            }
        })
        .then(json => {
            toastr.success(json.message);
            dispatch(addedSuggestion());
            dispatch(closeNewModal());
            dispatch(fetchMostRecentSuggestions());
            dispatch(fetchTopSuggestions());
        })
    }
}
