import React from 'react';
import SingleSuggestion from './SingleSuggestion';
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
        SearchResultsActions.searchSuggestions(this.props.params.term);
    }

    componentWillUnmount() {
        SearchResultsStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let results = this.state.results.map(function (suggestion, index) {
            return (
                <SingleSuggestion key={suggestion._id} suggestion={suggestion} history={this.props.history}/>
            );
        }.bind(this));

        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <h2>Search results</h2>
                        <div className='list-group animate fade-in'>
                            {results}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default SearchResults;