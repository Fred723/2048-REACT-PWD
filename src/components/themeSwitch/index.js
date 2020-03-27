import React from 'react'
import styled from 'styled-components'
import ChangeLanguageButton from '../languageChange/index'
import { withTranslation } from 'react-i18next'


const ThemeSwitch = ({ switchTheme, t }) => {
  return (
    <div>
      <ChangeLanguageButton>

      </ChangeLanguageButton>
  	<SwitchContainer onClick={switchTheme}>
    {t('SWITCH_THEME')}
      
      
    </SwitchContainer>
    </div>
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