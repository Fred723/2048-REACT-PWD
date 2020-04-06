import React from 'react'
import styled from 'styled-components'
import i18next from 'i18next'
import { withTranslation } from 'react-i18next'

const languageChange = ({t}) => {
    return (
        <languageChangeContainer>
            {t('change_lang')}
        <ButtonsContainer>
            <StyledChange onClick={() => i18next.changeLanguage('fr')}>
            fr
            </StyledChange>
            <StyledChange onClick={() => i18next.changeLanguage('en')}>
            en
            </StyledChange>
        </ButtonsContainer>

        </languageChangeContainer>

       
    );
};

const StyledChange = styled.button`
padding: 10px 30px;
border-radius: 4px;
border: 1px solid lightgray;
background: lightgray;
color: #222;
font-weight: bold;
text-transform: uppercase;

`

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`


export default withTranslation()(languageChange);