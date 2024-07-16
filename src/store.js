import { thunk } from 'redux-thunk';
import filterReducer from './filter/filter.reducer';
import calendarReducer from './calendar/calendar.reducer';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

const reducer = combineReducers({
  filter: filterReducer,
  calendar: calendarReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
