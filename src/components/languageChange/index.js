import React from 'react'
import styled from 'styled-components'
import i18next from 'i18next'
import { withTranslation } from 'react-i18next'

const languageChange = () => {
    return (
        <div>
            <StyledChange onClick={() => i18next.changeLanguage('fr')}>
            fr
            </StyledChange>
            <StyledChange onClick={() => i18next.changeLanguage('en')}>
            en
            </StyledChange>

        </div>
    );
};

const StyledChange = styled.button`

`

export default withTranslation()(languageChange);