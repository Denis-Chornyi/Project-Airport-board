import React from 'react';
import './calendar.scss';
import calendar from '../image/calendar.svg';
import Button from './ButtonCalendar';

const Calendar = () => {
  const inputStyles = { backgroundImage: `url(${calendar})` };

  return (
    <div className="filter__date-wrapper">
      <label htmlFor="filter-date-input" className="filter__date-input-label">
        <p>15/07</p>
        <input
          type="date"
          className="filter__date-input"
          id="filter-date-input"
          style={inputStyles}
        />
      </label>
      <div className="filter__date-buttons">
        <Button name="YESTERDAY" />
        <Button name="TODAY" />
        <Button name="TOMORROW" />
      </div>
    </div>
  );
};

export default Calendar;
