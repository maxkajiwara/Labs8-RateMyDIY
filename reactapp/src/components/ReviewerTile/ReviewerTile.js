// Import Dependencies
import React from "react"; // removed ", { Component }": unused
// import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import styled from 'styled-components';
const ReviewerTileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const ReviewerImage = styled.div`
  width: 200px;
  height: 200px;
  background: #FEE;
`;

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
      <ReviewerTileWrapper>
        {/* removed src="${https://someAWS.S3.URL}" */}
        <ReviewerImage alt="PLACEHOLDER! alt text" className="project-image" src="" ></ReviewerImage>
        <p className="project-name">{props.reviewer.name}</p>
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
      </ReviewerTileWrapper>
    );
  };
};

export default ReviewerTile;
