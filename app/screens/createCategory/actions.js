import { UserApi } from '../../../constants/api';
import { fetchUserCategories } from '../home/actions';

const userApi = new UserApi();

export const CREATE_USER_CATEGORY = 'CREATE_USER_CATEGORY';
export const CREATE_USER_CATEGORY_SUCCESS = 'CREATE_USER_CATEGORY_SUCCESS';
export const CREATE_USER_CATEGORY_ERROR = 'CREATE_USER_CATEGORY_ERROR';

export const createUserCategory = args => async dispatch => {
  dispatch({ type: CREATE_USER_CATEGORY });

  try {
    await userApi.createUserCategory(args);

    dispatch({ type: CREATE_USER_CATEGORY_SUCCESS });
  } catch (err) {
    return dispatch({ type: CREATE_USER_CATEGORY_ERROR });
  }

  return await dispatch(fetchUserCategories(args));
};
