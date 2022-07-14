import * as type from './constants';

const initialState = {
  list: [],
  isFetching: false,
  error: ''
};

const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_ALL_INGREDIENTS_PENDING:
      return {
        ...state,
        isFetching: true,
      };
    case type.GET_ALL_INGREDIENTS_FULFILLED:
      return {
        ...state,
        isFetching: false,
        list: action.payload
      };
    case type.GET_ALL_INGREDIENTS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default ingredientsReducer;
