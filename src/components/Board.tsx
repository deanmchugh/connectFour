import React from 'react';

import { returnSquare } from './GameLogic'

const CELLS_X = 7;
const CELLS_Y = 6;

interface Props {
  nextTurn: () => void;
}

const getCells = () => {
  const rows = [];

  for (let y = 0; y < CELLS_Y; y++) {
    const cells = [];

    for (let x = 0; x < CELLS_X; x++) {
      cells.push(
        <div className="Cell" key={`${y}-${x}`} id={`${y}${x}`} onClick={returnSquare}/>
      );
    }

    rows.push(
      <div className="Row" key={y}>
        {cells}
      </div>
    );
  }
  return rows;
};

interface Props {
  nextTurn: () => void;
}

const Board = ({ nextTurn }: Props) => (
  <>
    <div className="Board">
      {getCells()}
    </div>

    {/* This is for logic demonstration only */}
    <button className="NextTurn" onClick={nextTurn}>
      next turn
    </button>
  </>
);

export default Board;
