export const SET_ACTIVE_BUTTON_FILTER = 'SET_ACTIVE_BUTTON_FILTER';

export const setActiveButtonFilter = buttonName => ({
  type: SET_ACTIVE_BUTTON_FILTER,
  payload: buttonName
});
