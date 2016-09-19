import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Form, FormGroup, FormControl, ControlLabel, Button, ButtonToolbar } from 'react-bootstrap';

class EditSuggestion extends Component {
    constructor(props) {
        super(props);
        if (!props.suggestion || props.suggestion === {}){
            this.suggestion = {
                title: '',
                content: ''
            }
        } else {
            this.suggestion = props.suggestion;
        }

    }

    componentDidMount() {
        ReactDOM.findDOMNode(this.refs.title).value = this.suggestion.title;
        ReactDOM.findDOMNode(this.refs.suggestionBody).value = this.suggestion.content;
    }

    saveChanges(event) {
        event.preventDefault();

        const { handleSubmit } = this.props;

        let title = ReactDOM.findDOMNode(this.refs.title).value.trim();
        let content = ReactDOM.findDOMNode(this.refs.suggestionBody).value.trim();

        handleSubmit(title, content);
    }

    render() {

        const { cancel, savingSuggestionPending } = this.props;

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
                        savingSuggestionPending &&
                        <Button bsStyle='primary' disabled>Saving...</Button>
                    }
                    {
                        !savingSuggestionPending &&
                        <Button type='submit' bsStyle='primary'>Save Changes</Button>
                    }
                    <Button onClick={cancel}>Cancel</Button>
                </ButtonToolbar>
            </Form>


        );
    }
}

EditSuggestion.propTypes = {
    savingSuggestionPending: PropTypes.bool.isRequired,
    cancel: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    suggestion: PropTypes.object
};

export default EditSuggestion;