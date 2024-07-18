import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './calendar.scss';
import { setActiveButton, setFilterDate } from './calendar.actions';

const ButtonCalendar = ({ name, date }) => {
  const activeButton = useSelector(state => state.calendar.activeButton);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setActiveButton(name));
    dispatch(setFilterDate(date));
  };

  return (
    <div
      className={`filter__date-button ${
        activeButton === name ? 'filter__date-button_current' : ''
      }`}
      onClick={handleClick}
    >
      <p>{date}</p>
      <p>{name}</p>
    </div>
  );
};

export default ButtonCalendar;
