import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuHG0VpHGbZTH91WL83op7nyjj3mhQYOQ",
  authDomain: "to-do-app-cp-12d38.firebaseapp.com",
  projectId: "to-do-app-cp-12d38",
  storageBucket: "to-do-app-cp-12d38.appspot.com",
  messagingSenderId: "674290903185",
  appId: "1:674290903185:web:b4c745d5ef952770b1b730",
  measurementId: "G-5GJM0LDKV8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();

export default db;
