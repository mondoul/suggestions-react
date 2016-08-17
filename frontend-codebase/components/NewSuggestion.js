import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { assignIn } from 'lodash';
import NewSuggestionStore from '../stores/NewSuggestionStore';
import NewSuggestionActions from '../actions/NewSuggestionActions';

class NewSuggestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = NewSuggestionStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        NewSuggestionStore.listen(this.onChange);
    }

    componentWillUnmount() {
        NewSuggestionStore.unlisten(this.onChange);
    }

    close() {
        NewSuggestionActions.closeModal();
    }

    open() {
        NewSuggestionActions.openModal();
    }

    save(event) {
        event.preventDefault();

        let title = this.state.title.trim();
        let content = this.state.content.trim();

        if (!title) {
            NewSuggestionActions.invalidTitle();
            this.refs.titleTextField.focus();
        }

        if (!content) {
            NewSuggestionActions.invalidContent();
            this.refs.contentTextarea.focus();
        }

        if (title && content) {
            NewSuggestionActions.addSuggestion(title, content);
        }

    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
                <Modal.Header closeButton>
                    <Modal.Title>New Suggestion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='form-horizontal'>
                        <div className={'form-group ' + this.state.titleValidationState}>
                            <label form='title' className='col-sm-2 control-label'>Title</label>
                            <div className='col-sm-8'>
                                <input type='text' id='title' placeholder='Suggestion Title' ref='titleTextField'
                                       value={this.state.title} className='form-control' onChange={NewSuggestionActions.updateTitle} autoFocus/>
                                <span className='help-block'>{this.state.helpBlockTitle}</span>
                            </div>
                        </div>
                        <div className={'form-group ' + this.state.contentValidationState}>
                            <label form='suggestion' className='col-sm-2 control-label'>Suggestion</label>
                            <div className='col-sm-8'>
                                <textarea id='suggestion' rows='5' placeholder='Type your suggestion here...' ref='contentTextarea'
                                          value={this.state.content} className='form-control' onChange={NewSuggestionActions.updateContent}/>
                                <span className='help-block'>{this.state.helpBlockContent}</span>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.close.bind(this)}>Cancel</Button>
                    <Button onClick={this.save.bind(this)} bsStyle="primary">Save changes</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default NewSuggestion;