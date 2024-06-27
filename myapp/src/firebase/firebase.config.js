// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5Qbst4Sl3pLFno8Oo9sXAmayQAlznTEY",
  authDomain: "bookwala-12224.firebaseapp.com",
  projectId: "bookwala-12224",
  storageBucket: "bookwala-12224.appspot.com",
  messagingSenderId: "445128644841",
  appId: "1:445128644841:web:07db9df8bd80c7f3f5f878",
  measurementId: "G-C2LE5PTCXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app