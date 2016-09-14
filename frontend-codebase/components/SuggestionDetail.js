import React, {PropTypes, Component} from 'react';
import timeSince from '../utils/timeago';

class SuggestionDetail extends Component {

    render() {
        const { suggestion, like, dislike } = this.props;

        return (
            <div className='suggestion-component-container'>
                <h2>{suggestion.title}</h2>
                <div className='votes-container'>
                    <button type="button" onClick={like} className="btn btn-link" aria-label="Like">
                        <span className="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>
                    </button>
                    <span className='likes'>{suggestion.likes}</span>
                    <button type="button" onClick={dislike} className="btn btn-link" aria-label="Dislike">
                        <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
                    </button>
                </div>
                <div className='content'>{suggestion.content}</div>
                <div className='author'>by {suggestion.author}, {timeSince(suggestion.created)} ago</div>
            </div>
        );
    }
}

SuggestionDetail.propTypes = {
    suggestion: PropTypes.any.isRequired,
    like: PropTypes.func.isRequired,
    dislike: PropTypes.func.isRequired
};

export default SuggestionDetail;