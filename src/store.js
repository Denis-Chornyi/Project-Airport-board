import { thunk } from 'redux-thunk';
import filterReducer from './filter/filter.reducer';
import calendarReducer from './calendar/calendar.reducer';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import boardReducer from './board/board.reducer';
import searchReducer from './search/search.reducer';

const reducer = combineReducers({
  board: boardReducer,
  filter: filterReducer,
  calendar: calendarReducer,
  search: searchReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
