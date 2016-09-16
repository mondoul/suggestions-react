import React, {PropTypes, Component} from 'react';
import timeSince from '../utils/timeago';

class Comment extends Component {

    render() {
        const { comment } = this.props;
        return (
            <div className='comment-component'>
                <div className='content'>
                    {comment.content}
                </div>
                <div className='details'>
                    <span>{comment.author}, {timeSince(comment.created)} ago</span>
                </div>
            </div>
        )
    }
}

Comment.propTypes = {
    comment: PropTypes.any.isRequired
};

export default Comment;