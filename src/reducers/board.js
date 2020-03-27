import { REFRESH_BOARD } from '../actions/board'

const initialState = {
  board: [
    [4, 16, 512, 256, 32, 8],
    [null, 32, null, null, 4, 2],
    [2, null, 2, 32, 2, 4],
    [8, 8, 4, 256, null, 8],
    [16, 16, 8, null, null, 256],
    [32, null, 256, 32, 2, 4]
  ],
  score : 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REFRESH_BOARD:
      return {
        ...state,
        board: action.value || state.board,
        score: action.score || state.score
      }

    default:
      return state
  }
}
