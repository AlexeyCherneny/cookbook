import { FETCH_USER_INFO, FETCH_USER_INFO_SUCCESS, FETCH_USER_INFO_ERROR } from './actions';

const initialState = {
  error: {
    on: false,
    message: null,
  },
  userInfo: {},
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_INFO:
      return {
        ...initialState,
        isLoading: true,
      };
    case FETCH_USER_INFO_SUCCESS:
      return {
        ...initialState,
        userInfo: action.payload,
        isLoading: false,
      };
    case FETCH_USER_INFO_ERROR:
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
