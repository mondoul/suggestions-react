import alt from '../utils/alt';

class SearchActions {
    constructor() {
        this.generateActions(
            'getResultsSuccess',
            'getResultsFail'
        );
    }

    searchSuggestions(query) {
        $.ajax({
            type: 'GET',
            url: '/api/suggestions/find',
            data: {term : query}
        }).done((data) => {
            this.actions.getResultsSuccess({query, data});
        }).fail((jqXhr) => {
            this.actions.getResultsFail({query, err: 'Couldn\'t search suggestions.'});
        });
    }
}

export default alt.createActions(SearchActions);