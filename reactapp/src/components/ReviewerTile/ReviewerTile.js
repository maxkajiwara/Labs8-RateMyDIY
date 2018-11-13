// Import Dependencies
import React from "react"; // removed ", { Component }": unused
// import { Link } from "react-router-dom";
import "./ReviewerTile.css";

const ReviewerTile = props => {
  return (
    <div className="project">
      {/* removed src="${https://someAWS.S3.URL}" */}
      <img alt="PLACEHOLDER! alt text" className="project-image" src="" />
      <p className="project-name">{props.reviewer.name}</p>
    </div>
  );
};

export default ReviewerTile;
