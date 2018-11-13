// Import Dependencies
import React from "react"; // removed ", { Component }": unused
import { Link } from "react-router-dom";
import "./ProjectTile.css";

const ProjectTile = props => {
  return (
    <div className="project">
      {/* removed src="${https://someAWS.S3.URL}" */}
      <img alt="PLACEHOLDER! alt text" className="project-image" src="" />
      <div className="star-rating">
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
      </div>
      <p className="project-name">{props.project.name}</p>
      <Link to="/:author">{props.project.author}</Link>
    </div>
  );
};

export default ProjectTile;
