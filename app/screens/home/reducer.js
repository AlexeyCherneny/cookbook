import { FETCH_CATEGORY_RECIPES, FETCH_USER_CATEGORIES } from './actions';

const INITIAL_STATE = {
  recipes: {
    recipes: [],
    categoryRecipes: [],
    isFetched: false,
    error: {
      on: false,
      message: null,
    },
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${FETCH_CATEGORY_RECIPES}_PENDING`:
      return { INITIAL_STATE };
    case `${FETCH_CATEGORY_RECIPES}_FULFILLED`:
      return {
        recipes: {
          recipes: [],
          categoryRecipes: action.payload,
          isFetched: true,
          error: {
            on: false,
            message: null,
          },
        },
      };
    case `${FETCH_CATEGORY_RECIPES}_REJECTED`:
      return {
        recipes: {
          recipes: [],
          categoryRecipes: [],
          isFetched: true,
          error: {
            on: true,
            message: 'Error while fetching recipes',
          },
        },
      };
    default:
      return state;
  }
};
