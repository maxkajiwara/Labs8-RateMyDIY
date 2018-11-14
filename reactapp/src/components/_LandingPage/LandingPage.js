// Import Dependencies
import React, { Component } from "react";
// import { NavLink, Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import { getProjects, getMakers, getReviewers } from "../../actions";
import styled from 'styled-components';

//Import components
import {
  DropDown,
  FeaturedProjects,
  PopularMakers,
  PopularReviewers,
  SearchBar
} from "../../components";

// styled-components
const LandingPageWrapper = styled.div`
  width: 100%;
`;

const ProjectsWrapper = styled.div`
  width: 100%;
  margin: 20px auto;
  border: 1px solid blue;
`;

const ProjectH1 = styled.h1`
  font-size: 18px;
  width: 100%;
  margin: 10px 25px;
`;

class LandingPage extends Component {
  constructor() {
    super();
    this.state = { input: "" };
  }

  componentDidMount() {
    console.log("component did mount!");
    this.props.getProjects();
    this.props.getMakers();
    this.props.getReviewers();
  }

  handleChange = e => {
    console.log(e.target.value);
    this.setState({ ...this.state, input: e.target.value });
  };

  handleSearch = e => {
    //HTTP request to server
    //Get search results from server
    //Save to Redux store
  };

  render() {
    // console.log(SearchBar);
    return (
      <LandingPageWrapper>
        <DropDown />
        <SearchBar handleChange={this.handleChange} />

        <FeaturedProjects featuredProjects={this.props.featuredProjects} />
        <PopularMakers popularMakers={this.props.popularMakers} />
        <PopularReviewers reviewers={this.props.popularReviewers} />
      </LandingPageWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    featuredProjects: state.landingPageReducer.featuredProjects,
    popularMakers: state.landingPageReducer.popularMakers,
    popularReviewers: state.landingPageReducer.popularReviewers
  };
};

export default connect(
  mapStateToProps,
  { getProjects, getMakers, getReviewers }
)(LandingPage);
