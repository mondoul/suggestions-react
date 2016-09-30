import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Form, FormGroup, FormControl, ControlLabel, Button, ButtonToolbar } from 'react-bootstrap';

class CommentForm extends Component {

    componentDidUpdate() {

        const { isSaved } = this.props;

        if (isSaved) {
            ReactDOM.findDOMNode(this.refs.content).value = '';
        }
    }


    saveChanges(event) {
        event.preventDefault();

        const { handleSubmit, suggestionId } = this.props;

        const content = ReactDOM.findDOMNode(this.refs.content).value.trim();
        const isAnonymous = ReactDOM.findDOMNode(this.refs.isAnonymous).checked;

        handleSubmit(suggestionId, content, isAnonymous);
    }

    render() {
        const { isAdding, isAuthenticated } = this.props;

        return (
            <Form onSubmit={this.saveChanges.bind(this)} className='form-horizontal new-comment'>
                <FormGroup controlId='content'>
                    <ControlLabel className='col-sm-2'>Your comment</ControlLabel>
                    <div className='col-sm-8'>
                        {
                            isAuthenticated &&
                            <FormControl componentClass='textarea' rows='3' ref='content' placeholder='Type your comment...' required/>
                        }
                        {
                            !isAuthenticated &&
                            <FormControl componentClass='textarea' rows='3' ref='content' placeholder='Login or Sign-up to post a comment' disabled/>
                        }
                    </div>
                </FormGroup>
                <FormGroup>
                    <ControlLabel className='col-sm-2'>Anonymously ?</ControlLabel>
                    <div className='col-sm-8'>
                        <input type="checkbox" ref='isAnonymous' value='anonymous'/>
                    </div>
                </FormGroup>
                <ButtonToolbar>
                    {
                        isAdding &&
                        <Button bsStyle='primary' disabled>Saving...</Button>
                    }
                    {
                        !isAdding && isAuthenticated &&
                        <Button type='submit' bsStyle='primary'>Post comment</Button>
                    }
                    {
                        !isAdding && !isAuthenticated &&
                        <Button type='submit' bsStyle='primary' disabled>Post comment</Button>
                    }
                </ButtonToolbar>
            </Form>
        );
    }
}

CommentForm.propTypes = {
    isAdding: PropTypes.bool.isRequired,
    isSaved: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

export default CommentForm;