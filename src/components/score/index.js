import React from 'react'
import styled from 'styled-components'

const ScoreBox = ({children} ) => {
    return (
        <ScoreBoxContainer>
          {children} 
        </ScoreBoxContainer>
    )
}

const ScoreBoxContainer = styled.div`
  padding: 5px;
`

export default ScoreBox