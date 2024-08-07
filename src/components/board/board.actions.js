export const FETCH_FLIGHTS_SUCCESS = 'FETCH_FLIGHTS_SUCCESS';

export const fetchFlightsSuccess = flights => ({
  type: FETCH_FLIGHTS_SUCCESS,
  payload: flights
});
