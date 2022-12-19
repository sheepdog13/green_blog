// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: "green-blog-34ea5.firebaseapp.com",
    projectId: "green-blog-34ea5",
    storageBucket: "green-blog-34ea5.appspot.com",
    messagingSenderId: "961782355000",
    appId: process.env.REACT_APP_FIREBASE_APPID
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);