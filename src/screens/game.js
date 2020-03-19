import React, { useState } from 'react'
import CellsBoard from '../components/cellsBoard/index'

const board = [
  [4, 16, 512, 256, 32, 8],
  [null, 32, null, null, 4, 2],
  [2, null, 2, 32, 2, 4],
  [8, 8, 4, 256, null, 8],
  [16, 16, 8, null, null, 256],
  [32, null, 256, 32, 2, 4]
]

const Game = () => {
  const [gameBoard, setBoard] = useState(board)
  const refreshBoard = (board) => {
    setBoard(board)
  }

  return (
    <div>
      <CellsBoard board={gameBoard} refreshBoard={refreshBoard} />
    </div>
  );
};

export default Game;