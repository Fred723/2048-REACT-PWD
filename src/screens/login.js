import React from 'react'
import axios from 'axios'
import LoginForm from '../components/loginForm/index'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import allTheActions from '../actions'

const Login = (props) => {
  let { history, userState } = props;
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
          let token = res.headers['x-access-token']
          props.actions.user.login(token)
          history.push('/game')
        }
      })
      .catch(() => {
        if (userState.token) {
          history.push('/game')
        } else {
          alert(BAD_LOGIN_MSG)
        }
      })
  }

  return (
    <div className='login'>
      <LoginForm title='Welcome to 2048' onConfirm={login} />
    </div>
  )
}

const mapStateToProps = state => ({
  userState: state.user
})

const mapDispatchToProps = () => dispatch => ({
  actions: {
    user: bindActionCreators(allTheActions.user, dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
