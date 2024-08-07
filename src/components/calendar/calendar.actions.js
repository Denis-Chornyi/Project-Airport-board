export const SET_ACTIVE_BUTTON = 'SET_ACTIVE_BUTTON';
export const SET_FILTER_DATE = 'SET_FILTER_DATE';

export const setActiveButton = buttonName => ({
  type: SET_ACTIVE_BUTTON,
  payload: buttonName
});

export const setFilterDate = date => ({
  type: SET_FILTER_DATE,
  payload: date
});
