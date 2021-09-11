import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAIBTB2LH4yyKsnROa58xiOaa_ZJWNZ79s",
  authDomain: "amaze-mart.firebaseapp.com",
  databaseURL:
    "https://amaze-mart-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "amaze-mart",
  storageBucket: "amaze-mart.appspot.com",
  messagingSenderId: "608786231527",
  appId: "1:608786231527:web:fc2dac2446eca7be34b242",
  measurementId: "G-VMR92076DD",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth };
