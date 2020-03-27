import axios from 'axios'

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload
})

export const loginFailure = () => ({
  type: LOGIN_FAILURE
})

export const login = (data) => {
  return (dispatch) => {
  	return axios
      .post('https://easy-login-api.herokuapp.com/users/login', data)
      .then(res => {
        if (res.data && res.data.errors) {
          dispatch(loginFailure())
        } else {
          let token = res.headers['x-access-token']
          dispatch(loginSuccess(token))
        }
      })
      .catch(err => dispatch(loginFailure()))
  }
}


export const logout = () => ({
  type: LOGOUT
})