import fetch from 'isomorphic-fetch';
import config from '../config';
import { auth } from '../utils/initializeAuth';
import { closeNewCategoryModal } from './uiActions';
import { push } from 'react-router-redux';
import * as actions from './actionsConst';

/*
 * Request / Receive a list of Categories
 */

function requestCategories() {
    return {
        type: actions.REQUEST_CATEGORIES
    }
}

function receiveCategories(json) {
    return {
        type: actions.RECEIVE_CATEGORIES,
        categories: json
    }
}

function shouldRequestCategories(state, id) {
    if (!state.categories) {
        console.log('no categories in state')
        return true;
    }

    const category = state.categories.items.find(el => {
        return el._id === id;
    });

    console.log('category not found', id, state.categories);
    return !category && !state.categories.isFetching;
}

export function requestCategoriesIfNeeded(id) {
    return (dispatch, getState) => {
        if (shouldRequestCategories(getState(), id)) {
            return dispatch(fetchCategories());
        } else {
            return Promise.resolve();
        }
    }
}

export function fetchCategories() {
    return dispatch => {
        dispatch(requestCategories());
        return fetch(`${config.apiUrl}/categories`)
            .then(response => response.json())
            .then(json => dispatch(receiveCategories(json)));
    }
}

/*
 * Create a new Category
 */

function savingCategory() {
    return {
        type: actions.SAVING_CATEGORY
    }
}

function categorySaved() {
    return {
        type: actions.CATEGORY_SAVED
    }
}

export function createCategory(title) {
    return dispatch => {
        dispatch(savingCategory());

        return fetch(`${config.apiUrl}/categories`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + auth.getToken()
            },
            body: JSON.stringify({title})
        }).then(response => {
            if (response.status >= 400) {
                toastr.error(response.statusText);
                dispatch(categorySaved());
                return Promise.resolve();
            } else {
                return response.json();
            }
        }).then(json => {
            toastr.success(json.message);
            dispatch(categorySaved());
            dispatch(closeNewCategoryModal());
            dispatch(fetchCategories());
        });
    }
}

/*
 * Select a Category
 */


export function selectCategory(categoryId) {
    return {
        type: actions.SELECT_CATEGORY,
        categoryId
    }
}


