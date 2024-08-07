import React from 'react';
import Search from '../search/Search';
import Board from '../board/Board';
import './boardMain.scss';

const BoardMain = () => {
  return (
    <main className="board-main">
      <section className="board">
        <div className="board-main__container">
          <Search />
          <Board />
        </div>
      </section>
    </main>
  );
};

export default BoardMain;
