import alt from '../alt';
import NewSuggestionActions from '../actions/NewSuggestionActions';

class NewSuggestionStore {
    constructor() {
        this.bindActions(NewSuggestionActions);
        this.title = '';
        this.content = '';
        this.helpBlockTitle = '';
        this.helpBlockContent = '';
        this.titleValidationState = '';
        this.contentValidationState = '';
        this.showModal = false;
    }

    onOpenModal() {
        this.showModal = true;
    }

    onCloseModal() {
        this.showModal = false;
        setTimeout(this.reset.bind(this), 400);
    }

    reset() {
        this.title = '';
        this.content = '';
        this.helpBlockTitle = '';
        this.helpBlockContent = '';
        this.titleValidationState = '';
        this.contentValidationState = '';
    }

    onAddSuggestionSuccess(successMsg) {
        this.contentValidationState = 'has-success';
        this.showModal = false;
        this.reset();
        toastr.success(successMsg);
    }

    onAddSuggestionFail(errMsg) {
        this.contentValidationState = 'has-error';
        toastr.error(errMsg);
    }

    onUpdateTitle(event) {
        this.title = event.target.value;
        this.titleValidationState = '';
        this.helpBlockTitle = '';
    }

    onUpdateContent(event) {
        this.content = event.target.value;
        this.contentValidationState = '';
        this.helpBlockContent = '';
    }

    onInvalidTitle() {
        this.titleValidationState = 'has-error';
        this.helpBlockTitle = 'Please enter a title.';
    }

    onInvalidContent() {
        this.contentValidationState = 'has-error';
        this.helpBlockContent = 'Please enter a suggestion.';
    }
}

export default alt.createStore(NewSuggestionStore);