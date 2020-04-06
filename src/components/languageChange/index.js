import React from 'react'
import styled from 'styled-components'
import i18next from 'i18next'
import { withTranslation } from 'react-i18next'

const languageChange = ({t}) => {
    return (
        <LanguageChangeContainer>
            <ChangeLangText>
                {t('change_lang')}
            </ChangeLangText>
        <ButtonsContainer>
            <StyledChange onClick={() => i18next.changeLanguage('fr')}>
            fr
            </StyledChange>
            <StyledChange onClick={() => i18next.changeLanguage('en')}>
            en
            </StyledChange>
        </ButtonsContainer>

        </LanguageChangeContainer>

       
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
margin: 10px;
`

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const LanguageChangeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ChangeLangText = styled.p`

`

export default withTranslation()(languageChange);