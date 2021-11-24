import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA5JabX3yv5cRMqEwF6Ebq-VBfDLxuN5lk",
  authDomain: "gossip-5f3ba.firebaseapp.com",
  projectId: "gossip-5f3ba",
  storageBucket: "gossip-5f3ba.appspot.com",
  messagingSenderId: "219284175146",
  appId: "1:219284175146:web:6b73f55a8dc68a36de0653",
  measurementId: "G-3XMB7CL2W0"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;