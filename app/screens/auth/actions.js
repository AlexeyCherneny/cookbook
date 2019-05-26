import { User } from '../../../constants/api';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';

function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    user: data.user,
    token: data.token,
  };
}

function logoutSuccess(data) {
  return {
    type: LOGOUT_SUCCESS,
    user: data.user,
    token: data.token,
  };
}

function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}

function logoutError(error) {
  return {
    type: LOGOUT_ERROR,
    error,
  };
}

export function login(token, provider) {
  return async dispatch => {
    dispatch({ type: LOGIN });
    try {
      const data = await User.login({ token, provider });

      return dispatch(loginSuccess(data));
    } catch (err) {
      dispatch(loginError(err));
    }
  };
}

export function logout() {
  return async dispatch => {
    dispatch({ type: LOGOUT });
    try {
      return dispatch(logoutSuccess());
    } catch (err) {
      dispatch(logoutError(err));
    }
  };
}
