import alt from '../alt';

class NewSuggestionActions {
    constructor() {
        this.generateActions(
            'addSuggestionSuccess',
            'addSuggestionFail',
            'updateTitle',
            'updateContent',
            'invalidTitle',
            'invalidContent',
            'openModal',
            'closeModal'
        );
    }

    addSuggestion(title, content) {
        $.ajax({
            type: 'POST',
            url: '/api/suggestions',
            data: { title: title, content: content }
        }).done((data) => {
            this.actions.addSuggestionSuccess(data.message);
        }).fail((jqXhr) => {
            this.actions.addSuggestionFail('Couldn\'t add the suggestion...');
        });
    }

}

export default alt.createActions(NewSuggestionActions);