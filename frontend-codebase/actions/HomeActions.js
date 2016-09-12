import alt from '../utils/alt';

class HomeActions {
    constructor() {
        this.generateActions(
            'getTopSuggestionsSuccess',
            'getTopSuggestionsFail',
            'getLastSuggestionsSuccess',
            'getLastSuggestionsFail',
            'noResultsFound'
        );
    }

    getTopSuggestions() {
        $.ajax({
            type: 'GET',
            url: '/api/suggestions/top/10'
        }).done((data) => {
            this.actions.getTopSuggestionsSuccess(data);
        }).fail((jqXhr) => {
            this.actions.getTopSuggestionsFail('Couldn\'t retrieve the top suggestions.');
        });
    }

    getLastSuggestions() {
        $.ajax({
            type: 'GET',
            url: '/api/suggestions/last/5'
        }).done((data) => {
            this.actions.getLastSuggestionsSuccess(data);
        }).fail((jqXhr) => {
            this.actions.getLastSuggestionsFail('Couldn\'t retrieve the last created suggestions.');
        });
    }

}

export default alt.createActions(HomeActions);