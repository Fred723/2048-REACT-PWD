import firebase from 'firebase';
import axios from 'axios'

export const initializeFirebase = () => {
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
}

const data = {
    "notification": {
        "title": "Firebase",
        "body": "Firebase is awesome",
        "click_action": "http://localhost:3000/",
        "icon": "https://upload.wikimedia.org/wikipedia/commons/8/8a/2048_logo.png"
    },
};

export const askForPermissioToReceiveNotifications = async () => {
  try {
    let Axiosoptions = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'key=AAAAF5u_Ojc:APA91bEFBlJ53l93c0vmKGEd1flbDyYQAn3_5ybdHOEl4075gylmnPl_e9iD3xCI9l3Nvn4fYiVrzTTF7OKbybXG5tbTUUUb058agUb9HTSyUvnztuGrKs0Vv_E3Nq2y93jqBLuHVKMA'
    }
  }
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    data.to = token;
    axios.post('https://fcm.googleapis.com/fcm/send', data, Axiosoptions)
    .then((res)=>{
      console.log("RESPONSE RECEIVED: ", res);
    })
    .catch((err)=>{
      console.log("Axios error: ", err);
    })
  } catch (error) {
    console.error(error);
  }
}
