import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setActiveButton, setFilterDate } from '../calendar.actions';
import PropTypes from 'prop-types';

const ButtonCalendar = ({ name, date }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedDate = useSelector(state => state.calendar.selectedDate);
  console.log(selectedDate);
  console.log(date);

  const handleClick = () => {
    dispatch(setActiveButton(name));
    dispatch(setFilterDate(date));
    const params = new URLSearchParams(window.location.search);
    params.set('date', date);
    navigate({ search: params.toString() });
  };

  const isActive = selectedDate === date;

  return (
    <div
      className={`filter__date-button ${isActive ? 'filter__date-button_current' : ''}`}
      onClick={handleClick}
    >
      <p>{date}</p>
      <p>{name}</p>
    </div>
  );
};

export default ButtonCalendar;

ButtonCalendar.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};
