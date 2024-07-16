export const SET_ACTIVE_BUTTON = 'SET_ACTIVE_BUTTON';

export const setActiveButton = buttonName => ({
  type: SET_ACTIVE_BUTTON,
  payload: buttonName
});