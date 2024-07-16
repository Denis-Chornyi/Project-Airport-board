import React from 'react';
import './board.scss';
import Filter from '../filter/Filter';
import Table from '../table/Table';

const Board = () => {
  return (
    <div className="board__content">
      <Filter />
      <Table />
    </div>
  );
};

export default Board;
