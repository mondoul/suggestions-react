import React, {PropTypes, Component} from 'react';
import moment from 'moment';

class Comment extends Component {

    render() {
        const { comment } = this.props;
        return (
            <div className='comment-component list-group-item'>
                <div className='content'>
                    {comment.content}
                </div>
                <div className='details'>
                    <span>{comment.author}, {moment(comment.date).fromNow()}</span>
                </div>
            </div>
        )
    }
}

Comment.propTypes = {
    comment: PropTypes.any.isRequired
};

export default Comment;