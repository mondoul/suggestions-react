import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Form, FormGroup, FormControl, ControlLabel, Button, ButtonToolbar } from 'react-bootstrap';

class CategoryForm extends Component {

    saveChanges(event) {
        event.preventDefault();

        const { handleSubmit } = this.props;

        let title = ReactDOM.findDOMNode(this.refs.title).value.trim();

        handleSubmit(title);
    }

    render() {

        const { cancel, savingCategoryPending } = this.props;

        return (
            <Form onSubmit={this.saveChanges.bind(this)} className='form-horizontal new-form'>
                <FormGroup controlId='title'>
                    <ControlLabel className='col-sm-2'>Title</ControlLabel>
                    <div className='col-sm-8'>
                        <FormControl type='text' ref='title' placeholder='Category Title' required/>
                    </div>
                </FormGroup>
                <ButtonToolbar>
                    {
                        savingCategoryPending &&
                        <Button bsStyle='primary' disabled>Saving...</Button>
                    }
                    {
                        !savingCategoryPending &&
                        <Button type='submit' bsStyle='primary'>Save Changes</Button>
                    }
                    <Button onClick={cancel}>Cancel</Button>
                </ButtonToolbar>
            </Form>


        );
    }
}

CategoryForm.propTypes = {
    savingCategoryPending: PropTypes.bool.isRequired,
    cancel: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

export default CategoryForm;