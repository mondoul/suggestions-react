import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, ControlLabel, Button, ButtonToolbar } from 'react-bootstrap';
import { closeNewModal } from '../actions/uiActions';
import { createSuggestion } from '../actions/suggestionActions';

class NewSuggestion extends Component {

    saveChanges(event) {
        event.preventDefault();

        const { handleSubmit } = this.props;

        let title = ReactDOM.findDOMNode(this.refs.title).value.trim();
        let content = ReactDOM.findDOMNode(this.refs.suggestionBody).value.trim();

        handleSubmit(title, content);
    }

    render() {

        const { closeModal, addingSuggestionPending } = this.props;

        return (
            <Form onSubmit={this.saveChanges.bind(this)} className='form-horizontal new-form'>
                <FormGroup controlId='title'>
                    <ControlLabel className='col-sm-2'>Title</ControlLabel>
                    <div className='col-sm-8'>
                        <FormControl type='text' ref='title' placeholder='Suggestion Title' required/>
                    </div>
                </FormGroup>
                <FormGroup controlId='suggestionBody'>
                    <ControlLabel className='col-sm-2'>Suggestion</ControlLabel>
                    <div className='col-sm-8'>
                        <FormControl componentClass='textarea' rows='5' ref='suggestionBody' placeholder='Type your suggestion here...' required/>
                    </div>
                </FormGroup>
                <ButtonToolbar>
                    {
                        addingSuggestionPending &&
                        <Button bsStyle='primary' disabled>Saving...</Button>
                    }
                    {
                        !addingSuggestionPending &&
                        <Button type='submit' bsStyle='primary' >Save Changes</Button>
                    }
                    <Button onClick={closeModal}>Cancel</Button>
                </ButtonToolbar>
            </Form>


        );
    }
}

NewSuggestion.propTypes = {
    addingSuggestionPending: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { addingSuggestionPending } = state.ui;
    return {
        addingSuggestionPending
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleSubmit: (title, content) => {
            if (title && content) {
                dispatch(createSuggestion(title, content))
            }
        },
        closeModal: () => dispatch(closeNewModal())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewSuggestion);