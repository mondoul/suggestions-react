import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SuggestionSummary from './SuggestionSummary';

class Search extends Component {

    render() {

        const { isFetching, results } = this.props;

        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <h2>Search results</h2>
                        <div className='list-group animate fade-in'>
                            {
                                isFetching && results.length == 0 &&
                                    <span>In progress ...</span>
                            }
                            {
                                !isFetching && results.map((result, i) => {
                                return (
                                    <SuggestionSummary key={i} suggestion={result} />
                                )}
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Search.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    results: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    const { results, isFetching} = state.search;
    return {
        results,
        isFetching
    };
}

export default connect(mapStateToProps)(Search);