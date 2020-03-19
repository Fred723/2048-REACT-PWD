import React from 'react'
import styled from 'styled-components'
import Cell from '../cell/index'

function CellRow({ row }) {
  return (
    <CellRowContainer>
      {row.map((cell, index) => {
        return (
          <Cell key={index} number={cell} />
        ) 
      })}
    </CellRowContainer>
  )
}

const CellRowContainer = styled.div`
`

export default CellRow
