import alt from '../alt';
import {assignIn} from 'lodash';

class NavbarActions {
    constructor() {
        this.generateActions(
            'updateAjaxAnimation',
            'updateSearchQuery',
            'findSuggestionSuccess',
            'findSuggestionFail'
        );
    }

    findSuggestions(payload) {
        // $.ajax({
        //     url: '/api/suggestions/search',
        //     data: { text: payload.searchQuery }
        // }).done((data) => {
        //     assignIn(payload, data);
        //     this.actions.findSuggestionSuccess(payload);
        // }).fail(() => {
        //     this.actions.findSuggestionsFail(payload);
        // });
    }
}

export default alt.createActions(NavbarActions);