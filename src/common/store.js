import { thunk } from 'redux-thunk';
import calendarReducer from '../components/calendar/calendar.reducer';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import boardReducer from '../components/board/board.reducer';

const reducer = combineReducers({
  board: boardReducer,
  calendar: calendarReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
