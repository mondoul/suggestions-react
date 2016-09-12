import alt from '../utils/alt';
import {assignIn} from 'lodash';
import HomeActions from '../actions/HomeActions';

class HomeStore {
    constructor() {
        this.bindActions(HomeActions);
        this.topSuggestions = [];
        this.lastCreated = [];
        this.hasNoResults = false;
        this.searchTerms = '';
        this.topSuggestionDefault = '';
        this.lastSuggestionDefault = '';

    }

    onNoResults(terms) {
        this.searchTerms = terms;
        this.hasNoResults = true;
    }

    onGetTopSuggestionsSuccess(data) {
        this.topSuggestions = data;
    }

    onGetTopSuggestionsFail(message) {
        this.topSuggestionDefault = message;
    }

    onGetLastSuggestionsSuccess(data) {
        this.lastCreated = data;
    }

    onGetLastSuggestionsFail(message) {
        this.lastSuggestionDefault = message;
    }

}

export default alt.createStore(HomeStore);