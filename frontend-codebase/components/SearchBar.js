import React, { Component, PropTypes } from 'react';

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
export default SearchBar;