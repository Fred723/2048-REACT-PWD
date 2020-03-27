export const REFRESH_BOARD = 'REFRESH_BOARD'

export const refreshBoard = (value, score) => ({
  type: REFRESH_BOARD,
  value,
  score
})
