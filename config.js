import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyADfH-b5imRXo7KzmkjsyBPjg4d87iVUv4",
    authDomain: "booksanta-a68d0.firebaseapp.com",
    projectId: "booksanta-a68d0",
    storageBucket: "booksanta-a68d0.appspot.com",
    messagingSenderId: "633356627483",
    appId: "1:633356627483:web:429ce0ca96ad95abd4d2be"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore