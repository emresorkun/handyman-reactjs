//import * as firebase from "firebase/app";
//import 'firebase/firestore';
import { initializeApp } from "@firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDh_COdB4Z4T-rp2vw80TkS7Q1icg7fF7k",
  authDomain: "tahtadan-tukkan.firebaseapp.com",
  projectId: "tahtadan-tukkan",
  storageBucket: "tahtadan-tukkan.appspot.com",
  messagingSenderId: "574836843125",
  appId: "1:574836843125:web:7440e4e20eb1f989334e3c",
  measurementId: "G-14TN7RW24G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//firebase.initializeApp(firebaseConfig);
//  var commentsRef= firebase.database()
//const projectFireStore =firebase.firestore();

export const db = getFirestore(app);
