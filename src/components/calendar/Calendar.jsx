import React from 'react';
import moment from 'moment';
import ButtonCalendar from './components/ButtonCalendar';
import { useLocation, useNavigate } from 'react-router-dom';
import './calendar.scss';

const Calendar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const selectedDate = params.get('date') || moment().format('YYYY-MM-DD');

  const handleDateChange = event => {
    const newDate = event.target.value;
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
        <img
          className=""
          src="/images/calendar.png"
          alt="calendar"
          style={{ width: '40px', position: 'absolute' }}
        />
        <input
          type="date"
          className="filter__date-input"
          id="filter-date-input"
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
