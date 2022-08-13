// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6bb4y_vtVxSN9ZlM6liaB2mtv2jAj1r8",
  authDomain: "chat-application-80ff6.firebaseapp.com",
  projectId: "chat-application-80ff6",
  storageBucket: "chat-application-80ff6.appspot.com",
  messagingSenderId: "1037013956871",
  appId: "1:1037013956871:web:db584ea77ce46277c3eda2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);