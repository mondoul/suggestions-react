import alt from '../utils/alt';
import NavbarActions from '../actions/NavbarActions';

class NavbarStore {
    constructor() {
        this.bindActions(NavbarActions);
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

    onUpdateAjaxAnimation(className) {
        this.ajaxAnimationClass = className; //fadein or fadeout
    }
}

export default alt.createStore(NavbarStore);