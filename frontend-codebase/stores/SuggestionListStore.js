import alt from '../utils/alt';
import {assignIn} from 'lodash';
import SuggestionListActions from '../actions/SuggestionListActions';

class SuggestionListStore {
    constructor() {
        this.bindActions(SuggestionListActions);
        this.topSuggestions = [];
        this.lastCreated = [];
        this.topSuggestionDefault = '';
        this.lastSuggestionDefault = '';
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

export default alt.createStore(SuggestionListStore);