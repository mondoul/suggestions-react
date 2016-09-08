import alt from '../alt';
import NavbarActions from '../actions/NavbarActions';

class NavbarStore {
    constructor() {
        this.bindActions(NavbarActions);
        this.searchResultsCount = 0;
        this.searchQuery = '';
        this.ajaxAnimationClass = '';
        this.authService = null;
        this.exportPublicMethods({
           initAuthService: function (authService) {
               this.authService = authService;
               this.authenticated = this.authService.loggedIn();
           }.bind(this)
        });
    }

    onLogout() {
        this.authenticated = this.authService.loggedIn();

    }

    onProfileUpdated() {
        this.authenticated = this.authService.loggedIn();
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