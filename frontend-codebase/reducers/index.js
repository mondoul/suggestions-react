import { combineReducers } from 'redux';
import { suggestions, suggestionsByFilter } from './suggestionReducers';
import { uiInteractions } from './uiReducers';
import { search } from './searchReducers';
import { comments } from './commentReducers';

export default combineReducers({
    suggestions,
    suggestionsByFilter,
    ui: uiInteractions,
    search,
    comments
});