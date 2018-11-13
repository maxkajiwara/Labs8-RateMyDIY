import {
  GET_EMAIL,
  GET_EMAIL_ERROR,
  GET_EMAIL_SUCCESS,
  UPDATE_EMAIL,
  UPDATE_EMAIL_ERROR,
  UPDATE_EMAIL_SUCCESS
} from '../actions';

const initialState = { email: '', error: '' }

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_EMAIL:
      return { ...state, fetching: true };

    case GET_EMAIL_SUCCESS:
      return {
        ...state,
        users: action.payload,
        fetching: false
      };

    case GET_EMAIL_ERROR:
      return {
        ...state,
        fetching: false,
        error: `${action.payload}`
      };

    case UPDATE_EMAIL:
      return { ...state, fetching: true };

    case UPDATE_EMAIL_SUCCESS:
      return {
        ...state,
        users: action.payload,
        fetching: false
      };

    case UPDATE_EMAIL_ERROR:
      return {
        ...state,
        fetching: false,
        error: `${action.payload}`
      };

    default:
      return state;
  }
}

export default settingsReducer