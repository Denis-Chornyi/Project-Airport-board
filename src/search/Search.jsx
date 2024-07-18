import React, { useState } from 'react';
import './search.scss';
import { useDispatch } from 'react-redux';
import { setFilterNumber } from './search.actions';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = event => {
    event.preventDefault();
    dispatch(setFilterNumber(searchTerm));
    setSearchTerm('');
  };

  return (
    <div className="search">
      <h1 className="search__title">SEARCH FLIGHT</h1>
      <div className="search__wrapper">
        <form onSubmit={handleSearch}>
          <input
            className="search__input"
            type="search"
            placeholder="Flight № ..."
            value={searchTerm}
            onChange={handleInputChange}
          />
          <input className="search__button" type="submit" value="SEARCH" />
        </form>
      </div>
    </div>
  );
};

export default Search;
