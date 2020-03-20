import React from 'react'
import Routes from './config/routes'
import { Provider } from 'react-redux'
import { store } from './config/store'
import { ThemeProvider } from 'styled-components'

import { themeLight } from './config/theme'


import './App.css'

function App() {
  return (
    <Provider store={store} >
      <ThemeProvider theme={themeLight}>
      	<Routes />
      </ThemeProvider>
    </Provider>
  )
}

export default App
