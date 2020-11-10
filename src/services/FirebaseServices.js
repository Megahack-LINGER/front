import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDnIwM4_wDJrIOKFKyCsXMfmK7ubHbxWKQ",
    authDomain: "linger-b3189.firebaseapp.com",
    databaseURL: "https://linger-b3189.firebaseio.com",
    projectId: "linger-b3189",
    storageBucket: "linger-b3189.appspot.com",
    messagingSenderId: "783888320597",
    appId: "1:783888320597:web:15edbf21c2d90b8d832cdc",
    measurementId: "G-T7440LM1GV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase