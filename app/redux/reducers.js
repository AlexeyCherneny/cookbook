import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import {
  CreateRecipeReducer,
  CreateUserCategoryReducer,
  UserReducer,
  CategoriesReducer,
  RecipesReducer,
} from '../screens';
import navigation from '../routes/navigationReducer';

export default combineReducers({
  recipes: RecipesReducer,
  createCategoryRecipe: CreateRecipeReducer,
  createUserCategory: CreateUserCategoryReducer,
  categories: CategoriesReducer,
  navigation,
  user: UserReducer,
  form,
});
