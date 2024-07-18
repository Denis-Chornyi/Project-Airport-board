import React, { useEffect } from 'react';
import './calendar.scss';
import calendar from '../image/calendar.svg';
import ButtonCalendar from './ButtonCalendar';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterDate } from './calendar.actions';

const Calendar = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.calendar.selectedDate);
  useEffect(() => {
    const today = moment().format('YYYY-MM-DD');
    dispatch(setFilterDate(today));
  }, [dispatch]);
  const inputStyles = { backgroundImage: `url(${calendar})` };

  const handleDateChange = event => {
    const newValue = event.target.value;
    dispatch(setFilterDate(newValue));
  };

  const formattedDate = moment(selectedDate).format('MM/DD');
  const yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD');
  const today = moment().format('YYYY-MM-DD');
  const tomorrow = moment().add(1, 'days').format('YYYY-MM-DD');

  return (
    <div className="filter__date-wrapper">
      <label htmlFor="filter-date-input" className="filter__date-input-label">
        <p>{formattedDate}</p>
        <input
          type="date"
          className="filter__date-input"
          id="filter-date-input"
          style={inputStyles}
          value={selectedDate}
          onChange={handleDateChange}
        />
      </label>
      <div className="filter__date-buttons">
        <ButtonCalendar
          name="YESTERDAY"
          date={yesterday}
          onDateChange={() => dispatch(setFilterDate(yesterday))}
        />
        <ButtonCalendar
          name="TODAY"
          date={today}
          onDateChange={() => dispatch(setFilterDate(today))}
        />
        <ButtonCalendar
          name="TOMORROW"
          date={tomorrow}
          onDateChange={() => dispatch(setFilterDate(tomorrow))}
        />
      </div>
    </div>
  );
};

export default Calendar;
