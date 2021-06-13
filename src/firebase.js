import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCF99NjAdIlMPq6kvwYn2XvDh53qRWcKGc",
  authDomain: "clone-cbb4c.firebaseapp.com",
  projectId: "clone-cbb4c",
  storageBucket: "clone-cbb4c.appspot.com",
  messagingSenderId: "336870923341",
  appId: "1:336870923341:web:3db082022d0e5cad755004",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
