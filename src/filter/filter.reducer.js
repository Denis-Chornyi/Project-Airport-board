import { SET_ACTIVE_BUTTON_FILTER } from './filter.actions';

const initialState = {
  activeButtonFilter: 'DEPARTURES'
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_BUTTON_FILTER:
      return {
        ...state,
        activeButtonFilter: action.payload
      };
    default:
      return state;
  }
};

export default filterReducer;