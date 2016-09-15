import fetch from 'isomorphic-fetch';
import { push } from 'react-router-redux';
import config from '../config';

export const QUERY_UPDATED = 'QUERY_UPDATED';
export const SEARCHING = 'SEARCHING';
export const SEARCH_FINISHED = 'SEARCH_FINISHED';
export const SEARCH_NO_RESULT = 'SEARCH_NO_RESULT';

export function queryUpdated(query) {
    return {
        type: QUERY_UPDATED,
        query
    }
}

function searchInProgress() {
    return {
        type: SEARCHING
    }
}

function searchTerminated(results) {
    return {
        type: SEARCH_FINISHED,
        results
    }
}

function searchTerminatedWithoutResults() {
    return {
        type: SEARCH_NO_RESULT
    }
}

export function search(query) {
    return dispatch => {
        dispatch(searchInProgress());

        return fetch(`${config.apiUrl}/suggestions/find?term=${encodeURIComponent(query)}`, {
            method: 'GET',
        }).then(response => {
            if (response.state >= 400) {
                dispatch(push('/'));
                toastr.error(response.statusText);
                return Promise.resolve();
            } else {
                return response.json();
            }
        }).then(json => {
            if (json.length == 0) {
                dispatch(searchTerminatedWithoutResults());
                dispatch(push('/'));
            } else {
                dispatch(searchTerminated(json));
                dispatch(push(`/search?q=${query}`));
            }
        });
    }
}