import {
  FETCH_USER_CATEGORIES,
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_ERROR,
  DELETE_CATEGORY,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_ERROR,
} from './actions';

const initialState = {
  categories: [],
  userCategories: [],
  currentCategory: {},
  isFetched: false,
  isLoading: false,
  error: {
    on: false,
    message: null,
  },
};

export default (state = initialState, action) => {
  let categoryIndexInUserCategories;
  // let categoryIndexInCategories;

  switch (action.type) {
    case 'SET_CURRENT_CATEGORY':
      return {
        ...state,
        currentCategory: action.payload.category,
      };
    case `${FETCH_USER_CATEGORIES}_PENDING`:
      return initialState;
    case `${FETCH_USER_CATEGORIES}_FULFILLED`:
      return {
        categories: [],
        userCategories: action.payload.userCategories,
        isFetched: true,
        error: {
          on: false,
          message: null,
        },
      };
    case `${FETCH_USER_CATEGORIES}_REJECTED`:
      return {
        categories: [],
        userCategories: [],
        isFetched: false,
        error: {
          on: true,
          message: 'Error while fetching user categories',
        },
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_CATEGORY_SUCCESS:
      state.userCategories.forEach((category, i) => {
        if (category._id === action.payload.category._id) {
          categoryIndexInUserCategories = i;
        }
      });
      // state.categories.forEach((category, i) => {
      //   if (category._id === action.payload.id) {
      //     categoryIndexInCategories = i;
      //   }
      // });

      return {
        ...state,
        userCategories: [
          ...state.userCategories.slice(0, categoryIndexInUserCategories),
          action.payload.category,
          ...state.userCategories.slice(categoryIndexInUserCategories + 1),
        ],
        isLoading: false,
      };
    case UPDATE_CATEGORY_ERROR:
      return {
        categories: [],
        userCategories: [],
        isLoading: false,
        error: {
          on: true,
          message: 'Error while updating categories',
        },
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_CATEGORY_SUCCESS:
      // state.userCategories.forEach((category, i) => {
      //   if (category._id === action.payload.category._id) {
      //     categoryIndexInUserCategories = i;
      //   }
      // });
      return {
        ...state,
        // userCategories: [
        //   ...state.userCategories.slice(0, categoryIndexInUserCategories),
        //   ...state.userCategories.slice(categoryIndexInUserCategories + 1),
        // ],
        isLoading: false,
      };
    case DELETE_CATEGORY_ERROR:
      return {
        categories: [],
        userCategories: [],
        isLoading: false,
        error: {
          on: true,
          message: 'Error while updating categories',
        },
      };
    default:
      return state;
  }
};
