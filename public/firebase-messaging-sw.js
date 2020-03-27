importScripts('https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js')
// import * as firebase from 'firebase'

firebase.initializeApp({
  messagingSenderId: '261406246970'
})

const messaging = firebase.messaging()
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: 'public/log512.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
})
self.addEventListener('notificationclick', function(event) {
  // do what you want
  // ...
})