import { CategoriesApi } from '../../../constants/api';

const categoriesApi = new CategoriesApi();

export const FETCH_CATEGORY_RECIPES = 'FETCH_CATEGORY_RECIPES';

export const fetchCategoryRecipes = () => ({
  type: FETCH_CATEGORY_RECIPES,
  payload: categoriesApi.fetchCategoryRecipes(),
});
