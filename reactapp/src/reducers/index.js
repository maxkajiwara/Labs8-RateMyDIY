import { combineReducers } from "redux";
import exampleReducer from "./exampleReducer";
import landingPageReducer from "./landingPageReducer";

export default combineReducers({
  exampleReducer,
  landingPageReducer
});
