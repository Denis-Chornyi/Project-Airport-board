import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../filter/Filter';
import Table from '../table/Table';
import { fetchFlightsSuccess } from './board.actions';
import { fetchFlights } from '../../common/gateway/eventsGateways';
import moment from 'moment';
import { useLocation } from 'react-router-dom';
import { setActiveButtonFilter } from '../filter/filter.actions';
import { setFilterDate } from '../calendar/calendar.actions';
import './board.scss';

const Board = () => {
  const dispatch = useDispatch();
  const flights = useSelector(state => state.board.flights);
  const selectedDate = useSelector(state => state.calendar.selectedDate);
  const activeFilter = useSelector(state => state.filter.activeButtonFilter);
  const location = useLocation();

  useEffect(() => {
    fetchFlights().then(data => {
      dispatch(fetchFlightsSuccess(data));
    });
  }, [dispatch]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const actions = [
      setActiveButtonFilter(params.get('type') || 'DEPARTURE'),
      setFilterDate(params.get('date') || moment().format('YYYY-MM-DD'))
    ];

    actions.forEach(dispatch);
  }, [location.search, dispatch]);

  const params = new URLSearchParams(location.search);
  const searchTerm = params.get('search') || '';

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
