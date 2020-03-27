import { LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/user'

const initialState = {
  token: localStorage.getItem('MarvelSession')
    ? JSON.parse(localStorage.getItem('MarvelSession')).token
    : null,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: state.token
      }

    case LOGIN_SUCCESS:
      localStorage.setItem('MarvelSession', JSON.stringify({
        token: action.payload
      }))

      return {
        ...state,
        token: action.payload,
        error: null
      }

    case LOGIN_FAILURE:
      return {
        ...state,
        token: state.token,
        error: 'False username or password'
      }

    case LOGOUT:
      localStorage.removeItem('MarvelSession')

      return {
        ...state,
        token: null,
        error: null
      }

    default:
      return state
  }
}
