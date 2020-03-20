import React from 'react'
import CellsBoard from '../components/cellsBoard/index'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import allTheActions from '../actions'

const Game = (props) => {
  return (
    <div>
      <CellsBoard board={props.boardState.board} refreshBoard={props.actions.board.refreshBoard} />
    </div>
  );
};

const mapStateToProps = state => ({
  boardState: state.board
})

const mapDispatchToProps = () => dispatch => ({
  actions: {
    board: bindActionCreators(allTheActions.board, dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Game)