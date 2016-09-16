import React, { Component, PropTypes } from 'react';

class SearchBar extends Component {

    render() {

        const { onSearch, query, isFetching } = this.props;

        const className = isFetching ? 'glyphicon glyphicon-refresh glyphicon-spin' : 'glyphicon glyphicon-search';

        return (
            <form ref='searchForm' className='navbar-form navbar-right animated' onSubmit={onSearch}>
                <div className='input-group'>
                    <input type='text' className='form-control' placeholder='Search suggestions...' ref='searchQuery' value={query} onChange={onSearch} />
                    <span className='input-group-btn'>
                        <button className='btn btn-default' onClick={onSearch}>
                            <span className={className}></span>
                        </button>
                    </span>
                </div>
            </form>
        );
    }
}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired
};
export default SearchBar;