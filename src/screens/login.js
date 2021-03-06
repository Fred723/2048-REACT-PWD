import React from 'react'
import LoginForm from '../components/loginForm/index'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import allTheActions from '../actions'

const Login = (props) => {
  let { history, userState, actions } = props;

  const login = (username, password) => {
    let data = {
      username,
      password
    }
    actions.user.login(data)
      .then(() => history.push('/game'))
  }

  return (
    <div className='login'>
      <LoginForm title='Welcome to 2048' loginErrorMessage={userState.error} onConfirm={login} />
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
