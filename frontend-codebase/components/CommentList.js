import React, { PropTypes, Component } from 'react';
import Comment from './Comment';

export default class CommentList extends Component {

    render() {
        const {comments} = this.props;

        return (
            <div className='comments-container'>
                { comments.map((comment, i) => {
                    return (
                        <Comment key={i} comment={comment}/>
                    )
                })}
            </div>
        )
    }
}

CommentList.propTypes = {
    comments: PropTypes.array.isRequired
};