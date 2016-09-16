import React, { PropTypes, Component } from 'react';
import Comment from './Comment';

export default class CommentList extends Component {

    render() {
        const { comments, isFetching} = this.props;

        return (
            <div className='comments-container list-group'>
                {
                    isFetching &&
                        <span>Loading comments ...</span>
                }
                { !isFetching && comments.length > 0 && comments.map((comment, i) => {
                    return (
                        <Comment key={i} comment={comment}/>
                    )
                })}
                {
                    !isFetching && comments.length === 0 &&
                        <span>No comments yet.</span>
                }
            </div>
        )
    }
}

CommentList.propTypes = {
    comments: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired
};