import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from '../logo/index'
import ChangeLanguageButton from '../languageChange/index'
import { withTranslation } from 'react-i18next'

function LoginForm({ image, title, onConfirm, t }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onUsernameChange = e => {
    setUsername(e.target.value)
  }

  const onPasswordChange = e => {
    setPassword(e.target.value)
  }

  const login = e => {
    e.preventDefault()
    onConfirm(username, password)
  }

  const reset = e => {
    e.preventDefault()
    setUsername('')
    setPassword('')
  }

  return (

      <LoginFormContainer>
        <ChangeLanguageButton>
        </ChangeLanguageButton>

      <StyledHeader>
        <Logo size={50} src ={image}/>
      </StyledHeader>
      <StyledInput
        placeholder={t('Username')}
        type='text'
        value={username}
        onChange={onUsernameChange}
      />
      <StyledInput
        placeholder={t('Password')}
        type='password'
        value={password}
        onChange={onPasswordChange}
      />
      <PrimaryStyledButton onClick={login}>{t('login')}</PrimaryStyledButton>
      <SecondaryStyledButton onClick={reset}>{t('reset')}</SecondaryStyledButton>
    </LoginFormContainer>
   
  )
}

const LoginFormContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #EFF0F1;
`

const StyledInput = styled.input`
  color: white;
  font-size: 15px;
  padding: 10px 30px;
  border-radius: 3px;
  border: 1px solid black;
  margin: 5px 0;
  outline: 0;
  background-color: black;
  opacity: 80%;
`

const StyledButton = styled.button`
  font-size: 16px;
  width: 200px;
  padding: 10px 20px;
  border-radius: 3px;
  border: 1px solid lightgray;
  margin: 2px 0;
  outline: 0;
  cursor: pointer;
  :hover {
    transition-property: width;
    transition-duration: 0.5s;
    width: 220px;
  }
`

const PrimaryStyledButton = styled(StyledButton)`
  background-color: #19667b;
  border-color: #19667b;
  color: white;
`

const SecondaryStyledButton = styled(StyledButton)`
  background-color: white;
  border-color: #DDD;
  color: #333;
`
const StyledHeader = styled.h2`
  color: #333;
  text-align: center;
`



export default withTranslation()(LoginForm)