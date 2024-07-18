import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../filter/Filter';
import Table from '../table/Table';
import { fetchFlightsSuccess } from './board.actions';
import './board.scss';
import { fetchFlights } from '../gateway/eventsGateways';
import moment from 'moment';

const Board = () => {
  const dispatch = useDispatch();
  const flights = useSelector(state => state.board.flights);
  const selectedDate = useSelector(state => state.calendar.selectedDate);
  const activeFilter = useSelector(state => state.filter.activeButtonFilter);
  const searchTerm = useSelector(state => state.search.selectedNumber);

  useEffect(() => {
    fetchFlights().then(data => {
      dispatch(fetchFlightsSuccess(data));
    });
  }, [dispatch]);

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
