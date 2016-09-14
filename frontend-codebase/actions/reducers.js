import { combineReducers } from 'redux';
import { suggestions, suggestionsByFilter } from './suggestionReducers';
import { uiAuth } from './uiReducers';

export default combineReducers({
    suggestions,
    suggestionsByFilter,
    ui: uiAuth
});