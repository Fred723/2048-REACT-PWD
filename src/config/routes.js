import React from 'react'
import Login from '../screens/login'
import Game from '../screens/game'

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
          <Route exact path='/' component={Login}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/Game' component={Game}></Route>
          <Redirect to='/' />
        </Switch>
      </ThemeProvider>
    </Router>
  )
}

const mapStateToProps = state => ({
  themeState: state.theme
})

export default connect(mapStateToProps)(Routes)
