// Import Dependencies
import React, { Component } from "react";
import { NavLink, Link, Route } from "react-router-dom";

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
    this.state = {
      featuredProjects: [
        {
          id: 1,
          name: "Micro brew IPA",
          star_count: 4.2,
          author: "alejandrok",
          photo_url: "http:// someURL.com"
        },
        {
          id: 1,
          name: "Steak Recipe",
          star_count: 4.2,
          author: "john",
          photo_url: "someURL.com"
        }
      ]
    };
  }

  render() {
    return (
      <div className="landing-page-container">
        <FeaturedProjects featuredProjects={this.state.featuredProjects} />
      </div>
    );
  }
}

export default LandingPage;
