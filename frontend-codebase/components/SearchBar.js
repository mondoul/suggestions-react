import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { queryUpdated, search } from '../actions/searchActions';

class SearchBar extends Component {

    render() {

        const { onSearch, query } = this.props;

        return (
            <form ref='searchForm' className='navbar-form navbar-right animated'>
                <div className='input-group'>
                    <input type='text' className='form-control' placeholder='Search suggestions...' ref='searchQuery' value={query} onChange={onSearch} />
                    <span className='input-group-btn'>
                        <button className='btn btn-default'>
                            <span className='glyphicon glyphicon-search'></span>
                        </button>
                    </span>
                </div>
            </form>
        );
    }
}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired
};

function mapStateToProps(state) {
    const { query } = state.search;
    return {
        query
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onSearch: event => {
            let query = event.currentTarget.value;
            console.log('value', query);
            dispatch(queryUpdated(query));
            if (query.length > 2) {
                dispatch(search(query));
            } else {
                dispatch(push('/'));
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);