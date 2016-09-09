import alt from '../utils/alt';

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

    likeSuggestion(id, token) {
        $.ajax({
            type: 'PUT',
            url: '/api/suggestions/' + id + '/like',
            headers: {
                'Authorization' : 'Bearer ' + token
            }
        }).done((data) => {
            this.actions.likeSuggestionSuccess(data);
        }).fail(() => {
            this.actions.likeSuggestionFail('Vote failed :(');
        });
    }

    dislikeSuggestion(id, token) {
        $.ajax({
            type: 'PUT',
            url: '/api/suggestions/' + id + '/dislike',
            headers: {
                'Authorization' : 'Bearer ' + token
            }
        }).done((data) => {
            this.actions.dislikeSuggestionSuccess(data);
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