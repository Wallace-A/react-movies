
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDr2qt11HY41GGE6w1zQebhoj9ZDdWu--U",
  authDomain: "new-52-movies.firebaseapp.com",
  projectId: "new-52-movies",
  storageBucket: "new-52-movies.appspot.com",
  messagingSenderId: "152918840411",
  appId: "1:152918840411:web:53fe9c47f4e2298c0b9b7e",
  measurementId: "G-6DQ01WGXPJ"
});

const db = firebase.firestore();

export default db;