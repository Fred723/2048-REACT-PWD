import React from 'react'
import styled from 'styled-components'

function Cell({ number }) {
  return (
    <CellContainer>
      {number}
    </CellContainer>
  )
}

const cellColorMap = {
  2: '#dfe6e9',
  4: '#74b9ff',
  8: '#ff7675',
  16: '#fd79a8',
  32: '#00cec9',
  64: '#6c5ce7',
  128: '#6c5ce7',
  256: '#d63031',
  512: '#d63031'
  
}

const getCellBgColor = (number) => {
  if (number > 512) {
    return 'black'
  }

  return number ? cellColorMap[number] : '#bababa';
}

const CellContainer = styled.div`
  margin: 2px 2px;
  padding: 0;
  height: 40px;
  min-width: 40px;
  max-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => getCellBgColor(props.children)};
  color: white;
  border-radius: 3px;
`

export default Cell
