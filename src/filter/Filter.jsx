import React from 'react';
import Calendar from '../calendar/calendar';
import ButtonFilter from './ButtonFilter';
import './filter.scss';

const Filter = () => {
  return (
    <div className="filter">
      <div className="filter__buttons-wrapper">
        <ButtonFilter name="DEPARTURES" />
        <ButtonFilter name="ARRIVALS" />
      </div>
      <Calendar />
    </div>
  );
};

export default Filter;