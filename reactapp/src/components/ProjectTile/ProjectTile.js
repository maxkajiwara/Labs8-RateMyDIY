// Import Dependencies
import React from "react"; // removed ", { Component }": unused
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
const ProjectTileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const ProjectImage = styled.div`
  width: 200px;
  height: 200px;
  background: #FEE;
`;
class ProjectTile extends React.Component {
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
      <ProjectTileWrapper>
        {/* removed src="${https://someAWS.S3.URL}" */}
        <ProjectImage alt="PLACEHOLDER! alt text" className="project-image" src="" ></ProjectImage>
        <div className="star-rating">
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
        </div>
        <p className="project-name">{props.project.name}</p>
        <Link to="/:author">{props.project.author}</Link>
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
            {this.props.project.name}
          </ModalHeader>
          <ModalBody>
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
          </ModalBody>
          <ModalBody>{this.props.project.author}</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Do Something
            </Button>{" "}
          </ModalFooter>
        </Modal>
        {/* React strap Modal */}
      </ProjectTileWrapper>
    );
  };
};

export default ProjectTile;
