import React from 'react'
import Login from '../screens/login'
import Game from '../screens/game'
import PrivateRoute from './privateRoute'

import { ThemeProvider } from 'styled-components'

import { connect } from 'react-redux'

import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom'

const Routes = (props) => {
  return (
    <Router>
      <ThemeProvider theme={props.themeState.theme}>
        <Switch>
          <Route exact path='/login' component={Login}></Route>
          <PrivateRoute
            exact
            path='/game'
            component={Game}
            authentificated={!!props.userState.token}
          />
          <Redirect to='/game' />
        </Switch>
      </ThemeProvider>
    </Router>
  )
}

const mapStateToProps = state => ({
  themeState: state.theme,
  userState: state.user
})

export default connect(mapStateToProps)(Routes)
