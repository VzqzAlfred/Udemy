// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjLjYLwnQdswA2B-1L6iVTlNkKuW60Aaw",
  authDomain: "fir-auth-744b7.firebaseapp.com",
  projectId: "fir-auth-744b7",
  storageBucket: "fir-auth-744b7.appspot.com",
  messagingSenderId: "671888072349",
  appId: "1:671888072349:web:b1b66c4580ec3771d3be74",
  measurementId: "G-92Y2X3KR2N",
};

const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth();
export { auth };
