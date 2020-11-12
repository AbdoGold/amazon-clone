import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCTcbp8pWxxTtyWrv6UHGuUVxXkyHMKR_M",
    authDomain: "cloning-47136.firebaseapp.com",
    databaseURL: "https://cloning-47136.firebaseio.com",
    projectId: "cloning-47136",
    storageBucket: "cloning-47136.appspot.com",
    messagingSenderId: "772218995",
    appId: "1:772218995:web:efce6455e7f1553ae2ca06",
    measurementId: "G-4LPQ4PCMSB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig );

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};

