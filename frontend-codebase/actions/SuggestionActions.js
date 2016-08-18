import alt from '../alt';

class SuggestionActions {
    constructor() {
        this.generateActions(
            'getSuggestionSuccess',
            'getSuggestionFail',
            'likeSuggestionSuccess',
            'likeSuggestionFail',
            'dislikeSuggestionSuccess',
            'dislikeSuggestionFail'
        );
    }

    _voteSuggestion(id, action, successCallback, failureCallback) {
        $.ajax({
            type: 'PUT',
            url: '/api/suggestions/' + id + '/' + action
        }).done((data) => {
            successCallback(data.message);
        }).fail(() => {
            failureCallback('Vote failed :(');
        });
    }

    likeSuggestion(id) {
        $.ajax({
            type: 'PUT',
            url: '/api/suggestions/' + id + '/like'
        }).done((data) => {
            this.actions.likeSuggestionSuccess(data.message);
        }).fail(() => {
            this.actions.likeSuggestionFail('Vote failed :(');
        });
    }

    dislikeSuggestion(id) {
        $.ajax({
            type: 'PUT',
            url: '/api/suggestions/' + id + '/dislike'
        }).done((data) => {
            this.actions.dislikeSuggestionSuccess(data.message);
        }).fail(() => {
            this.actions.dislikeSuggestionFail('Vote failed :(');
        });
    }

    getSuggestion(id) {
        $.ajax({
            type: 'GET',
            url: '/api/suggestions/' + id
        }).done((data) => {
            this.actions.getSuggestionSuccess(data);
        }).fail((jqXhr) => {
            this.actions.dislikeSuggestionFail('Couldn\'t retrieve suggestion.');
        });
    }

}

export default alt.createActions(SuggestionActions);