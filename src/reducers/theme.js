import { SWITCH_THEME } from '../actions/theme'
import { themeLight, themeDark } from '../config/theme'

const initialState = {
  theme: themeLight
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      return {
        ...state,
        theme: state.theme === themeLight ? themeDark : themeLight
      }

    default:
      return state
  }
}
