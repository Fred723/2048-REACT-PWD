import React from 'react'
import styled from 'styled-components'
import CellRow from '../cellRow/index'

function CellsBoard({ board }) {
  return (
    <CellsBoardContainer>
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
