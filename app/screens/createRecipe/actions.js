import { CategoriesApi } from '../../../constants/api';
import { fetchCategoryRecipes } from '../home/actions';

const categoriesApi = new CategoriesApi();

export const CREATE_CATEGORY_RECIPE = 'CREATE_CATEGORY_RECIPE';
export const CREATE_CATEGORY_RECIPE_SUCCES = 'CREATE_CATEGORY_RECIPE_SUCCESS';
export const CREATE_CATEGORY_RECIPE_ERROR = 'CREATE_CATEGORY_RECIPE_ERROR';

export const createRecipe = args => async dispatch => {
  console.log('we are dispatching create recipe');
  dispatch({ type: CREATE_CATEGORY_RECIPE });

  try {
    console.log('We are requesting');
    await categoriesApi.createCategoryRecipe(args);
    console.log('request come through and we dispatcj');
    dispatch({ type: CREATE_CATEGORY_RECIPE_SUCCES });
  } catch (err) {
    console.log(err);
    return dispatch({ type: CREATE_CATEGORY_RECIPE_ERROR });
  }

  return await dispatch(fetchCategoryRecipes());
};
