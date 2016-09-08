import alt from '../alt';
import SearchResultsActions from '../actions/SearchResultsActions';


class SearchResultsStore {
    constructor() {
        this.bindActions(SearchResultsActions);
        this.results = [];
    }

    onGetResultsSuccess(data) {
        this.results = data;
    }

    onGetResultsFail(err) {
        toastr.error(err);
    }
}

export default alt.createStore(SearchResultsStore);