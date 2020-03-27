import * as firebase from 'firebase/app'

//import { apiKey, certificateKey } from './.secret.js'

import 'firebase/messaging'

const initializedFirebaseApp = firebase.initializeApp({
  // Project Settings => Add Firebase to your web app
  apiKey: "AIzaSyCM7mA8B6ug0JU_vJe5ukfAQWilb6iK3o4",
  authDomain: "ynov-3m-2048.firebaseapp.com",
  databaseURL: "https://ynov-3m-2048.firebaseio.com",
  projectId: "ynov-3m-2048",
  storageBucket: "ynov-3m-2048.appsp ot.com",
  messagingSenderId: "101397248567",
  appId: "1:101397248567:web:5231ca71cb8c9f610c5db2",
  measurementId: "G-L60554TDLB"

})

const messaging = initializedFirebaseApp.messaging();
messaging.requestPermission()
.then(function(){
    console.log('Have permission');
})
.catch(function(err){
    console.log('Error Occured.');
})
export { messaging }