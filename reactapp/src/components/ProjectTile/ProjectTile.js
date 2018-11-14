// Import Dependencies
import React from "react"; // removed ", { Component }": unused
import { Link } from "react-router-dom";
import styled from 'styled-components';
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
const ProjectTile = props => {
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
    </ProjectTileWrapper>
  );
};

export default ProjectTile;
