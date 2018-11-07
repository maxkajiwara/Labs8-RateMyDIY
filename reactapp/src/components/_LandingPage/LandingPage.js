// Import Dependencies
import React, { Component } from "react";
import { NavLink, Link, Route } from "react-router-dom";

import "./LandingPage.css";

const data = require("../dummyData.js");
//Import component
const {
  FeaturedProjects,
  PopularMakers,
  PopularReviewers
} = require("../../components");

class LandingPage extends Component {
  constructor() {
    super();

    this.state = {
      featuredProjects: data.featuredProjects,
      popularMakers: data.popularMakers,
      popularReviewers: data.popularReviewers
    };
  }

  render() {
    return (
      <div className="landing-page-container">
        <FeaturedProjects featuredProjects={this.state.featuredProjects} />
        <PopularMakers popularMakers={this.state.popularMakers} />
        <PopularReviewers reviewers={this.state.popularReviewers} />
      </div>
    );
  }
}

export default LandingPage;
