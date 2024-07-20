import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import './filter.scss';
import { setActiveButtonFilter } from './filter.actions';
import PropTypes from 'prop-types';


const ButtonFilter = ({ name }) => {
  const dispatch = useDispatch();
  const activeButton = useSelector(state => state.filter.activeButtonFilter);
  const location = useLocation();

  const filterType = name === 'DEPARTURE' ? 'DEPARTURE' : 'ARRIVAL';
  const queryParams = new URLSearchParams(location.search);
  const currentDate = queryParams.get('date') || '';
  const search = queryParams.get('search') || '';

  const handleClick = () => {
    dispatch(setActiveButtonFilter(filterType));
  };

  return (
    <Link
      to={`?type=${filterType}&search=${search}&date=${currentDate}`}
      className={`filter__button ${activeButton === filterType ? 'filter__button_current' : ''}`}
      onClick={handleClick}
    >
      {name === 'DEPARTURE' ? 'DEPARTURES' : 'ARRIVALS'}
    </Link>
  );
};

export default ButtonFilter;

ButtonFilter.propTypes = {
  name: PropTypes.string.isRequired
};
