import { UserApi } from '../../../constants/api';

const userApi = new UserApi();

export const FETCH_USER_INFO = 'FETCH_USER_INFO';
export const FETCH_USER_INFO_SUCCESS = 'FETCH_USER_INFO_SUCCESS';
export const FETCH_USER_INFO_ERROR = 'FETCH_USER_INFO_ERROR';

export const fetchUserInfo = args => async dispatch => {
  dispatch({ type: FETCH_USER_INFO });

  try {
    const resp = await userApi.getUserInfo(args);

    return dispatch({ type: FETCH_USER_INFO_SUCCESS, payload: resp.data });
  } catch (err) {
    return dispatch({ type: FETCH_USER_INFO_ERROR });
  }
};
