import React, { Component, PropTypes } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import Confirm from 'react-confirm-bootstrap';

class SuggestionActionsDropdown extends Component {
    onEdit() {
        const { onActionSelected, id } = this.props;
        onActionSelected('edit', {id});
    }

    onDeleteConfirm() {
        const { onActionSelected, id } = this.props;
        onActionSelected('delete', {id});
    }

    render() {

        return (
            <DropdownButton bsStyle='default' pullRight={true} title='Actions' id='suggestion' >
                <MenuItem eventKey='edit' onSelect={() => this.onEdit() }>Edit my suggestion</MenuItem>
                <Confirm onConfirm={() => this.onDeleteConfirm() } body='Are you sure you want to delete your suggestion? This action cannot be reversed.'
                         title='Delete suggestion' showCancelButton={true} >
                    <MenuItem eventKey='delete' onSelect={() => {return;}}>Delete my suggestion</MenuItem>
                </Confirm>
            </DropdownButton>
        )
    }
}

SuggestionActionsDropdown.propTypes = {
    id: PropTypes.string.isRequired,
    onActionSelected: PropTypes.func.isRequired
};

export default SuggestionActionsDropdown;
