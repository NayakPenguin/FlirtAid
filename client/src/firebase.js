import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAAlXovzF-PDSFStmbY5OD9LwmSC1PxKg4",
    authDomain: "flirtaid.firebaseapp.com",
    projectId: "flirtaid",
    storageBucket: "flirtaid.appspot.com",
    messagingSenderId: "982360949782",
    appId: "1:982360949782:web:fb5ce994cbf9589725a137",
    measurementId: "G-T6K88V1FPH"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebaseApp.storage();


export { db, storage };