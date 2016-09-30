import { combineReducers } from 'redux';
import { suggestions, suggestionsByFilter } from './suggestionReducers';
import { uiInteractions } from './uiReducers';
import { search } from './searchReducers';
import { comments } from './commentReducers';
import { categories } from './categoryReducers';
export default combineReducers({
    suggestions,
    suggestionsByFilter,
    categories,
    ui: uiInteractions,
    search,
    comments
});