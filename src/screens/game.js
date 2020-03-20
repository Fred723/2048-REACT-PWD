import React from 'react'
import CellsBoard from '../components/cellsBoard/index'
import ThemeSwitch from '../components/themeSwitch/index'
import styled from 'styled-components'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import allTheActions from '../actions'

const Game = (props) => {
  return (
    <GameContainer>
  	  <ThemeSwitch theme={props.themeState.theme} switchTheme={props.actions.theme.switchTheme} />
      <CellsBoard board={props.boardState.board} refreshBoard={props.actions.board.refreshBoard} />
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

const mapStateToProps = state => ({
  boardState: state.board,
  themeState: state.theme
})

const mapDispatchToProps = () => dispatch => ({
  actions: {
    board: bindActionCreators(allTheActions.board, dispatch),
    theme: bindActionCreators(allTheActions.theme, dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Game)