import axios from "axios";

// example action
export const GET_PROJECTS = "GET_PROJECTS";

// Test loading messages
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const getProjects = () => {
  return dispatch => {
    const data = require("../components/dummyData.js");
    dispatch({ type: GET_PROJECTS, payload: data });
  };
};
