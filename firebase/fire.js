import * as firebase from 'firebase';
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAw6hVgzDBlBAucs269aX96Fi_VDEu35so",
  authDomain: "bitgaurd-4e222.firebaseapp.com",
  projectId: "bitgaurd-4e222",
  storageBucket: "bitgaurd-4e222.appspot.com",
  messagingSenderId: "997454642261",
  appId: "1:997454642261:web:0ce177000a90a9146468dc",
  measurementId: "G-NQBE9CSX94"
  
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;