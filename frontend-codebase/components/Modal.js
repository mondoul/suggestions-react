import React, { Component, PropTypes } from 'react';
import { Modal as BootstrapModal } from 'react-bootstrap';

class Modal extends Component {

    render() {

        const { title, showModal, close, children } = this.props;

        return (
            <BootstrapModal show={showModal} onHide={close}>
                <BootstrapModal.Header closeButton>
                    <BootstrapModal.Title>{title}</BootstrapModal.Title>
                </BootstrapModal.Header>
                <BootstrapModal.Body>
                    {children}
                </BootstrapModal.Body>
            </BootstrapModal>
        )
    }
}

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    showModal: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};

export default Modal;


