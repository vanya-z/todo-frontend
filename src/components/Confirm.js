import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTrashAlt from '@fortawesome/fontawesome-free-solid/faTrashAlt'

class Confirm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <span>
        <Button className="btn btn-sm btn-outline-light align-top" onClick={this.toggle}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} size="sm" centered="true">
          <ModalHeader toggle={this.toggle}>Confirmation</ModalHeader>
          <ModalBody>Are you sure want to delete the task?</ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.props.deleteTask}>Yes</Button>
            <Button color="light" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </span>
    );
  }
}

export default Confirm;