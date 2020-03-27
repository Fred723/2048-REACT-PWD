import React, { useEffect } from 'react'
import Routes from './config/routes'
import { Provider } from 'react-redux'
import { store } from './config/store'
import { messaging } from './config/initFirebaseMessaging'

import './App.css'
import './config/translations'

function App() {
  useEffect(() => {
    messaging
    .requestPermission()
    .then(async function() {
      const token = await messaging.getToken()
      console.log('TCL: App -> token', token)
    })
    .catch(function(err) {
      console.log('Unable to get permission to notify.', err)
    })
  navigator.serviceWorker.addEventListener('message', message =>
    console.log(message)
  )
  })
  return (
    <Provider store={store} >
      <Routes />
    </Provider>
  )
}

export default App
