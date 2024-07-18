import React from 'react';
import Calendar from '../calendar/calendar';
import ButtonFilter from './ButtonFilter';
import './filter.scss';

const Filter = () => {
  return (
    <div className="filter">
      <div className="filter__buttons-wrapper">
        <ButtonFilter name="DEPARTURE" />
        <ButtonFilter name="ARRIVAL" />
      </div>
      <Calendar />
    </div>
  );
};

export default Filter;
