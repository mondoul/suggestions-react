import React, {PropTypes, Component} from 'react';
import { push } from 'react-router-redux';
import timeSince from '../utils/timeago';

class SuggestionSummary extends Component {

    render() {
        const { suggestion, navigateTo } = this.props;

        return (
            <div className='short-suggestion-component list-group-item' onClick={navigateTo.bind(this, suggestion._id)}>
                <div className='votes'>
                    <span className='likes'>{suggestion.likes}</span>
                    <label>Points</label>
                </div>
                <div className='content'>
                    <span className='title'>{suggestion.title}</span>
                    <span className='created'>by {suggestion.author}, {timeSince(suggestion.created)} ago</span>
                </div>
            </div>
        );
    }
}

SuggestionSummary.propTypes = {
    suggestion: PropTypes.any.isRequired
};

export default SuggestionSummary;