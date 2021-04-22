/*eslint-disable*/
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();// BASE DE DATOS
const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); //REFERENCIA A FIRESTORE CON EL PROVIDER DE GOOGLE, LO MISMO SE PUEDE USAR PARA EL RESTO DE LOGINS

export {
    db,
    googleAuthProvider,
    firebase
}