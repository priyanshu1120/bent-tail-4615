
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBehvPf4XiVdZQ-szSxL7irDo9iM-Ng4p8",
  authDomain: "my-tv-app-3eec8.firebaseapp.com",
  projectId: "my-tv-app-3eec8",
  storageBucket: "my-tv-app-3eec8.appspot.com",
  messagingSenderId: "556914179246",
  appId: "1:556914179246:web:623dd2039d4584cda4813f",
  measurementId: "G-7L8NNGKKTJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);