import React from 'react';
import Search from '../search/Search';
import mainPage from '../../../public/images/main-page.webp';
import Flights from '../flights/Flights';
import './main.scss';

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
