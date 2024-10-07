import React from 'react';
import moment from 'moment';
import calendar from '../../../public/images/calendar.png';
import ButtonCalendar from './components/ButtonCalendar';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterDate } from './calendar.actions';
import { useLocation, useNavigate } from 'react-router-dom';
import './calendar.scss';

const Calendar = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.calendar.selectedDate);
  const location = useLocation();
  const navigate = useNavigate();

  const inputStyles = { backgroundImage: `url(${calendar})` };

  const handleDateChange = event => {
    const newDate = event.target.value;
    dispatch(setFilterDate(newDate));
    const params = new URLSearchParams(location.search);
    params.set('date', newDate);
    navigate({ search: params.toString() });
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
          onDateChange={() => handleDateChange({ target: { value: yesterday } })}
        />
        <ButtonCalendar
          name="TODAY"
          date={today}
          onDateChange={() => handleDateChange({ target: { value: today } })}
        />
        <ButtonCalendar
          name="TOMORROW"
          date={tomorrow}
          onDateChange={() => handleDateChange({ target: { value: tomorrow } })}
        />
      </div>
    </div>
  );
};

export default Calendar;
