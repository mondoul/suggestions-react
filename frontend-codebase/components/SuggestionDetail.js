import React, {PropTypes, Component} from 'react';
import moment from 'moment';
import SuggestionActionsDropdown from './SuggestionActionsDropdown';

class SuggestionDetail extends Component {

    render() {
        const { suggestion, like, dislike, authenticated, showActions, onActionSelected } = this.props;

        return (
            <div className='suggestion-component-container'>
                <h2>{suggestion.title}
                    { suggestion.categoryTitle !== null &&
                        <span className="label label-info pull-right">{suggestion.categoryTitle}</span>
                    }
                </h2>
                {
                    showActions &&
                    <div className='pull-right'>
                        <SuggestionActionsDropdown id={suggestion._id} onActionSelected={onActionSelected}/>
                    </div>
                }
                <div className='votes-container'>
                    {
                        authenticated ? (
                            <button type="button" onClick={like} className="btn btn-link" aria-label="Like">
                                <span className="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>
                            </button>
                        ) : (
                            <button type="button" className="btn btn-link" aria-label="Like" data-toggle='tooltip' data-placement='right'
                                    title='Login or Sign up to vote for a suggestion'>
                                <span className="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>
                            </button>
                        )
                    }

                    <span className='likes'>{suggestion.likes}</span>
                    {
                        authenticated ? (
                            <button type="button" onClick={dislike} className="btn btn-link" aria-label="Dislike">
                                <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
                            </button>
                        ) : (
                            <button type="button" className="btn btn-link" aria-label="Dislike" data-toggle='tooltip' data-placement='right'
                                    title='Login or Sign up to vote for a suggestion'>
                                <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
                            </button>
                        )
                    }
                </div>
                <div className='content'>
                    {suggestion.content}
                </div>
                {
                    moment(suggestion.updated).isAfter(suggestion.created) ? (
                        <div className='author'>{suggestion.author}, edited {moment(suggestion.updated).fromNow()}</div>
                    ) : (
                        <div className='author'>{suggestion.author}, {moment(suggestion.created).fromNow()}</div>
                    )
                }
            </div>

        );
    }
}

SuggestionDetail.propTypes = {
    suggestion: PropTypes.any.isRequired,
    like: PropTypes.func.isRequired,
    dislike: PropTypes.func.isRequired,
    showActions: PropTypes.bool.isRequired,
    onActionSelected: PropTypes.func.isRequired,
    authenticated: PropTypes.bool.isRequired
};

export default SuggestionDetail;