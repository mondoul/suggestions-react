import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { retrieveASuggestionIfNeeded } from '../actions/actions';
import SuggestionDetail from '../components/SuggestionDetail';

class Suggestion extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { dispatch, id } = this.props;
        dispatch(retrieveASuggestionIfNeeded(id));
    }

    like() {
        console.log('like !');
    }

    dislike() {
        console.log('dislike :(');
    }

    render() {
        const { suggestion, isFetching } = this.props;

        return(
            <div className='suggestion-component-container'>
                {
                    isFetching &&
                        <span>Loading...</span>
                }
                {
                    !isFetching && suggestion &&
                        <SuggestionDetail suggestion={suggestion} like={() => this.like() } dislike={() => this.dislike()} />
                }
            </div>
        );
    }
}

Suggestion.propTypes = {
    id: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    suggestion: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    const id = ownProps.params.suggestionId;
    const suggestion = state.suggestions.items.find(el => { return el._id === id; }) || {};
    return {
        id,
        suggestion,
        isFetching: !!!suggestion
    }
}

export default connect(mapStateToProps)(withRouter(Suggestion));