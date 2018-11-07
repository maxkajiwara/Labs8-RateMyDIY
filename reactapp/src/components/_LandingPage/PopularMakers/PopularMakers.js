// Import Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";

//Import components
import { MakerTile } from "../../../components";

//Import Styling

class PopularMakers extends Component {
  constructor() {
    super();
    this.state = { makers: [] };
  }
  componentDidMount() {
    this.setState({ ...this.state, makers: this.props.popularMakers });
  }
  render() {
    return (
      <div className="projects-container">
        <h1>Popular Makers</h1>
        <div className="projects">
          {this.state.makers.map(maker => (
            <MakerTile maker={maker} />
          ))}
        </div>
      </div>
    );
  }
}

export default PopularMakers;
