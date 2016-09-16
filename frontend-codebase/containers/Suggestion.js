import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { retrieveASuggestionIfNeeded, likeSuggestion, dislikeSuggestion } from '../actions/suggestionActions';
import { retrieveCommentsIfNeeded, postComment } from '../actions/commentActions';
import SuggestionDetail from '../components/SuggestionDetail';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';

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

    render() {
        const { suggestion, isFetching, isAuthenticated, id,
            handleSubmit, comments, isFetchingComments, isSaving } = this.props;

        return(
            <div className='suggestion-component-container'>
                {
                    isFetching &&
                        <span>Loading...</span>
                }
                {
                    !isFetching && suggestion ? (
                        <div>
                            <SuggestionDetail suggestion={suggestion} like={() => this.like() } dislike={() => this.dislike()} authenticated={isAuthenticated} />
                            <hr/>
                            <CommentForm handleSubmit={handleSubmit} suggestionId={id} isAdding={isSaving}/>
                            <CommentList comments={comments} isFetching={isFetchingComments} />
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
    isFetching: PropTypes.bool.isRequired,
    suggestion: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    const id = ownProps.params.suggestionId;
    const suggestion = state.suggestions.items.find(el => { return el._id === id; }) || {};
    const comments = state.comments[id] ?  state.comments[id] : [];
    console.log('comments', comments);
    const { isFetching:isFetchingComments, isSaving } = state.comments;
    const { isAuthenticated } = state.ui;

    return {
        id,
        suggestion,
        isFetching: !suggestion,
        isAuthenticated,
        comments,
        isFetchingComments,
        isSaving
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleSubmit: (id, content) => dispatch(postComment(id, content)),
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Suggestion));