import React from 'react';
import './main.scss';
import Search from '../search/Search';
import Board from '../board/Board';

const Main = () => {
  return (
    <main>
      <section className="board">
        <div className="container">
          <Search />
          <Board />
        </div>
      </section>
    </main>
  );
};

export default Main;
