import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../filter.scss';

const ButtonFilter = ({ name }) => {
  const location = useLocation();

  const filterType = name === 'DEPARTURE' ? 'DEPARTURE' : 'ARRIVAL';
  const queryParams = new URLSearchParams(location.search);
  const currentDate = queryParams.get('date') || '';
  const search = queryParams.get('search') || '';
  const currentType = queryParams.get('type') || 'DEPARTURE';

  return (
    <Link
      to={`?type=${filterType}&search=${search}&date=${currentDate}`}
      className={`filter__button ${currentType === filterType ? 'filter__button_current' : ''}`}
    >
      {name === 'DEPARTURE' ? 'DEPARTURES' : 'ARRIVALS'}
    </Link>
  );
};

export default ButtonFilter;

ButtonFilter.propTypes = {
  name: PropTypes.string.isRequired
};
