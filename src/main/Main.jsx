import React from 'react';
import './main.scss';
import Search from '../search/Search';
import mainPage from '../image/main-page.webp';
import Flights from '../flights/Flights';

const Main = () => {
  const mainStyles = { backgroundImage: `url(${mainPage})` };
  return (
    <main>
      <section className="board" style={mainStyles}>
        <div className="container">
          <div className="search-form">
            <Search />
            <Flights />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
