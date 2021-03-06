// Import Dependencies
import React, { Component } from "react";
// import { NavLink, Link, Route } from "react-router-dom";
import styled from 'styled-components';
import { connect } from "react-redux";
import { getProjects, getMakers, getReviewers } from "../../actions";

//Import components
import {
  DropDown,
  FeaturedProjects,
  PopularMakers,
  PopularReviewers,
  SearchBar
} from "../../components";

// styled-components
const LandingPageContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 80%;
`;
const LandingPageWrapper = styled.div`
  width: 100%;
`;
const DropdownMenu = styled.div`
  width: 100%;
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
        <DropdownMenu>
          <DropDown />
        </DropdownMenu>
        <LandingPageContentWrapper>
          <SearchBar handleChange={this.handleChange} />

          <FeaturedProjects featuredProjects={this.props.featuredProjects} />
          <PopularMakers popularMakers={this.props.popularMakers} />
          <PopularReviewers reviewers={this.props.popularReviewers} />
        </LandingPageContentWrapper>
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
