import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity,Button,KeyboardAvoidingView} from 'react-native';
import firebase from '../firebase/fire';

import * as Google from 'expo-google-app-auth';
import { AntDesign } from '@expo/vector-icons';





export default function SignupScreen({navigation}) {
  
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [Error,setError]=useState('');
  const [googleSubmitting,setGoogleSubmitting]=useState(false);


  const handleGoogleSignin=()=>{
    const config= {
      iosClientId:`219284175146-6f1tq9uk0a6r76tjte6e6df59sqnj0dn.apps.googleusercontent.com`,
      androidClientId:`219284175146-bvngane5ssmujvteiosg672mpdof6r5a.apps.googleusercontent.com`,
      scopes: ['profile', 'email']
    }
    Google.logInAsync(config).then((result)=>
    {
      const {type,user} = result;
      if(type == 'success')
      {
        const {email,name,photoUrl}=user;
        console.log('google signin success');
        setTimeout(()=> navigation.navigate('Home',{email,name,photoUrl}),1000);
      }
      else
      {
        console.log('google signin failed');
      }
    }).catch((err)=>
    {
      console.error(err.message);
    })
  }




  const signInWithGoogle =  async() =>{
    try {
      const result = await Google.logInAsync({
        behavior:'web',
        androidClientId: '219284175146-g4ltjbim9spqhiiul2j7r7onb66b3rnh.apps.googleusercontent.com',
        iosClientId: '219284175146-mer84s58cr8gl9t2potaglt7tehs68ul.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });
  
      if (result.type === 'success') {
        this.onSignIn(result);
        return result.accessToken;
        
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }



  const signUp = async()=>{
    
    firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
      navigation.navigate('Home');
    }).catch((err)=>{console.log(err.message)});
  } 
  

  return (
    <View style={styles.container}>
      <Text>SignUp</Text>
      <KeyboardAvoidingView
       behavior="padding"
      >
      <TextInput placeholder="Enter the user Mail" value={email} onChangeText={(text)=>
        {
          setEmail(text.trim());
        }
      } style={styles.input}></TextInput>
      <TextInput placeholder="Enter the user Password" value={password} onChangeText={(text)=>setPassword(text)} style={styles.input} secureTextEntry></TextInput>
      </KeyboardAvoidingView>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={()=>{}} style={styles.button}>
           <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{signUp()}} style={styles.button2}>
           <Text style={styles.btnText2} >register</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={()=>handleGoogleSignin()}>
            <AntDesign name="google" size={24} color="black" />    
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',

  },
  btnContainer:{

    width:'60%',
    alignItems: 'center',
    marginTop:20,
  },
  button:
  {
    padding:15,
    alignItems:'center',
    width:'80%',
    backgroundColor: 'white',
    borderRadius:5,
    marginBottom:20,
    borderWidth:1,
    borderColor: 'black',
  },
  button2:
  {
    padding:15,
    alignItems:'center',
    width:'80%',
    backgroundColor: 'black',
    borderRadius:5,
    marginBottom:20,

  },
  btnText2:{
    color: 'white',
  },
  input:{
    padding:10,
    backgroundColor: 'white',
    color: 'red',
    marginTop:5,
    borderRadius:5,
  }
   
});