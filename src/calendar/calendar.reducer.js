import { SET_ACTIVE_BUTTON, SET_FILTER_DATE } from './calendar.actions';

const initialState = {
  activeButton: 'TODAY',
  selectedDate: ''
};

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_BUTTON:
      return {
        ...state,
        activeButton: action.payload
      };
    case SET_FILTER_DATE:
      return {
        ...state,
        selectedDate: action.payload
      };

    default:
      return state;
  }
};

export default calendarReducer;
