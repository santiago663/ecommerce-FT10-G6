/*eslint-disable*/
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDxdosLyGjWe-Hz-jcsvKYFQbtlgMCup8k",
    authDomain: "henry-e-commerce-46a91.firebaseapp.com",
    projectId: "henry-e-commerce-46a91",
    storageBucket: "henry-e-commerce-46a91.appspot.com",
    messagingSenderId: "624784169475",
    appId: "1:624784169475:web:a4be38b3c7e67697f94c36"
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