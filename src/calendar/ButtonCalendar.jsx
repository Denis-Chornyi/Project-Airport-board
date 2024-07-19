import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setActiveButton, setFilterDate } from './calendar.actions';

const ButtonCalendar = ({ name, date }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activeButton = useSelector(state => state.calendar.activeButton);

  const handleClick = () => {
    dispatch(setActiveButton(name));
    dispatch(setFilterDate(date));
    const params = new URLSearchParams(window.location.search);
    params.set('date', date);
    navigate({ search: params.toString() });
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
