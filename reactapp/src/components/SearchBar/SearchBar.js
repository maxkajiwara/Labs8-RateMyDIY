import React from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
import "./SearchBar.css";

//Apply styles
// const SearchBar = styled.div`
//   width: 400px;
//   height: 35px;
//   font-size: 14px;
// `;

const SearchBar = props => {
  return (
    <div className="search-bar">
      <select name="Maker" id="maker">
        {/* Need to poll DB for list of makers */}
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <select name="Reviewer" id="reviewer">
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <select name="Category" id="category">
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <select name="Stars" id="stars">
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <input
        onChange={e => props.handleChange(e)}
        placeholder="Find a DIY project"
      />
      <button className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;
