// Import Dependencies
import React, { Component } from "react";
import { NavLink, Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import { getProjects } from "../../actions";
import "./LandingPage.css";

//Import component
const {
  FeaturedProjects,
  PopularMakers,
  PopularReviewers
} = require("../../components");

class LandingPage extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    console.log("component did mount!");
    this.props.getProjects();
  }

  render() {
    return (
      <div className="landing-page-container">
        <FeaturedProjects featuredProjects={this.props.featuredProjects} />
        <PopularMakers popularMakers={this.props.popularMakers} />
        <PopularReviewers reviewers={this.props.popularReviewers} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("heres state");
  console.log(state);
  return {
    featuredProjects: state.landingPageReducer.featuredProjects,
    popularMakers: state.landingPageReducer.popularMakers,
    popularReviewers: state.landingPageReducer.popularReviewers
  };
};

export default connect(
  mapStateToProps,
  { getProjects }
)(LandingPage);
