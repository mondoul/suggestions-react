import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchMostRecentSuggestions, fetchTopSuggestions, navigateTo } from '../actions/suggestionActions';
import { fetchCategories, selectCategory, createCategory } from '../actions/categoryActions';
import { openNewCategoryModal, closeNewCategoryModal } from '../actions/uiActions';
import Suggestions from '../components/Suggestions';
import CategoryForm from '../components/CategoryForm';
import Modal from '../components/Modal';
import { getCategory } from '../utils/CategoryHelper';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { fetchSuggestions } = this.props;
        fetchSuggestions();
    }

    renderCategory(category, isActive) {
        const { selectCategory } = this.props;

        return (
            <li role='presentation' key={category._id} className={isActive?'active':''} onClick={() => selectCategory(category._id)}><a onClick={(e) => e.preventDefault()} href='#'>{category.title}</a></li>
        )
    }

    render() {
        const { navigateTo, hasNoResults, query, categories, isFetchingCategories, filteredSuggestions,
                selectedCategory, isAuthenticated, showNewCategory, onNewCategoryModalOpen,
                onCloseCategoryModal, savingCategoryPending, handleSubmitCategory} = this.props;

        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className={ hasNoResults ? 'alert alert-warning':'hidden' } role="alert">
                        No Suggestion found for the terms <strong> { query } </strong>
                    </div>
                    <div className='col-sm-3'>
                        {isFetchingCategories && categories.length == 0 &&
                            <span>Loading...</span>
                        }
                        {!isFetchingCategories && categories.length == 0 &&
                            <span>No Category</span>
                        }
                        {categories.length > 0 &&
                            <ul className="nav nav-pills nav-stacked">
                                {categories.map((cat) => this.renderCategory(cat, selectedCategory == cat._id))}
                            </ul>
                        }
                        {
                            isAuthenticated &&
                            <button type="button" className="btn btn-success navbar-btn" onClick={onNewCategoryModalOpen}>Add Category</button>
                        }
                        {
                            !isAuthenticated &&
                            <button type="button" className="btn btn-success navbar-btn disabled" data-toggle='tooltip' data-placement='bottom' title='Login or Sign up to add a new category'>Add Category</button>
                        }
                    </div>
                    <div className='col-sm-9'>
                        {filteredSuggestions.length == 0 &&
                            <span className='no-suggestion pull-right'>No suggestion in that category yet. Why not create one ?</span>
                        }
                        {filteredSuggestions.length > 0 &&
                            <Suggestions suggestions={filteredSuggestions} navigateTo={navigateTo}/>
                        }
                    </div>
                </div>
                <Modal title='Add a Category' showModal={showNewCategory} close={onCloseCategoryModal} >
                    <CategoryForm savingCategoryPending={savingCategoryPending} cancel={onCloseCategoryModal} handleSubmit={handleSubmitCategory} />
                </Modal>
            </div>
        );
    }
}

Home.propTypes = {
    topSuggestions: PropTypes.array.isRequired,
    lastSuggestions: PropTypes.array.isRequired,
    isFetchingTop: PropTypes.bool.isRequired,
    isFetchingLast: PropTypes.bool.isRequired,
    fetchSuggestions: PropTypes.func.isRequired,
    navigateTo: PropTypes.func.isRequired
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

    const {
        isFetching: isFetchingCategories,
        items: categories
    } = state.categories || {
        isFetching: true,
        items: []
    };

    const { isAuthenticated, showNewCategory, savingCategoryPending } = state.ui;

    const { selectedCategory } = state.ui.selectedCategory !== null
                    ? state.ui
                    : state.categories.items.length > 0
                        ? {
                            selectedCategory: state.categories.items[0]._id
                        }
                        : 0;

    const filteredSuggestions = selectedCategory == null ? []
                                    : state.suggestions.items.filter((elt) => { return elt.category._id == selectedCategory;});

    return {
        isAuthenticated,
        showNewCategory,
        savingCategoryPending,
        categories,
        isFetchingCategories,
        filteredSuggestions,
        selectedCategory,
        topSuggestions,
        lastSuggestions,
        isFetchingTop,
        isFetchingLast,
        query,
        hasNoResults: state.search.results.length === 0 && query && query.length > 2
    };
}

function mapDispatchToProps(dispatch) {
    return {
        navigateTo: (id) => dispatch(navigateTo(id)),
        fetchSuggestions: () => {
            dispatch(fetchMostRecentSuggestions());
            dispatch(fetchTopSuggestions());
        },
        selectCategory: (id) => {
            dispatch(selectCategory(id));
        },
        onNewCategoryModalOpen: () => {
            dispatch(openNewCategoryModal());
        },
        onCloseCategoryModal: () => {
            dispatch(closeNewCategoryModal());
        },
        handleSubmitCategory: (title) => {
            if (title){
                dispatch(createCategory(title));
            }
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);


/*

 <div className='row'>
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
 <Suggestions suggestions={topSuggestions} navigateTo={navigateTo}/>
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
 <Suggestions suggestions={lastSuggestions} navigateTo={navigateTo}/>
 }
 </div>
 </div>
 </div>

 */