// import firebase from 'firebase';

// const firebaseConfig = {
//     apiKey: "AIzaSyAJ9LSJ1O7fHneHJ68zEVKZRMCZOKmY4TQ",
//     authDomain: "snapchat-68af0.firebaseapp.com",
//     projectId: "snapchat-68af0",
//     storageBucket: "snapchat-68af0.appspot.com",
//     messagingSenderId: "863415429752",
//     appId: "1:863415429752:web:e40063fa9fa345169b5b8d"
//   };

//   const firebaseApp = firebase.initializeApp(firebaseConfig);
//   const db = firebaseApp.firestore();
//   const auth = firebase.auth();
//   const storage = firebase.storage();
//   const provider = new firebase.auth.GoogleAuthProvider();

//   export { db,auth,storage,provider};
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAJ9LSJ1O7fHneHJ68zEVKZRMCZOKmY4TQ",
  authDomain: "snapchat-68af0.firebaseapp.com",
  projectId: "snapchat-68af0",
  storageBucket: "snapchat-68af0.appspot.com",
  messagingSenderId: "863415429752",
  appId: "1:863415429752:web:e40063fa9fa345169b5b8d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };

  