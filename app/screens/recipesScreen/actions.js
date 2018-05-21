import { CategoriesApi, RecipesApi } from '../../../constants/api';

const categoriesApi = new CategoriesApi();
const recipesApi = new RecipesApi();

export const FETCH_CATEGORY_RECIPES = 'FETCH_CATEGORY_RECIPES';
export const SET_CURRENT_RECIPE = 'SET_CURRENT_RECIPE';
export const UPDATE_RECIPE = 'UPDATE_RECIPE';
export const UPDATE_RECIPE_SUCCESS = 'UPDATE_RECIPE_SUCCESS';
export const UPDATE_RECIPE_ERROR = 'UPDATE_RECIPE_ERROR';
export const DELETE_CATEGORY_RECIPE = 'DELETE_CATEGORY_RECIPE';
export const DELETE_CATEGORY_RECIPE_SUCCESS = 'DELETE_CATEGORY_RECIPE_SUCCESS';
export const DELETE_CATEGORY_RECIPE_ERROR = 'DELETE_CATEGORY_RECIPE_ERROR';

export const setCurrentRecipe = (args) => ({
  type: SET_CURRENT_RECIPE,
  payload: args,
});

export const fetchCategoryRecipes = (args) => ({
  type: FETCH_CATEGORY_RECIPES,
  payload: categoriesApi.fetchCategoryRecipes(args),
});

export const updateRecipe = args => async dispatch => {
  dispatch({ type: UPDATE_RECIPE });

  try {
    const resp = await recipesApi.updateRecipe(args);

    return dispatch({ type: UPDATE_RECIPE_SUCCESS, payload: resp });
  } catch (err) {
    return dispatch({ type: UPDATE_RECIPE_ERROR });
  }
};

export const deleteCategoryRecipe = args => async dispatch => {
  dispatch({ type: DELETE_CATEGORY_RECIPE });

  try {
    const resp = await categoriesApi.deleteCategoryRecipe(args);

    dispatch({ type: DELETE_CATEGORY_RECIPE_SUCCESS, payload: { ...resp, ...args } });
  } catch (err) {
    return dispatch({ type: DELETE_CATEGORY_RECIPE_ERROR });
  }

  return dispatch(fetchCategoryRecipes(args));
};
