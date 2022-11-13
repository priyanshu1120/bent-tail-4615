
import { initializeApp } from "firebase/app";
import{getAuth, GoogleAuthProvider} from "firebase/auth"
import{getStorage} from "firebase/storage"
import{getFirestore} from "firebase/firestore"
export const firebaseConfig = {
  apiKey: "AIzaSyBKrW57mHkPIxxCInrMtXRB_sznijOPs3c",
  authDomain: "mytv-app-user-signup.firebaseapp.com",
  projectId: "mytv-app-user-signup",
  storageBucket: "mytv-app-user-signup.appspot.com",
  messagingSenderId: "1024275903120",
  appId: "1:1024275903120:web:cf8028a9e06b944a5bde15",
  measurementId: "G-WB60BY5KC8"
};

// Initialize Firebase
const Userapp = initializeApp(firebaseConfig);
export const UserAuth =getAuth(Userapp);
export const Userdb = getFirestore(Userapp)
export const UserStorage = getStorage(Userapp);
export const Googleprovider = new GoogleAuthProvider(Userapp);