export const SET_ACTIVE_BUTTON_FILTER = 'SET_ACTIVE_BUTTON_FILTER';

export const setActiveButtonFilter = (filterType) => ({
  type: SET_ACTIVE_BUTTON_FILTER,
  payload: filterType,
});
