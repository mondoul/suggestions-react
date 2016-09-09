import React from 'react';
import timeSince from '../utils/timeago';
import SuggestionStore from '../stores/SuggestionStore';
import SuggestionActions from '../actions/SuggestionActions';

class Suggestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = SuggestionStore.getState();
        this.onChange = this.onChange.bind(this);
        this.authToken = this.props.auth.getToken();
    }

    componentDidMount() {
        SuggestionStore.listen(this.onChange);
        SuggestionActions.getSuggestion(this.props.params.id);
    }

    componentWillUnmount() {
        SuggestionStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    like() {
        SuggestionActions.likeSuggestion(this.props.params.id, this.authToken);
    }

    dislike() {
        SuggestionActions.dislikeSuggestion(this.props.params.id, this.authToken);
    }

    render() {
        return(
        <div className='suggestion-component-container'>
            <h2>{this.state.suggestion.title}</h2>
            <div className='votes-container'>
                {
                    this.props.auth.loggedIn() ? (
                        <button type="button" onClick={this.like.bind(this)} className="btn btn-link" aria-label="Like">
                            <span className="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>
                        </button>
                    ) : (
                        <button type="button" className="btn btn-link" aria-label="Like" data-toggle='tooltip' data-placement='right' title='Login or Sign up to vote for a suggestion'>
                            <span className="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>
                        </button>
                    )
                }
                <span className='likes'>{this.state.suggestion.likes}</span>
                {
                    this.props.auth.loggedIn() ? (
                        <button type="button" onClick={this.dislike.bind(this)} className="btn btn-link" aria-label="Dislike">
                            <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
                        </button>
                    ) : (
                        <button type="button" className="btn btn-link" aria-label="Dislike" data-toggle='tooltip' data-placement='right' title='Login or Sign up to vote for a suggestion'>
                            <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
                        </button>
                    )
                }
            </div>
            <div className='content'>{this.state.suggestion.content}</div>
            <div className='author'>by {this.state.suggestion.author}, {timeSince(this.state.suggestion.created)} ago</div>
        </div>
        );
    }
}

export default Suggestion;