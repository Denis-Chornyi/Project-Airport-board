import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './flights.scss';
import moment from 'moment';

const Flights = () => {
  const location = useLocation();
  const currentType = new URLSearchParams(location.search).get('type');
  const today = moment().format('YYYY-MM-DD');

  return (
    <div className="flights">
      <Link
        className={`flights__button ${
          currentType === 'DEPARTURE' ? 'flights__button_active' : ''
        }`}
        to={`board-main?type=DEPARTURE&date=${today}`}
      >
        DEPARTURES ALL FLIGHTS
      </Link>
      <Link
        className={`flights__button ${currentType === 'ARRIVAL' ? 'flights__button_active' : ''}`}
        to={`board-main?type=ARRIVAL&date=${today}`}
      >
        ARRIVALS ALL FLIGHTS
      </Link>
    </div>
  );
};

export default Flights;
