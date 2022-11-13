
import { initializeApp } from "firebase/app";
import{getAuth, GoogleAuthProvider} from "firebase/auth"
import{getStorage} from "firebase/storage"
import{getFirestore} from "firebase/firestore"
export const firebaseConfig = {
  apiKey: "AIzaSyBfYXAB8Rh5aegw0pGi9aPabxkSxrL76MM",
  authDomain: "my-app-tv-user.firebaseapp.com",
  projectId: "my-app-tv-user",
  storageBucket: "my-app-tv-user.appspot.com",
  messagingSenderId: "206951734006",
  appId: "1:206951734006:web:10e2d09b0c472ae290ead7",
  measurementId: "G-7GV22D87RT"
};

// Initialize Firebase
const Userapp = initializeApp(firebaseConfig);
export const UserAuth =getAuth(Userapp);
export const Userdb = getFirestore(Userapp)
export const UserStorage = getStorage(Userapp);
export const Googleprovider = new GoogleAuthProvider(Userapp);