import { combineReducers } from 'redux'

import board from './board'
import theme from './theme'

export default combineReducers({
  board,
  theme
})
