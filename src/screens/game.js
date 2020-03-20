import React from 'react'
import CellsBoard from '../components/cellsBoard/index'
import styled from 'styled-components'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import allTheActions from '../actions'

const Game = (props) => {
  return (
    <GameContainer>
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
`

const mapStateToProps = state => ({
  boardState: state.board
})

const mapDispatchToProps = () => dispatch => ({
  actions: {
    board: bindActionCreators(allTheActions.board, dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Game)