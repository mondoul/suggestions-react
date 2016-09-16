import React, { PropTypes, Component } from 'react';
import SuggestionSummary from './SuggestionSummary';

export default class Suggestions extends Component {

    renderSuggestion(suggestion, i) {
        let maxLength = 100;
        let title = suggestion.title;

        const { navigateTo } = this.props;

        if (title.length > maxLength) {
            title = title.substring(0, maxLength) + '...';
        }

        suggestion.title = title;

        return (
            <SuggestionSummary key={i} suggestion={suggestion} navigateTo={navigateTo} />
        );
    }

    render() {
        return (
            <div className='list-group'>
                { this.props.suggestions.map(this.renderSuggestion.bind(this)) }
            </div>
        );
    }
}

Suggestions.propTypes = {
    suggestions: PropTypes.array.isRequired,
    navigateTo: PropTypes.func.isRequired
};