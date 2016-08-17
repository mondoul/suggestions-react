import alt from '../alt';
import NavbarActions from '../actions/NavbarActions';

class NavbarStore {
    constructor() {
        this.bindActions(NavbarActions);
        this.searchResultsCount = 0;
        this.searchQuery = '';
        this.ajaxAnimationClass = '';
    }

    onFindSuggestionSuccess(payload) {
        //payload.history.pushState(null, '/characters/' + payload.characterId);
    }

    onFindSuggestionFail(payload) {
        payload.searchForm.classList.add('shake');
        setTimeout(() => {
            payload.searchForm.classList.remove('shake');
        }, 1000);
    }

    onUpdateAjaxAnimation(className) {
        this.ajaxAnimationClass = className; //fadein or fadeout
    }

    onUpdateSearchQuery(event) {
        this.searchQuery = event.target.value;
    }
}

export default alt.createStore(NavbarStore);