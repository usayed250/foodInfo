import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUDnXdpnw3PbToAwWaL1VEsIxbdKZjmZQ",
  authDomain: "recipeauthentication.firebaseapp.com",
  projectId: "recipeauthentication",
  storageBucket: "recipeauthentication.appspot.com",
  messagingSenderId: "964667099827",
  appId: "1:964667099827:web:09320bac282b877bf87ec6",
  measurementId: "G-J8TDFV3R1Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth =  getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

