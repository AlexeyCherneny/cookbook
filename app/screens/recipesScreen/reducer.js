import {
  FETCH_CATEGORY_RECIPES,
  UPDATE_RECIPE,
  UPDATE_RECIPE_SUCCESS,
  UPDATE_RECIPE_ERROR,
} from './actions';

const initialState = {
  recipes: [],
  categoryRecipes: [],
  currentRecipe: {},
  isFetched: false,
  error: {
    on: false,
    message: null,
  },
};

export default (state = initialState, action) => {
  let recipeIndexInCategoryRecipes;

  switch (action.type) {
    case 'SET_CURRENT_RECIPE':
      return {
        ...state,
        currentRecipe: action.payload.recipe,
      };
    case `${FETCH_CATEGORY_RECIPES}_PENDING`:
      return initialState;
    case `${FETCH_CATEGORY_RECIPES}_FULFILLED`:
      return {
        recipes: [],
        categoryRecipes: action.payload,
        isFetched: true,
        error: {
          on: false,
          message: null,
        },
      };
    case `${FETCH_CATEGORY_RECIPES}_REJECTED`:
      return {
        recipes: [],
        categoryRecipes: [],
        isFetched: true,
        error: {
          on: true,
          message: 'Error while fetching recipes',
        },
      };
    case UPDATE_RECIPE:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_RECIPE_SUCCESS:
      state.categoryRecipes.forEach((recipe, i) => {
        if (recipe._id === action.payload.recipe._id) {
          recipeIndexInCategoryRecipes = i;
        }
      });
      // state.categories.forEach((category, i) => {
      //   if (category._id === action.payload.id) {
      //     categoryIndexInCategories = i;
      //   }
      // });

      return {
        ...state,
        currentRecipe: action.payload.recipe,
        categoryRecipes: [
          ...state.categoryRecipes.slice(0, recipeIndexInCategoryRecipes),
          action.payload.recipe,
          ...state.categoryRecipes.slice(recipeIndexInCategoryRecipes + 1),
        ],
        isLoading: false,
      };
    case UPDATE_RECIPE_ERROR:
      return {
        recipes: [],
        categoryRecipes: [],
        currentRecipe: {},
        isFetched: false,
        error: {
          on: true,
          message: 'Error while updating recipe',
        },
      };
    default:
      return state;
  } 
};
