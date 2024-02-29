// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Firebaseサービスのインポート
//Authentication
import { getAuth } from "firebase/auth";

//Cloud Firestore
import { getFirestore } from "firebase/firestore";

//Cloud Storage
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwzrwWTtytO9QcNr_eD4cDLlYe0HugHj0",
  authDomain: "myway-9ead5.firebaseapp.com",
  projectId: "myway-9ead5",
  storageBucket: "myway-9ead5.appspot.com",
  messagingSenderId: "263326446199",
  appId: "1:263326446199:web:83cabaff2c26d54cc3cc72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Authentication
const auth = getAuth(app);
//Cloud Firestore
const db = getFirestore(app);
//Cloud Storage
const storage = getStorage(app);

//エクスポート
export { app, auth, db, storage};