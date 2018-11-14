// Import Dependencies
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import styled from 'styled-components';
//Import components
import { ProjectTile } from "../../../components";

//Import Styling
const FeaturedProjectsWrapper = styled.div`
  width: 100%;
  margin: 20px auto;
  border: 1px solid blue;
`;

const FeaturedProjectTitle = styled.h1`
  font-size: 18px;
  width: 100%;
  margin: 10px 25px;  
`;

const ProjectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

class FeaturedProjects extends Component {
  // constructor() {
  //   super();
  // } // useless constructor

  render() {
    return (
      <FeaturedProjectsWrapper>
        <FeaturedProjectTitle>Featured Projects</FeaturedProjectTitle>
        <ProjectWrapper>
          {this.props.featuredProjects.map(project => (
            <ProjectTile project={project} />
          ))}
        </ProjectWrapper>
      </FeaturedProjectsWrapper>
    );
  }
}

export default FeaturedProjects;
