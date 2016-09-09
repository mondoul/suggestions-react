import alt from '../utils/alt';

class SearchResultsActions {
    constructor() {
        this.generateActions(
            'getResultsSuccess',
            'getResultsFail'
        );
    }

    searchSuggestions(query) {
        $.ajax({
            type: 'GET',
            url: '/api/suggestions/search',
            data: query
        }).done((data) => {
            this.actions.getResultsSuccess(data);
        }).fail((jqXhr) => {
            this.actions.getResultsFail('Couldn\'t search suggestions.');
        });
    }
}

export default alt.createActions(SearchResultsActions);