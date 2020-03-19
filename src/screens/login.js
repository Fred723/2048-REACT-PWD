import React from 'react'
import axios from 'axios'
import LoginForm from '../components/loginForm/index'

function Login({ history }) {
  const BAD_LOGIN_MSG = 'False username or password'

  const login = (username, password) => {
    let data = {
      username,
      password
    }

    axios
      .post('https://easy-login-api.herokuapp.com/users/login', data)
      .then(res => {
        if (res.data && res.data.errors) {
          alert(BAD_LOGIN_MSG)
        } else {
          localStorage.setItem('MarvelSession', {
            token: res.headers['x-access-token']
          })
          history.push('/game')
        }
      })
      .catch(() => alert(BAD_LOGIN_MSG))
  }

  return (
    <div className='login'>
      <LoginForm title='Welcome to 2048' onConfirm={login} />
    </div>
  )
}

export default Login
