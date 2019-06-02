import firebase from 'firebase';

export const initializeFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: '920381854822' // troque pelo seu sender id     
  });
  console.log('firebase initialized with Sender Id: 920381854822 ');
  // use other service worker
  // navigator.serviceWorker
  //   .register('/my-sw.js')
  //   .then((registration) => {
  //     firebase.messaging().useServiceWorker(registration);
  //   });
}



export function initFirebaseMessagingRegistration () {
  const messageElement = document.getElementById("message")
  const tokenElement = document.getElementById("token")
  const notificationElement = document.getElementById("notification")
  const errorElement = document.getElementById("error")


  const messaging = firebase.messaging();
  messaging
    .requestPermission()
    .then(() => {
      messageElement.innerHTML = "Got notification permission";
      console.log("Got notification permission");
      return messaging.getToken();
    })
    .then((token) => {
      // print the token on the HTML page
      tokenElement.innerHTML = "Token is " + token;
    })
    .catch((err) => {
      errorElement.innerHTML = "Error: " + err;
      console.log("Didn't get notification permission", err);
    });
}



export const askForPermissioToReceiveNotifications = async () => {
  try {

    const messaging = firebase.messaging();
    console.log('askFor pre-request promise');
    console.dir(messaging);

    const poop = await messaging.requestPermission();
    console.log(poop);

    console.log(' askFor done with request promise');

    const token = await messaging.getToken();
    console.log('waiting for token');

    console.log('user token: ', token);

    return token;
  } catch (error) {
    console.error(error);
  }
}
