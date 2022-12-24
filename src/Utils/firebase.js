
import { initializeApp } from "firebase/app";
import{getAuth, GoogleAuthProvider} from "firebase/auth"
import{getStorage} from "firebase/storage"
import{getFirestore} from "firebase/firestore"
export const firebaseConfig = {
  apiKey: "AIzaSyBcSRk1li7bGtE0hLu3jM7-tI2WYphcck0",
  authDomain: "mytv-e1b89.firebaseapp.com",
  projectId: "mytv-e1b89",
  storageBucket: "mytv-e1b89.appspot.com",
  messagingSenderId: "6861621605",
  appId: "1:6861621605:web:0ed390d1b02e23d625398c",
  measurementId: "G-HKH8VHWXZH"
};

// Initialize Firebase
const Userapp = initializeApp(firebaseConfig);
export const UserAuth =getAuth(Userapp);
export const Userdb = getFirestore(Userapp)
export const UserStorage = getStorage(Userapp);
export const Googleprovider = new GoogleAuthProvider(Userapp);