// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFDmxnE4CcbZQ8hdhsT1ahvg_KvEVNycc",
  authDomain: "mountain-wines.firebaseapp.com",
  projectId: "mountain-wines",
  storageBucket: "mountain-wines.appspot.com",
  messagingSenderId: "705826554839",
  appId: "1:705826554839:web:edec4cbdf51b0cd8048192",
  measurementId: "G-CH3P4HC1JZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)