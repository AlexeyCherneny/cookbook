import {
  CREATE_CATEGORY_RECIPE,
  CREATE_CATEGORY_RECIPE_SUCCES,
  CREATE_CATEGORY_RECIPE_ERROR,
} from './actions';

const INITIAL_STATE = {
  error: {
    on: false,
    message: null,
  },
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_CATEGORY_RECIPE:
      return {
        ...INITIAL_STATE,
        isLoading: true,
      };
    case CREATE_CATEGORY_RECIPE_SUCCES:
      return {
        ...INITIAL_STATE,
        isLoading: false,
      };
    case CREATE_CATEGORY_RECIPE_ERROR:
      return {
        error: {
          on: true,
          message: 'Error happen',
        },
        isLoading: false,
      };
    default:
      return state;
  }
};
