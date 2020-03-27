export const LOGIN = 'LOGIN'

export const login = (username, password) => ({
  type: LOGIN,
  username,
  password
})
