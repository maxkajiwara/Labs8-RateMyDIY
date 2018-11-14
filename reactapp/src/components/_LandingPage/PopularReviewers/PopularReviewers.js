// Import Dependencies
import React, { Component } from "react";
import styled from 'styled-components';
// import { Link } from "react-router-dom";

//Import components
import { ReviewerTile } from "../../../components";

// styled-components


const PopularReviewersHeader = styled.h1`
  font-size: 18px;
  width: 100%;
  margin: 10px 25px; 
`;

class Reviewers extends Component {
  // constructor() {
  //   super();
  // } // useless constructor
  componentDidMount() { }
  render() {
    return (
      <div className="projects-container">
        <PopularReviewersHeader>Popular Reviewers</PopularReviewersHeader>
        <div className="projects">
          {this.props.reviewers.map(reviewer => (
            <ReviewerTile reviewer={reviewer} />
          ))}
        </div>
      </div>
    );
  }
}

export default Reviewers;
