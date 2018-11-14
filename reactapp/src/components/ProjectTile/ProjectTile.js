// Import Dependencies
import React from "react"; // removed ", { Component }": unused
import { Link } from "react-router-dom";
import "./ProjectTile.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

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
      <div className="project">
        <img className="project-image" src="${https://someAWS.S3.URL}" />
        <div className="star-rating">
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
        </div>
        <p className="project-name">{this.props.project.name}</p>
        <Link to="/:author">{this.props.project.author}</Link>

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
      </div>
    );
  }
}

export default ProjectTile;
