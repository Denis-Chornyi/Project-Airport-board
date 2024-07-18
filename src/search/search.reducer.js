import { SET_FILTER_NUMBER } from './search.actions';

const initialState = {
  selectedNumber: ''
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER_NUMBER:
      return {
        ...state,
        selectedNumber: action.payload
      };
    default:
      return state;
  }
};

export default searchReducer;
