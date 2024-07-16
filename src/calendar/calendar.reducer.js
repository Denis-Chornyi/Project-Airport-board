import { SET_ACTIVE_BUTTON } from './calendar.actions';

const initialState = {
  activeButton: 'TODAY'
};

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_BUTTON:
      return {
        ...state,
        activeButton: action.payload
      };
    default:
      return state;
  }
};

export default calendarReducer;
