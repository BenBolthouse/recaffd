import { fetch } from './csrf.js';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const setUser = user => ({
  type: SET_USER,
  payload: user,
});

const removeUser = () => ({
  type: REMOVE_USER,
});

/**
 * Request a new auth token by providing login credentials.
 */
export const login = ({ emailAddress, password }) => async dispatch => {
  const res = await fetch('/api/sessions', {
    method: 'POST',
    body: JSON.stringify({ emailAddress, password }),
  });
  dispatch(setUser(res.data.data));
  return res;
};

/**
 * Fetch session identity data from the API if an auth token is present.
 */
export const restoreUser = () => async dispatch => {
  const res = await fetch('/api/sessions');
  dispatch(setUser(res.data.data));
  return res;
};

/**
 * Create a new user from personal information.
 */
export const signup = user => async dispatch => {
  const { username, emailAddress, password, confirmPassword } = user;
  const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({
      username,
      emailAddress,
      password,
      confirmPassword,
    }),
  });
  dispatch(setUser(response.data.user));
  return response;
};

/**
 * Remove the auth token.
 */
export const logout = () => async dispatch => {
  const response = await fetch('/api/sessions', {
    method: 'DELETE',
  });
  dispatch(removeUser());
  return response;
};

const initialState = { user: null };

function reducer(state = initialState, {type, payload}) {
  let newState;
  switch (type) {
    case SET_USER:
      newState = Object.assign({}, state, { user: payload });
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state, { user: null });
      return newState;
    default:
      return state;
  }
}

export default reducer;
