// Dependencies
import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./SearchPage.css";

//Import components
import { SearchBar, ProjectTile } from "../../components";

class SearchPage extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          id: 1,
          name: "Micro brew IPA",
          star_count: 4.2,
          author: "alejandrok",
          photo_url: "http:// someURL.com"
        },
        {
          id: 2,
          name: "Steak Recipe",
          star_count: 4.2,
          author: "john",
          photo_url: "someURL.com"
        },
        {
          id: 2,
          name: "Another cool project",
          star_count: 4.2,
          author: "alejandro",
          photo_url: "someURL.com"
        }
      ],
      input: ""
    };
  }
  handleChange = e => {
    console.log(e.target.value);
  };

  render() {
    console.log("hellooooo");
    return (
      <div className="search-page-container">
        <SearchBar handleChange={this.handleChange} />

        <div className="search-options" />
        <div className="search-results">
          <h1>Search results</h1>
          {this.state.projects.map(project => (
            <ProjectTile project={project} />
          ))}
        </div>
      </div>
    );
  }
}

export default SearchPage;
