//import * as firebase from "firebase/app";
//import 'firebase/firestore';
import { initializeApp } from "@firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "tahtadan-tukkan.firebaseapp.com",
  projectId: "tahtadan-tukkan",
  storageBucket: "tahtadan-tukkan.appspot.com",
  messagingSenderId: "574836843125",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-14TN7RW24G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//firebase.initializeApp(firebaseConfig);

//const projectFireStore =firebase.firestore();

export const db = getFirestore(app);
