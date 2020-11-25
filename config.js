 import firebase from 'firebase'
require("firebase/firestore")


 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCfVfvm0ztUpWe_s2V9N846EJgQswDzwW8",
    authDomain: "newsletter-a2660.firebaseapp.com",
    databaseURL: "https://newsletter-a2660.firebaseio.com",
    projectId: "newsletter-a2660",
    storageBucket: "newsletter-a2660.appspot.com",
    messagingSenderId: "27826253316",
    appId: "1:27826253316:web:6434aae459ec5644570f51"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);