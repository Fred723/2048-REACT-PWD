import { LOGIN } from '../actions/user'

const initialState = {
  token: localStorage.getItem('MarvelSession')
    ? JSON.parse(localStorage.getItem('MarvelSession')).token
    : null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: state.token
      }

    default:
      return state
  }
}
