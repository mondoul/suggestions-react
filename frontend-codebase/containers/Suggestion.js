import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { retrieveASuggestionIfNeeded, likeSuggestion, dislikeSuggestion, deleteSuggestion, editSuggestion, editingSuggestion } from '../actions/suggestionActions';
import { retrieveCommentsIfNeeded, postComment } from '../actions/commentActions';
import { closeEditModal, openEditModal } from '../actions/uiActions';
import SuggestionDetail from '../components/SuggestionDetail';
import EditSuggestion from '../components/EditSuggestion';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';
import Modal from '../components/Modal';

class Suggestion extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { dispatch, id } = this.props;
        dispatch(retrieveASuggestionIfNeeded(id));
        dispatch(retrieveCommentsIfNeeded(id));
    }

    like() {
        const { dispatch, id } = this.props;
        dispatch(likeSuggestion(id));
    }

    dislike() {
        const { dispatch, id } = this.props;
        dispatch(dislikeSuggestion(id));
    }

    onDeleteConfirm() {
        const { dispatch, id } = this.props;
        dispatch(deleteSuggestion(id));
    }

    onEditSubmit(title, content) {
        const { dispatch, id } = this.props;
        dispatch(editSuggestion(id, title, content));
    }

    render() {
        const { suggestion, isFetching, isAuthenticated, id, savingSuggestionPending,
            handleSubmit, comments, isFetchingComments, isSaving, isSaved,
            showActions, onActionSelected, showEdit, onEditModalClose } = this.props;

        return(
            <div className='suggestion-component-container'>
                {
                    isFetching &&
                        <span>Loading...</span>
                }
                {
                    !isFetching && suggestion.hasOwnProperty('_id') ? (
                        <div>
                            <SuggestionDetail suggestion={suggestion} like={() => this.like() } dislike={() => this.dislike()}
                                              showActions={showActions} onActionSelected={onActionSelected} authenticated={isAuthenticated} />
                            <hr/>
                            <CommentForm handleSubmit={handleSubmit} suggestionId={id} isAdding={isSaving} isSaved={isSaved} isAuthenticated={isAuthenticated}/>
                            <CommentList comments={comments} isFetching={isFetchingComments} />
                            <Modal title='Edit Suggestion' showModal={showEdit} close={onEditModalClose}>
                                <EditSuggestion suggestion={suggestion} savingSuggestionPending={savingSuggestionPending} cancel={onEditModalClose} handleSubmit={(title, content) => this.onEditSubmit(title, content)}/>
                            </Modal>
                        </div>
                    ) : null

                }
            </div>
        );
    }
}

Suggestion.propTypes = {
    id: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    onActionSelected: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    savingSuggestionPending: PropTypes.bool.isRequired,
    isSaving: PropTypes.bool.isRequired,
    isSaved: PropTypes.bool.isRequired,
    showActions: PropTypes.bool.isRequired,
    showEdit: PropTypes.bool.isRequired,
    suggestion: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    const id = ownProps.params.suggestionId;
    const suggestion = state.suggestions.items.find(el => { return el._id === id; }) || {};
    const comments = state.comments[id] ?  state.comments[id] : [];
    const { isFetching:isFetchingComments, isSaving, isSaved } = state.comments;
    const { isAuthenticated, savingSuggestionPending, showEdit } = state.ui;
    const showActions = suggestion !== {} && isAuthenticated && state.ui.profile.email === suggestion.author;

    return {
        id,
        suggestion,
        isFetching: !suggestion,
        isAuthenticated,
        savingSuggestionPending,
        comments,
        isFetchingComments,
        isSaving,
        isSaved,
        showActions,
        showEdit
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleSubmit: (id, content) => dispatch(postComment(id, content)),
        onActionSelected: (eventKey, event) => {
            switch(eventKey){
                case 'edit':
                    dispatch(openEditModal());
                    break;
                case 'delete':
                    dispatch(deleteSuggestion(event.id));
                    break;
            }
        },
        onEditModalClose: () => dispatch(closeEditModal()),
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Suggestion);