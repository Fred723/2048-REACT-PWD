import React from 'react'
import styled from 'styled-components'
import { withTranslation } from 'react-i18next'


const ThemeSwitch = ({ switchTheme, t }) => {
  return (
  	<SwitchContainer onClick={switchTheme}>
      {t('SWITCH_THEME')}
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

export default withTranslation()(ThemeSwitch)