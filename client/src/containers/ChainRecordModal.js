import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PlantVerifyModal from '../components/PlantVerifyModal';
import CenterVerifyModal from '../components/CenterVerifyModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

class ChainRecordModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
  }
}

  //toggle modal showing
  toggle =  () => {
    this.setState({
      modal: !this.state.modal, 
    });
  }

  render() {
        return (
          <>
          <div className="verify-button" onClick={this.toggle}>Query the Chain</div>
          <Modal className={this.props.className} isOpen={this.state.modal} toggle={this.toggle} >
        <ModalHeader className="chain-record-modal-header" toggle={this.toggle}>Chain Record for Contract ID #{this.props.contract_id}, Delivery ID #{this.props.deliveryId} {this.props.name ? <> from center: {this.props.name}</> : <></>}</ModalHeader>
            <ModalBody className="chain-record-modal-body">
              {
                !this.props.verified ?
                <>
                <div className="yellow-circle"></div><span>   Awaiting Plant Verification</span><br />
                <CenterVerifyModal /> 
                </> :
                <PlantVerifyModal dbDiscrepancy={this.props.dbDiscrepancy}/>
              }
            </ModalBody>
            <ModalFooter className="chain-record-modal-footer">
              <Button color="primary" onClick={this.toggle}>Ok</Button>
            </ModalFooter>
          </Modal>
          </>
        )
    } 
  }


export default ChainRecordModal;