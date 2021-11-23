import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from '../firebase/fire'




export default function App() {

  const [id,setId]=useState("");

  useEffect(() => 
  {
    firebase.auth().onAuthStateChanged((user) => {
      console.log("user read");
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        console.log(uid);
        // ...
      } else {
        // User is signed out
        // ...
        console.log('user is  signed out');
      }
    });
  },[]);
  

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <StatusBar style="auto" />
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});