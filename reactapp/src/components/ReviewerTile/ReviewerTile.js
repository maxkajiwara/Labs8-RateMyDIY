// Import Dependencies
import React from "react"; // removed ", { Component }": unused
// import { Link } from "react-router-dom";
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

const ReviewerTile = props => {
  return (
    <ReviewerTileWrapper>
      {/* removed src="${https://someAWS.S3.URL}" */}
      <ReviewerImage alt="PLACEHOLDER! alt text" className="project-image" src="" ></ReviewerImage>
      <p className="project-name">{props.reviewer.name}</p>
    </ReviewerTileWrapper>
  );
};

export default ReviewerTile;
