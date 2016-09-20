import React, {PropTypes, Component} from 'react';
import moment from 'moment';

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
                    {
                        moment(suggestion.updated).isAfter(suggestion.created) ? (
                            <span className='created'>{suggestion.author}, edited {moment(suggestion.updated).fromNow()}</span>
                        ) : (
                            <span className='created'>{suggestion.author}, {moment(suggestion.created).fromNow()}</span>
                        )
                    }
                </div>
            </div>
        );
    }
}

SuggestionSummary.propTypes = {
    suggestion: PropTypes.any.isRequired
};

export default SuggestionSummary;