import alt from '../alt';
import {assignIn} from 'lodash';
import SuggestionActions from '../actions/SuggestionActions';

class SuggestionStrore {
    constructor() {
        this.bindActions(SuggestionActions);
        this.suggestion = {
            title: '',
            content: '',
            likes: ''
        };
    }

    onGetSuggestionSuccess(data) {
        assignIn(this, data);
    }

    onGetSuggestionFail(message) {
        toastr.error(message);
    }

    onLikeSuggestionSuccess(message) {
        this.suggestion.likes++;
        toastr.success(message);
    }

    onLikeSuggestionFail(message) {
        toastr.error(message);
    }

    onDislikeSuggestionSuccess(message) {
        this.suggestion.likes--;
        toastr.success(message);
    }

    onDislikeSuggestionFail(message) {
        toastr.error(message);
    }

}

export default alt.createStore(SuggestionStrore);