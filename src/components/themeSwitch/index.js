import React from 'react'
import styled from 'styled-components'


const ThemeSwitch = ({ switchTheme }) => {
  return (
  	<SwitchContainer onClick={switchTheme}>
      SWITCH THEME
    </SwitchContainer>
  )
};

const SwitchContainer = styled.button`
  margin: 20px;
  padding: 10px 30px;
  border-radius: 4px;
  border: 1px solid lightgray;
  background: lightgray;
  color: #222;
  font-weight: bold;
`

export default ThemeSwitch