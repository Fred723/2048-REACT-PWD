import React from 'react'
import styled from 'styled-components'
import CellRow from '../cellRow/index'
import { useSwipeable } from 'react-swipeable'

const config = {
  delta: 10,                             // min distance(px) before a swipe starts
  preventDefaultTouchmoveEvent: false,   // preventDefault on touchmove, *See Details*
  trackTouch: true,                      // track touch input
  trackMouse: false,                     // track mouse input
  rotationAngle: 0,                      // set a rotation angle
}

const isCellFilled = (cell) => cell !== null
const isCellNotFilled = (cell) => !isCellFilled(cell)

const moveFilledCellsToLeft = (row) => {
  for (let index = 0; index < row.length - 1; index++) {
    if (isCellNotFilled(row[index])) {
      row[index] = row[index + 1]
      row[index + 1] = null // clear next cell
    }
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

function CellsBoard({ board, refreshBoard }) {
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      board.map((row) => swipeRowToLeft(row))
      refreshBoard(board)
    },
    onSwipedRight: (eventData) => {
      board.map((row) => swipeRowToLeft(row.reverse()))
      board.map((row) => row.reverse())
      refreshBoard(board)
    },
    onSwipedUp: (eventData) => {
      debugger
    },
    onSwipedDown: (eventData) => {
      debugger
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
    </CellsBoardContainer>
  )
}

const CellsBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
  color: white;
  border-radius: 4px;
  width: max-content;
  padding: 2px;
`

export default CellsBoard
