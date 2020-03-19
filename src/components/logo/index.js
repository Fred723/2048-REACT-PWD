import React from 'react'
import styled from 'styled-components'

const Logo = ({
  size = 50,
  src = 'https://upload.wikimedia.org/wikipedia/commons/1/18/2048_logo.svg'
}) => {
  return <LogoImage size={size} src={src}></LogoImage>
}

const LogoImage = styled.img`
  width: 200px;
  height: 200px;
`

export default Logo
