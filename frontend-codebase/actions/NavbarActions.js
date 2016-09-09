import alt from '../utils/alt';
import {assignIn} from 'lodash';

class NavbarActions {
    constructor() {
        this.generateActions(
            'updateAjaxAnimation',
            'login',
            'logout',
            'profileUpdated'
        );
    }
}

export default alt.createActions(NavbarActions);