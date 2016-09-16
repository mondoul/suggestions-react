import { combineReducers } from 'redux';
import { suggestions, suggestionsByFilter } from './suggestionReducers';
import { uiInteractions } from './uiReducers';
import { search } from './searchReducers'

export default combineReducers({
    suggestions,
    suggestionsByFilter,
    ui: uiInteractions,
    search
});