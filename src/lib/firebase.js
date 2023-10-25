// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIzkRP7VQNEwf-44YM2KkaULAZWAgaKew",
  authDomain: "christianaugustyn-d4a30.firebaseapp.com",
  projectId: "christianaugustyn-d4a30",
  storageBucket: "christianaugustyn-d4a30.appspot.com",
  messagingSenderId: "680100166463",
  appId: "1:680100166463:web:3e2eb37305bc356da7f18a",
  measurementId: "G-5TZWZZV170"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);