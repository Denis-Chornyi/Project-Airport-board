import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './calendar.scss';
import { setActiveButton } from './calendar.actions';

const Button = ({ name }) => {
  const activeButton = useSelector(state => state.calendar.activeButton);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setActiveButton(name));
  };

  return (
    <div
      className={`filter__date-button ${
        activeButton === name ? 'filter__date-button_current' : ''
      }`}
      onClick={handleClick}
    >
      <p>15/07</p>
      <p>{name}</p>
    </div>
  );
};

export default Button;
