import * as firebase from 'firebase';
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAgh2T7sLg-lyhweKBCf0yI2OWKsQbSImw",
  authDomain: "pass-5054d.firebaseapp.com",
  projectId: "pass-5054d",
  storageBucket: "pass-5054d.appspot.com",
  messagingSenderId: "1008976412474",
  appId: "1:1008976412474:web:a92166f36d996fb09ada03"
  
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;