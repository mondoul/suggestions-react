import alt from '../utils/alt';
import {assignIn} from 'lodash';

class NavbarActions {
    constructor() {
        this.generateActions(
            'updateAjaxAnimation',
            'login',
            'logout',
            'profileUpdated',
            'queryChanged'
        );
    }
}

export default alt.createActions(NavbarActions);