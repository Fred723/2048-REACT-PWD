import React from 'react'
import styled from 'styled-components'
import CellsBoard from '../components/cellsBoard/index'
import ThemeSwitch from '../components/themeSwitch/index'
import ChangeLanguageButton from '../components/languageChange/index'
import { withTranslation } from 'react-i18next'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import allTheActions from '../actions'
import { askForPermissioToReceiveNotifications } from '../push-notification';

const Game = (props) => {
  return (
    <GameContainer>
      <CellsBoard
        board={props.boardState.board}
        score={props.boardState.score}
        refreshBoard={props.actions.board.refreshBoard}
      />

    <NotificationButton onClick={askForPermissioToReceiveNotifications} >
      Appuyez ici pour avoir une notification <br/>(Statut 200 en console)
    </NotificationButton>


      <AccountParamsContainer>
        <ChangeLanguageButton />
  	    <ThemeSwitch theme={props.themeState.theme} switchTheme={props.actions.theme.switchTheme} />
        <br />
        <LogOutButton onClick={props.actions.user.logout}>{props.t('log out')}</LogOutButton>
      </AccountParamsContainer>
    </GameContainer>
  );
};

const GameContainer = styled.div`
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background: ${props => props.theme.fullBG};
  text-align: center;
`

const AccountParamsContainer = styled.div`
  position: absolute;
  bottom: 50px;
  width: 100%;
  text-align: center;
`


const StyledButton = styled.button`
  padding: 10px 30px;
  border-radius: 4px;
  border: 1px solid lightgray;
  background: lightgray;
  color: #222;
  font-weight: bold;

`



const LogOutButton = styled(StyledButton)`
  text-transform: uppercase;
`
const NotificationButton = styled(StyledButton)`
  margin: 10%;
`


const mapStateToProps = state => ({
  boardState: state.board,
  themeState: state.theme
})

const mapDispatchToProps = () => dispatch => ({
  actions: {
    board: bindActionCreators(allTheActions.board, dispatch),
    theme: bindActionCreators(allTheActions.theme, dispatch),
    user: bindActionCreators(allTheActions.user, dispatch)
  }
})

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Game))
