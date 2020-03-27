import React from 'react'
import styled from 'styled-components'
import CellRow from '../cellRow/index'
import ScoreBox from '../score/index'
import { useSwipeable } from 'react-swipeable'

const config = {
  delta: 10,                             // min distance(px) before a swipe starts
  preventDefaultTouchmoveEvent: false,   // preventDefault on touchmove, *See Details*
  trackTouch: true,                      // track touch input
  trackMouse: false,                     // track mouse input
  rotationAngle: 0,                      // set a rotation angle
}

function CellsBoard({ board, score, refreshBoard }) {
  const transpose = a => a[0].map((_, c) => a.map(r => r[c]))

  const isCellFilled = (cell) => cell !== null
  const isCellNotFilled = (cell) => !isCellFilled(cell)

  const moveFilledCellsToLeft = (row) => {
    for (let index = 0; index < row.length - 1; index++) {
      if (isCellFilled(row[index]) && isCellFilled(row[index + 1]) && row[index] === row[index + 1]) {
        row[index] = row[index] * 2
        row[index + 1] = null // clear next cell
      }
      
      if (isCellNotFilled(row[index])) {
        row[index] = row[index + 1]
        row[index + 1] = null // clear next cell
      }
      //console.log("index = " +  index + " Value = " + row[index]);
    }
    return row;
  }

  const swipeRowToLeft = (row) => {
    let unfilledCellsLength = row.filter((cell) => isCellNotFilled(cell)).length
    for (let i = 0; i <= unfilledCellsLength; i++) {
      moveFilledCellsToLeft(row)
    }
    
    return row;
  }

  const scoreMap = {
    4: 5,
    8: 20,
    16: 60,
    32: 180,
    64: 600,
    128: 1100,
    256: 2000,
    512: 5000,
    1024: 20000
  }

  const getCurrentScore = (board) => {
    let currentScore = 0;
    board.forEach((row) => row.forEach((value) => {
      currentScore += scoreMap[value] || 0
    }))

    return currentScore;
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      board.map((row) => swipeRowToLeft(row))
      refreshBoard(board, getCurrentScore(board))
    },
    onSwipedRight: (eventData) => {
      board.map((row) => swipeRowToLeft(row.reverse()))
      board.map((row) =>  row.reverse())
      refreshBoard(board, getCurrentScore(board))
    },
    onSwipedUp: (eventData) => {
      board = transpose(board)
      board = board.map((row) => swipeRowToLeft(row))
      board = transpose(board)
      refreshBoard(board, getCurrentScore(board))
    },
    onSwipedDown: (eventData) => {
      board = transpose(board)
      board = board.map((row) => swipeRowToLeft(row.reverse()))
      board = board.map((row) => row.reverse())
      board = transpose(board)
      refreshBoard(board, getCurrentScore(board))
    },
    ...config
  })

  return (
    <CellsBoardContainer {...handlers}>
      {board.map((row, index) => {
        return (
          <CellRow key={index} row={row} />
        ) 
      })}
    <ScoreBox>
      {score}
    </ScoreBox>
    </CellsBoardContainer>
  )
}

const CellsBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.theme.secondary)};
  color: white;
  border-radius: 4px;
  border: 1px solid white;
  width: max-content;
  padding: 2px;
  margin: 50px auto 0;
`

export default CellsBoard