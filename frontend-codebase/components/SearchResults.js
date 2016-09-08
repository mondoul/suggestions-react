import React from 'react';
import timeSince from '../utils/timeago';
import SearchResultsStore from '../stores/SearchResultsStore';
import SearchResultsActions from '../actions/SearchResultsActions';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = SearchResultsStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        SearchResultsStore.listen(this.onChange);
        SearchResultsActions.searchSuggestions()
    }

}