import { combineReducers } from 'redux'

import board from './board'
import theme from './theme'
import user from './user'

export default combineReducers({
  board,
  theme,
  user
})
