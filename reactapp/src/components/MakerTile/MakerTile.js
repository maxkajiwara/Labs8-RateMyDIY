// Import Dependencies
import React from "react"; // removed ", { Component }": unused
// import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import styled from "styled-components";
// import "./MakerTile.css";
const MakerTileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const ProjectImage = styled.div`
  width: 200px;
  height: 200px;
  background: #fee;
`;
class MakerTile extends React.Component {
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
      <MakerTileWrapper>
        {/* removed src="${https://someAWS.S3.URL}" */}
        <ProjectImage alt="PLACEHOLDER! alt text" src="" />
        <div className="star-rating">
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
        </div>
        <p className="project-name">{this.props.maker.name}</p>
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
            {this.props.maker.name}
          </ModalHeader>
          <ModalBody>
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Do Something
            </Button>{" "}
          </ModalFooter>
        </Modal>
        {/* React strap Modal */}
      </MakerTileWrapper>
    );
  }
}

export default MakerTile;
