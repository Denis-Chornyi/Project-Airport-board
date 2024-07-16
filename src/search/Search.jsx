import React from 'react';
import './search.scss';

const Search = () => {
  return (
    <div className="search">
      <h1 className="search__title">SEARCH FLIGHT</h1>
      <div className="search__wrapper">
        <form>
          <input className="search__input" type="search" placeholder="Flight № ..." />
          <input className="search__button" type="submit" value="SEARCH" />
        </form>
      </div>
    </div>
  );
};

export default Search;
