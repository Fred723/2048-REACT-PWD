import React from 'react'
import Routes from './config/routes'
import { Provider } from 'react-redux'
import { store } from './config/store'
//import { messaging } from './config/initFirebaseMessaging'
import { initializeFirebase } from './push-notification';
import './App.css'
import './config/translations'

function App() {

  initializeFirebase();
  return (
    <Provider store={store} >
      <Routes />
    </Provider>
  )
}

export default App
