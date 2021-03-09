import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBL3dd4gNwBX9WSg_BKAyvhfwA1oSLC0ss',
  authDomain: 'netflix-build-d97be.firebaseapp.com',
  projectId: 'netflix-build-d97be',
  storageBucket: 'netflix-build-d97be.appspot.com',
  messagingSenderId: '670081404396',
  appId: '1:670081404396:web:aa9be030ea45785d5004c9',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
