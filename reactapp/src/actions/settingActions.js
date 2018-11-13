import axios from 'axios';

// example action
export const GET_EMAIL = 'GET_EMAIL';
export const GET_EMAIL_SUCCESS = 'GET_EMAIL_SUCCESS';
export const GET_EMAIL_ERROR = 'GET_EMAIL_ERROR';
export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_EMAIL_SUCCESS = 'UPDATE_EMAIL_SUCCESS';
export const UPDATE_EMAIL_ERROR = 'UPDATE_EMAIL_ERROR';

// Test loading messages
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const getEmail = () => {
  return dispatch => {
    dispatch({ type: GET_EMAIL });

    axios
      .get('/api/exampleEndpoint')

      .then(async ({ data }) => {
        await sleep(1000);
        dispatch({ type: GET_EMAIL_SUCCESS, payload: data });
      })

      .catch(error => dispatch({ type: GET_EMAIL_ERROR, payload: error }));
  };
};

export const updateEmail = () => {
  return dispatch => {
    dispatch({ type: UPDATE_EMAIL });

    axios
      .post('/api/exampleEndpoint')

      .then(async ({ data }) => {
        await sleep(1000);
        dispatch({ type: UPDATE_EMAIL_SUCCESS, payload: data });
      })

      .catch(error => dispatch({ type: UPDATE_EMAIL_ERROR, payload: error }));
  };
};
