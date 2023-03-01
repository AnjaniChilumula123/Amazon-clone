// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCp8PO_6QNDjg67xnnb8CSD9Jp9J3nrZpw",
    authDomain: "clone-40438.firebaseapp.com",
    projectId: "clone-40438",
    storageBucket: "clone-40438.appspot.com",
    messagingSenderId: "591888602781",
    appId: "1:591888602781:web:c837bf9ccdaf68b3ede674",
    measurementId: "G-6PX1EGLMTZ"
  };

  // eslint-disable-next-line no-unused-vars
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  const auth = firebase.auth();

  export {db ,auth}; 