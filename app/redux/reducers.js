import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import {
  HomeReducer,
  CreateRecipeReducer,
  UserReducer,
} from '../screens';
import navigation from '../routes/navigationReducer';

export default combineReducers({
  home: HomeReducer,
  createCategoryRecipe: CreateRecipeReducer,
  navigation,
  user: UserReducer,
  form,
});
