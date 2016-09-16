import fetch from 'isomorphic-fetch';
import { push } from 'react-router-redux';
import config from '../config';
import * as actions from './actionsConst';

export function queryUpdated(query) {
    return {
        type: actions.QUERY_UPDATED,
        query
    }
}

function searchInProgress() {
    return {
        type: actions.SEARCHING
    }
}

function searchTerminated(results) {
    return {
        type: actions.SEARCH_FINISHED,
        results
    }
}

function searchTerminatedWithoutResults() {
    return {
        type: actions.SEARCH_NO_RESULT
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