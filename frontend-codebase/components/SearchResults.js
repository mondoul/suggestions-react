import React from 'react';
import { withRouter } from 'react-router';
import SingleSuggestion from './SingleSuggestion';
import SearchResultsStore from '../stores/SearchResultsStore';
import SearchActions from '../actions/SearchActions';
import NavbarActions from '../actions/NavbarActions';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = SearchResultsStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        SearchResultsStore.listen(this.onChange);
        SearchActions.searchSuggestions(this.props.location.query.q);
        NavbarActions.queryChanged(this.props.location.query.q);
    }

    componentWillUnmount() {
        SearchResultsStore.unlisten(this.onChange);
    }

    componentDidUpdate() {
        if (this.props.location.query.q !== this.state.term) {
            SearchActions.searchSuggestions(this.props.location.query.q);
            NavbarActions.queryChanged(this.props.location.query.q);
        }
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let results = this.state.results.map(function (suggestion, index) {
            return (
                <SingleSuggestion key={suggestion._id} suggestion={suggestion} />
            );
        }.bind(this));

        let title = this.state.results.length > 0 ? 'Search Results' : 'No results';

        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <h2>{title}</h2>
                        <div className='list-group animate fade-in'>
                            {results}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default withRouter(SearchResults);