import React, {PropTypes, Component} from 'react';
import timeSince from '../utils/timeago';

class Comment extends Component {

    render() {
        const { comment } = this.props;
        return (
            <div className='comment-component list-group-item'>
                <div className='content'>
                    {comment.content}
                </div>
                <div className='details'>
                    <span>{comment.author}, {timeSince(comment.date)} ago</span>
                </div>
            </div>
        )
    }
}

Comment.propTypes = {
    comment: PropTypes.any.isRequired
};

export default Comment;