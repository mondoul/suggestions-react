import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { navigateTo } from '../actions/suggestionActions';
import Suggestions from '../components/Suggestions';

class Search extends Component {

    render() {

        const { isFetching, results, navigateTo } = this.props;

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
                                !isFetching &&
                                    <Suggestions suggestions={results} navigateTo={navigateTo} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Search.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    results: PropTypes.array.isRequired,
    navigateTo: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { results, isFetching} = state.search;
    return {
        results,
        isFetching
    };
}

function mapDispatchToProps(dispatch) {
    return {
        navigateTo: (id) => dispatch(navigateTo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);