import {
  CREATE_USER_CATEGORY,
  CREATE_USER_CATEGORY_SUCCESS,
  CREATE_USER_CATEGORY_ERROR,
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
    case CREATE_USER_CATEGORY:
      return {
        ...INITIAL_STATE,
        isLoading: true,
      };
    case CREATE_USER_CATEGORY_SUCCESS:
      return {
        ...INITIAL_STATE,
        isLoading: false,
      };
    case CREATE_USER_CATEGORY_ERROR:
      return {
        error: {
          on: true,
          message: 'Error while creating user category',
        },
        isLoading: false,
      };
    default:
      return state;
  }
};
