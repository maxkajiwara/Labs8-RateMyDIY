// Import Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ReviewerTile.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ReviewerTile extends React.Component {
  constructor(props) {
    super(props);
    {
      /* React strap Modal */
    }
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
    {
      /* React strap Modal */
    }
  }

  render() {
    return (
      <div className="project">
        <img className="project-image" src="${https://someAWS.S3.URL}" />
        <p className="project-name">{this.props.reviewer.name}</p>

        {/* React strap Modal */}
        <Button color="danger" onClick={this.toggle}>
          {" "}
          <h3>Review</h3>
          {this.props.buttonLabel}{" "}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          dialogClassName="my-modal"
        >
          <ModalHeader toggle={this.toggle}>
          {this.props.reviewer.name}
          </ModalHeader>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Do Something
            </Button>{" "}
          </ModalFooter>
        </Modal>
        {/* React strap Modal */}
      </div>
    );
  }
}

export default ReviewerTile;
