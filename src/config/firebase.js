import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDjGoAbe_8AX5oTx3QGHMZeJLuDZeAqlzg",
    authDomain: "board-game-f8ea1.firebaseapp.com",
    projectId: "board-game-f8ea1",
    storageBucket: "board-game-f8ea1.appspot.com",
    messagingSenderId: "1032450493849",
    appId: "1:1032450493849:web:96025cf096dd6f158e5708",
    measurementId: "G-3CFRGCKNQV"
  };
export let appFirebase;
if (!firebase.apps.length) {
    appFirebase = firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore()