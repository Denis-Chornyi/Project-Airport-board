import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import moment from 'moment';
import './search.scss';

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const today = moment().format('YYYY-MM-DD');

  const [localSearchTerm, setLocalSearchTerm] = useState('');

  const updateUrl = searchTerm => {
    const params = new URLSearchParams(location.search);

    params.set('type', params.get('type') || 'DEPARTURE');
    if (searchTerm) {
      params.set('search', searchTerm);
    } else {
      params.delete('search');
    }
    params.set('date', params.get('date') || today);

    navigate(`/board-main?${params.toString()}`);
  };

  const handleInputChange = event => {
    setLocalSearchTerm(event.target.value);
  };

  const handleSearch = event => {
    event.preventDefault();
    updateUrl(localSearchTerm);
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
            value={localSearchTerm}
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
