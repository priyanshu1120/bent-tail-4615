
// import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth"
// const firebaseConfig = {
//   apiKey: "AIzaSyBehvPf4XiVdZQ-szSxL7irDo9iM-Ng4p8",
//   authDomain: "my-tv-app-3eec8.firebaseapp.com",
//   projectId: "my-tv-app-3eec8",
//   storageBucket: "my-tv-app-3eec8.appspot.com",
//   messagingSenderId: "556914179246",
//   appId: "1:556914179246:web:623dd2039d4584cda4813f",
//   measurementId: "G-7L8NNGKKTJ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const firebaseAuth = getAuth(app);
// export const auth = app.auth();


import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

var firebaseConfig = {
   // your firebase configuration goes here
     apiKey: "AIzaSyBehvPf4XiVdZQ-szSxL7irDo9iM-Ng4p8",
  authDomain: "my-tv-app-3eec8.firebaseapp.com",
  projectId: "my-tv-app-3eec8",
  storageBucket: "my-tv-app-3eec8.appspot.com",
  messagingSenderId: "556914179246",
  appId: "1:556914179246:web:623dd2039d4584cda4813f",
  measurementId: "G-7L8NNGKKTJ"
};

const firebaseDB = firebase.initializeApp(firebaseConfig);

const db = firebaseDB.database().ref();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider, db };