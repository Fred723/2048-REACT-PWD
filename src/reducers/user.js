import { LOGIN, LOGOUT } from '../actions/user'

const initialState = {
  token: localStorage.getItem('MarvelSession')
    ? JSON.parse(localStorage.getItem('MarvelSession')).token
    : null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('MarvelSession', JSON.stringify({
        token: action.token
      }))

      return {
        ...state,
        token: action.token
      }

    case LOGOUT:
      localStorage.removeItem('MarvelSession')

      return {
        ...state,
        token: null
      }

    default:
      return state
  }
}
