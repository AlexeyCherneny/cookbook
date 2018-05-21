import { CategoriesApi, UserApi } from '../../../constants/api';

const categoriesApi = new CategoriesApi();
const userApi = new UserApi();

export const FETCH_CATEGORY_RECIPES = 'FETCH_CATEGORY_RECIPES';
export const FETCH_USER_CATEGORIES = 'FETCH_USER_CATEGORIES';

export const fetchCategoryRecipes = args => ({
  type: FETCH_CATEGORY_RECIPES,
  payload: categoriesApi.fetchCategoryRecipes(args),
});

export const fetchUserCategories = args => ({
  type: FETCH_USER_CATEGORIES,
  payload: userApi.fetchUserCategories(args),
});
