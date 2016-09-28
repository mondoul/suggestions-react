import fetch from 'isomorphic-fetch';
import config from '../config';
import { auth } from '../utils/initializeAuth';
import * as actions from './actionsConst';


/*
 * Post new Comment
 */

function addingComment() {
    return {
        type: actions.ADDING_COMMENT
    }
}

function addedComment(id, comment) {
    return {
        type: actions.COMMENT_ADDED,
        comment,
        id
    }
}

export function postComment(id, content, isAnonymous) {
    return dispatch => {
        dispatch(addingComment());

        return fetch(`${config.apiUrl}/comments/${id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + auth.getToken()
            },
            body: JSON.stringify({ content, isAnonymous})
        }).then(response => {
            if (response.status >= 400) {
                toastr.error(response.statusText);
                dispatch(addedComment());
                return Promise.resolve();
            } else {
                return response.json();
            }
        }).then(json => {
                toastr.success(json.message);
                dispatch(addedComment(id, json.comment));
            })
    }
}

/*
 * Requesting Comments
 */

function requestComments() {
    return {
        type: actions.REQUEST_COMMENTS
    }
}

function receivedComments(id, json) {
    return {
        type: actions.RECEIVED_COMMENTS,
        comments: json.comments,
        id
    }
}

function fetchComments(id) {
    return dispatch => {
        dispatch(requestComments());
        return fetch(`${config.apiUrl}/comments/${id}`)
            .then(response => response.json())
            .then(json => {
                dispatch(receivedComments(id, json))
            });
    }
}

function shouldRequestComments(state, id) {
    if (!state.comments)
        return true;
    const comments = state.comments[id];
    return !comments || comments.length === 0;
}

export function retrieveCommentsIfNeeded(id) {
    return (dispatch, getState) => {
        if (shouldRequestComments(getState(), id)) {
            return dispatch(fetchComments(id));
        } else {
            return Promise.resolve();
        }
    }
}