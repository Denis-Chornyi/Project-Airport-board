import { thunk } from 'redux-thunk';
import filterReducer from '../components/filter/filter.reducer';
import calendarReducer from '../components/calendar/calendar.reducer';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import boardReducer from '../components/board/board.reducer';
import searchReducer from '../components/search/search.reducer';

const reducer = combineReducers({
  board: boardReducer,
  filter: filterReducer,
  calendar: calendarReducer,
  search: searchReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
