import firebase from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyAvII-UVixB_BNXyLSrvrqpyrucOjPpBbA",
    authDomain: "capstonemegis.firebaseapp.com",
    projectId: "capstonemegis",
    storageBucket: "capstonemegis.appspot.com",
    messagingSenderId: "104883895528",
    appId: "1:104883895528:web:bb7f705a3eeaa2f5901d5d",
    measurementId: "G-3KQD24JCML"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase;
  