import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './filter.scss';
import { setActiveButtonFilter } from './filter.actions';

const ButtonFilter = ({ name }) => {
  const activeButton = useSelector(state => state.filter.activeButtonFilter);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setActiveButtonFilter(name));
  };

  return (
    <button
      className={`filter__button ${activeButton === name ? 'filter__button_current' : ''}`}
      onClick={handleClick}
    >
      {name === "DEPARTURE" ? "DEPARTURES" : "ARRIVALS"}
    </button>
  );
};

export default ButtonFilter;
