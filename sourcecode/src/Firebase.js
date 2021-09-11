import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAIBTB2LH4yyKsnROa58xiOaa_ZJWNZ79s",
  authDomain: "amaze-mart.firebaseapp.com",
  databaseURL:
    "https://amaze-mart-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "amaze-mart",
  storageBucket: "amaze-mart.appspot.com",
  messagingSenderId: "608786231527",
  appId: "1:608786231527:web:fc2dac2446eca7be34b242",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
