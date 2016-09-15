import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchMostRecentSuggestions, fetchTopSuggestions } from '../actions/suggestionActions';
import Suggestions from '../components/Suggestions';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchMostRecentSuggestions());
        dispatch(fetchTopSuggestions());
    }

    render() {
        const { isFetchingTop, topSuggestions, lastSuggestions, isFetchingLast, hasNoResults, query } = this.props;

        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className={ hasNoResults ? 'alert alert-warning':'hidden' } role="alert">
                        No Suggestion found for the terms <strong> { query } </strong>
                    </div>
                    <div className='col-sm-6'>
                        <h2>Top 10</h2>
                        <div className='list-group animate fade-in'>
                            {isFetchingTop && topSuggestions.length == 0 &&
                                <span>Loading ...</span>
                            }
                            {!isFetchingTop && topSuggestions.length == 0 &&
                                <span>Empty.</span>
                            }
                            {topSuggestions.length > 0 &&
                                <Suggestions suggestions={topSuggestions}/>
                            }
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <h2>Most Recent</h2>
                        <div className='list-group animate fade-in'>
                            {isFetchingLast && lastSuggestions.length == 0 &&
                            <span>Loading ...</span>
                            }
                            {!isFetchingLast && lastSuggestions.length == 0 &&
                            <span>Empty.</span>
                            }
                            {lastSuggestions.length > 0 &&
                            <Suggestions suggestions={lastSuggestions}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    topSuggestions: PropTypes.array.isRequired,
    lastSuggestions: PropTypes.array.isRequired,
    isFetchingTop: PropTypes.bool.isRequired,
    isFetchingLast: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {

    const {
        isFetching:isFetchingTop,
        items: topSuggestions
    } = state.suggestionsByFilter['top'] || {
        isFetching: true,
        items: []
    };

    const {
        isFetching:isFetchingLast,
        items: lastSuggestions
    } = state.suggestionsByFilter['last'] || {
        isFetching: true,
        items: []
    };

    const { query } = state.search;

    return {
        topSuggestions,
        lastSuggestions,
        isFetchingTop,
        isFetchingLast,
        query,
        hasNoResults: state.search.results.length === 0 && query
    };
};

export default connect(mapStateToProps)(Home);