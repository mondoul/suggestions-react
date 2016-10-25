import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { navigateTo } from '../actions/suggestionActions';
import Suggestions from '../components/Suggestions';

class Search extends Component {

    render() {

        const { isFetching, results, categories, navigateTo } = this.props;

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
                                !isFetching && categories.map((cat) => {
                                    return (
                                        <div className='resultGroup'>
                                            <h3>{cat.title}</h3>
                                            <Suggestions suggestions={results.filter(r => {return r.category._id === cat._id})} navigateTo={navigateTo} />
                                        </div>
                                    )
                                })
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
    const resultCategories = [...new Set(results.map(suggestion => suggestion.category._id))]; // extract categories
    const categories = state.categories.items.filter((cat) => {return resultCategories.includes(cat._id)});
    return {
        results,
        categories,
        isFetching
    };
}

function mapDispatchToProps(dispatch) {
    return {
        navigateTo: (id) => dispatch(navigateTo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);