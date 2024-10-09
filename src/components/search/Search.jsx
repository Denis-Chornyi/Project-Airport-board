import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterNumber } from './search.actions';
import { useNavigate, useLocation } from 'react-router-dom';
import moment from 'moment';
import './search.scss';

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const today = moment().format('YYYY-MM-DD');

  const searchTerm = useSelector(state => state.search.selectedNumber);

  const handleInputChange = event => {
    dispatch(setFilterNumber(event.target.value));
  };

  const handleSearch = event => {
    event.preventDefault();
    const params = new URLSearchParams(location.search);
    params.set('type', params.get('type') || 'DEPARTURE');
    params.set('search', searchTerm);
    params.set('date', params.get('date') || today);
    navigate(`/board-main?${params.toString()}`);
  };

  const isMainPage = location.pathname === '/';

  return (
    <div className="search">
      <h1 className="search__title" style={{ color: isMainPage ? '#fff' : '#000' }}>
        SEARCH FLIGHT
      </h1>
      <div className="search__wrapper">
        <form className="search__form" onSubmit={handleSearch}>
          <input
            className="search__input"
            type="search"
            placeholder="Flight № ..."
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button className="search__button" type="submit">
            SEARCH
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
