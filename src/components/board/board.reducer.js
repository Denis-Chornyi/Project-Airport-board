import { FETCH_FLIGHTS_SUCCESS } from './board.actions';

const initialState = {
  flights: []
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FLIGHTS_SUCCESS:
      return {
        ...state,
        flights: action.payload
      };
    default:
      return state;
  }
};

export default boardReducer;
