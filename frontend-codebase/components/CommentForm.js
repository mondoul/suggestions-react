import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Form, FormGroup, FormControl, ControlLabel, Button, ButtonToolbar } from 'react-bootstrap';

class CommentForm extends Component {

    saveChanges(event) {
        event.preventDefault();

        const { handleSubmit, suggestionId } = this.props;

        const content = ReactDOM.findDOMNode(this.refs.content).value.trim();

        handleSubmit(suggestionId, content);
    }

    render() {
        const { isAdding } = this.props;

        return (
            <Form onSubmit={this.saveChanges.bind(this)} className='form-horizontal new-comment'>
                <FormGroup controlId='content'>
                    <ControlLabel className='col-sm-2'>Your comment</ControlLabel>
                    <div className='col-sm-8'>
                        <FormControl componentClass='textarea' rows='3' ref='content' placeholder='Type your comment...' required/>
                    </div>
                </FormGroup>
                <ButtonToolbar>
                {
                    isAdding &&
                    <Button bsStyle='primary' disabled>Saving...</Button>
                }
                {
                    !isAdding &&
                    <Button type='submit' bsStyle='primary'>Post comment</Button>
                }
                </ButtonToolbar>
            </Form>
        )
    }
}

CommentForm.propTypes = {
    isAdding: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

export default CommentForm;