import React from 'react';
import SingleSuggestion from './SingleSuggestion';
import HomeStore from '../stores/HomeStore';
import HomeActions from '../actions/HomeActions';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = HomeStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        HomeStore.listen(this.onChange);
        HomeActions.getTopSuggestions();
        HomeActions.getLastSuggestions();
    }

    componentWillUnmount() {
        HomeStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    renderShortSuggestion(suggestion, index) {
        let maxLength = 100;
        let title = suggestion.title;

        if (title.length > maxLength) {
            title = title.substring(0, maxLength) + '...';
        }

        suggestion.title = title;

        return (
            <SingleSuggestion key={suggestion._id} suggestion={suggestion} history={this.props.history} />
        );
    }

    render() {
        let topList = this.state.topSuggestions.map(this.renderShortSuggestion.bind(this));
        let lastCreatedList = this.state.lastCreated.map(this.renderShortSuggestion.bind(this));

        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className={ this.state.hasNoResults ? 'alert alert-warning':'hidden' } role="alert">
                        No Suggestion found for the terms <strong> { this.state.searchTerms } </strong>
                    </div>
                    <div className='col-sm-6'>
                        <h2>Top 10</h2>
                        <div className='list-group animate fade-in'>
                            {topList}
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <h2>Most Recent</h2>
                        <div className='list-group'>
                            {lastCreatedList}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;