// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFCWxClbg0_WkxFSCgXdtTQwdr-7XW8t0",
  authDomain: "soriana-feea2.firebaseapp.com",
  projectId: "soriana-feea2",
  storageBucket: "soriana-feea2.appspot.com",
  messagingSenderId: "760022226690",
  appId: "1:760022226690:web:12e48e1397e660b532541b",
  measurementId: "G-Y720NKC75M"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);