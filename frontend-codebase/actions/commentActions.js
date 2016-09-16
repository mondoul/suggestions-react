import fetch from 'isomorphic-fetch';
import config from '../config';
import { auth } from '../utils/initializeAuth';
import { push } from 'react-router-redux';
import * as actions from './actionsConst';


/*
 * Post new Comment
 */

function addingComment() {
    return {
        type: actions.ADDING_COMMENT
    }
}

function addedComment() {
    return {
        type: actions.COMMENT_ADDED
    }
}

export function postComment(id, content) {
    return dispatch => {
        dispatch(addingComment());

        return fetch(`${config.apiUrl}/comments/${id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + auth.getToken()
            },
            body: JSON.stringify({ content})
        }).then(response => {
            if (response.status >= 400) {
                toastr.error(response.statusText);
                dispatch(addedComment());
                return Promise.resolve();
            } else {
                return response.json();
            }
        })
            .then(json => {
                toastr.success(json.message);
                dispatch(addedComment());
            })
    }
}