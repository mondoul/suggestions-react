import React from 'react';
import timeSince from '../utils/timeago';

class SingleSuggestion extends React.Component {

    navigate(id) {
        this.props.history.pushState(null, '/suggestion/' + id);
    }

    render() {
        let suggestion = this.props.suggestion;

        return (
            <div className='short-suggestion-component list-group-item' onClick={this.navigate.bind(this, suggestion._id)}>
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

export default SingleSuggestion;