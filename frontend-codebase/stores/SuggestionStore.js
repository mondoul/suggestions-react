import alt from '../utils/alt';
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

    onLikeSuggestionSuccess(data) {
        if (data.type === 'success') {
            this.suggestion.likes++;
            toastr.success(data.message);
        } else {
            toastr.warning(data.message);
        }
    }

    onLikeSuggestionFail(message) {
        toastr.error(message);
    }

    onDislikeSuggestionSuccess(data) {
        if (data.type === 'success') {
            this.suggestion.likes--;
            toastr.success(data.message);
        } else {
            toastr.warning(data.message);
        }
    }

    onDislikeSuggestionFail(message) {
        toastr.error(message);
    }

}

export default alt.createStore(SuggestionStrore);