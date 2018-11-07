import { GET_PROJECTS } from "../actions";

const initialState = {
  featuredProjects: [
    {
      id: 1,
      name: "Micro brew IPA",
      star_count: 4.2,
      author: "alejandrok",
      photo_url: "http:// someURL.com"
    }
  ],
  popularMakers: [
    {
      id: 1,
      name: "Alejandrok",
      star_count: 4.2,
      author: "alejandrok",
      photo_url: "http:// someURL.com"
    }
  ],
  popularReviewers: [
    {
      id: 2,
      name: "Tristen",
      star_count: 4.2,
      author: "john",
      photo_url: "someURL.com"
    }
  ]
};

const landingPageReducer = (state = initialState, action) => {
  switch (action.type) {
    // example action
    case GET_PROJECTS:
      return { ...state, featuredProjects: action.payload.featuredProjects };

    default:
      return state;
  }
};

export default landingPageReducer;
