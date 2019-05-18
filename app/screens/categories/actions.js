import { UserApi, CategoriesApi } from '../../../constants/api';

const userApi = new UserApi();
const categoriesApi = new CategoriesApi();

export const FETCH_USER_CATEGORIES = 'FETCH_USER_CATEGORIES';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const UPDATE_CATEGORY_SUCCESS = 'UPDATE_CATEGORY_SUCCESS';
export const UPDATE_CATEGORY_ERROR = 'UPDATE_CATEGORY_ERROR';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const DELETE_CATEGORY_SUCCESS = 'DELETE_CATEGORY_SUCCESS';
export const DELETE_CATEGORY_ERROR = 'DELETE_CATEGORY_ERROR';
export const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY';

export const fetchUserCategories = args => ({
  type: FETCH_USER_CATEGORIES,
  payload: userApi.fetchUserCategories(args),
});

export const setCurrentCategory = args => ({
  type: SET_CURRENT_CATEGORY,
  payload: args,
});

export const updateCategory = args => async dispatch => {
  dispatch({ type: UPDATE_CATEGORY });

  try {
    const resp = await categoriesApi.updateCategory(args);

    return dispatch({ type: UPDATE_CATEGORY_SUCCESS, payload: resp });
  } catch (err) {
    return dispatch({ type: UPDATE_CATEGORY_ERROR });
  }
};

export const deleteCategory = args => async dispatch => {
  dispatch({ type: DELETE_CATEGORY });

  try {
    const resp = await userApi.deleteUserCategory(args);

    dispatch({ type: DELETE_CATEGORY_SUCCESS, payload: { ...resp, ...args } });
  } catch (err) {
    return dispatch({ type: DELETE_CATEGORY_ERROR });
  }

  dispatch(fetchUserCategories(args));
};
