import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAji_gY9TEs2s08n85o6XZKo7IzbLUensk",
    authDomain: "disney-plus-9b844.firebaseapp.com",
    projectId: "disney-plus-9b844",
    storageBucket: "disney-plus-9b844.appspot.com",
    messagingSenderId: "947195229952",
    appId: "1:947195229952:web:41fb38f8b5798cb8de25e5",
    measurementId: "G-C321VVQDRD"
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);