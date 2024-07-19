import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../filter/Filter';
import Table from '../table/Table';
import { fetchFlightsSuccess } from './board.actions';
import './board.scss';
import { fetchFlights } from '../gateway/eventsGateways';
import moment from 'moment';
import { useLocation } from 'react-router-dom';
import { setActiveButtonFilter } from '../filter/filter.actions';
import { setFilterNumber } from '../search/search.actions';
import { setFilterDate } from '../calendar/calendar.actions';

const Board = () => {
  const dispatch = useDispatch();
  const flights = useSelector(state => state.board.flights);
  const selectedDate = useSelector(state => state.calendar.selectedDate);
  const activeFilter = useSelector(state => state.filter.activeButtonFilter);
  const searchTerm = useSelector(state => state.search.selectedNumber);
  const location = useLocation();

  useEffect(() => {
    fetchFlights().then(data => {
      dispatch(fetchFlightsSuccess(data));
    });
  }, [dispatch]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get('search');
    const type = params.get('type');
    const date = params.get('date');

    if (search) {
      dispatch(setFilterNumber(search));
    } else {
      dispatch(setFilterNumber(''));
    }

    if (type) {
      dispatch(setActiveButtonFilter(type));
    } else {
      dispatch(setActiveButtonFilter('DEPARTURE'));
    }

    if (date) {
      dispatch(setFilterDate(date));
    } else {
      const today = moment().format('YYYY-MM-DD');
      dispatch(setFilterDate(today));
    }
  }, [location.search, dispatch]);

  let filteredFlights = [];

  if (searchTerm) {
    filteredFlights = flights.filter(
      flight => flight.codeShare && flight.codeShare.includes(searchTerm)
    );
  } else {
    filteredFlights = flights.filter(flight => {
      const flightDepartureDate = moment(flight.departureDate).format('YYYY-MM-DD');
      return flightDepartureDate === selectedDate && flight.type === activeFilter;
    });
  }

  return (
    <div className="board__content">
      <Filter />
      <Table flights={filteredFlights} />
    </div>
  );
};

export default Board;
