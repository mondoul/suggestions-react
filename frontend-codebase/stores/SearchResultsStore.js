import alt from '../utils/alt';
import SearchActions from '../actions/SearchActions';


class SearchResultsStore {
    constructor() {
        this.bindActions(SearchActions);
        this.term = '';
        this.results = [];
    }

    onGetResultsSuccess(res) {
        this.term = res.query;
        this.results = res.data;
    }

    onGetResultsFail(res) {
        this.term = res.query;
        toastr.error(res.err);
    }
}

export default alt.createStore(SearchResultsStore);