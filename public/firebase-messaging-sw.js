importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCM7mA8B6ug0JU_vJe5ukfAQWilb6iK3o4",
    authDomain: "ynov-3m-2048.firebaseapp.com",
    databaseURL: "https://ynov-3m-2048.firebaseio.com",
    projectId: "ynov-3m-2048",
    storageBucket: "ynov-3m-2048.appspot.com",
    messagingSenderId: "101397248567",
    appId: "1:101397248567:web:5231ca71cb8c9f610c5db2",
    measurementId: "G-L60554TDLB"
});

const messaging = firebase.messaging();