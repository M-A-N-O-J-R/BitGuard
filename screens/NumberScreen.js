import { StatusBar } from 'expo-status-bar';
import React,{useState,useRef} from 'react';
import { Image,ImageBackground,StyleSheet, Text, View ,TextInput,TouchableOpacity,Button,KeyboardAvoidingView} from 'react-native';

import firebase from '../firebase/fire';
import Firebase from 'firebase'


import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'

import * as Google from 'expo-google-app-auth';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto,Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';

import { getAuth, signInAnonymously } from "firebase/auth";

const image = { uri: "https://hazlitt.net/sites/default/files/styles/article-header-image/public/field/image/gossip-illo-web.jpg?itok=ELA1gHGp" };


export default function SignupScreen({navigation}) {
  
  const [Error,setError]=useState('');
 

  const [phoneNumber,setPhoneNumber]=useState('');
  const [phoneNumber2,setPhoneNumber2]=useState('');
  const [code,setCode] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);

  const sentVerification=()=>{

    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider.verifyPhoneNumber(phoneNumber2,recaptchaVerifier.current).then(setVerificationId).
    catch((err)=>{
        console.error(err.message);
    })

  };

  const confirmCode=()=>{
    const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        code
      );
        firebase.auth().signInWithCredential(credential).then((result)=>{
            console.log('phone login success');
            navigation.navigate('Home');
            
        }).catch((err)=>{
            console.error(err.message);
        });
  };
  
  const anonymousSignin =()=>{

    firebase.auth().signInAnonymously()
  .then(() => {
    // Signed in..
    console.log('anon signin success');
     navigation.navigate('Home');
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.log(errorMessage);
  });


  } 

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
        const credential = Firebase.auth.GoogleAuthProvider.credential( //Set the tokens to Firebase
          result.idToken,
          result.accessToken
        );
        firebase.auth()
          .signInWithCredential(credential) //Login to Firebase
          .catch((error) => {
            console.log(error);
          });
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

  const isUserEqual=(googleUser, firebaseUser)=> {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
            providerData[i].uid === googleUser.getBasicProfile().getId()) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  }
  
  const onSignIn=(googleUser) => {
    console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.getAuthResponse().id_token);
  
        // Sign in with credential from the Google user.
        firebase.auth().signInWithCredential(credential).catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
      } else {
        console.log('User already signed-in Firebase.');
      }
    });
  }




  const signUp = async()=>{
    
    firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
      navigation.navigate('Home');
    }).catch((err)=>{console.log(err.message)});
  } 
  

  return (
   <View style={styles.container1}>
    <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={
         {
            apiKey: "AIzaSyA5JabX3yv5cRMqEwF6Ebq-VBfDLxuN5lk",
            authDomain: "gossip-5f3ba.firebaseapp.com",
            projectId: "gossip-5f3ba",
            storageBucket: "gossip-5f3ba.appspot.com",
            messagingSenderId: "219284175146",
            appId: "1:219284175146:web:6b73f55a8dc68a36de0653",
            measurementId: "G-3XMB7CL2W0"
        }}
        /> 
   <ImageBackground source={require('../assets/bg8.jpg')} resizeMode="cover" style={styles.image}>
    <View style={styles.container}>
       
      <Text>SignUp</Text>
      <KeyboardAvoidingView
       behavior="padding"
       style={styles.numberCont}>
            <Image source={require('../assets/india2.png')} style={styles.numCode}/>
            <Text>+91</Text>   
        
        <TextInput 
            placeholder="Enter Phone Number" 
            value={phoneNumber} 
            onChangeText={(number) =>
                {
                  if(number.length>10)
                  {
                    number = number.slice(0, -1); 
                  }
                  //console.log(number);
                  setPhoneNumber(number.trim());
                }
                } 
            style={styles.input}
            keyboardType="phone-pad"

        ></TextInput>
      
      {/* <TextInput placeholder="Enter the user Password" value={password} onChangeText={(text)=>setPassword(text)} style={styles.input} secureTextEntry></TextInput> */}
      </KeyboardAvoidingView>
      <View style={styles.btnContainer}>
        {/* <TouchableOpacity onPress={()=>{}} style={styles.button}>
           <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={()=>{
            let num ='+91'+phoneNumber;
            num=num.trim();
            console.log(num);
            setPhoneNumber2(num);
            console.log(phoneNumber2);
            sentVerification()
            }} style={styles.button2}>
           <Text style={styles.btnText2} >Send OTP</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        placeholder="Confirmation Code"
        onChangeText={(text)=>{
            setCode(text);
        }}
        value={code}
        keyboardType="number-pad"/>
        <View style={styles.btnContainer}>
        <TouchableOpacity onPress={()=>{confirmCode()}} style={styles.button}>
           <Text style={styles.btnText}>Confirm Code</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={()=>{sentVerification()}} style={styles.button2}>
           <Text style={styles.btnText2} >Send OTP</Text>
        </TouchableOpacity> */}
      </View>
      <Text style={styles.otext}>--------------------or--------------------</Text>
      <View style={styles.otherLogin}>
        <View style={styles.otherLogingrp}>
          <TouchableOpacity onPress={()=>handleGoogleSignin()} style={styles.icons}>
            {/* <AntDesign name="google" size={27} color="black" />
                 */}
            <Image source={require('../assets/google.png')} style={styles.gicon}/>    
          </TouchableOpacity>
          <Text style={styles.otext}>Google</Text>
        </View>
        <View style={styles.otherLogingrp}>
          <TouchableOpacity onPress={()=>anonymousSignin()} style={styles.icons}>
            <MaterialCommunityIcons name="location-enter" size={27} color="black" />
          
          </TouchableOpacity>
          <Text style={styles.otext}>Anonymous</Text>
        </View>
        <View style={styles.otherLogingrp}>
          <TouchableOpacity onPress={()=>{navigation.navigate('Signup')}} style={styles.icons}>
          <Ionicons name="mail-open-outline" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.otext}>Email</Text>
        </View>
      </View>
      
    </View>
    </ImageBackground>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent:'center',
    width: '100%',

  },
  container1: {
    flex: 1,
    width: '100%',
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
    marginBottom:30,

  },
  btnText2:{
    color: 'white',
  },
  input:{
    padding:10,
    backgroundColor: 'white',
    borderRadius:5,
    width:'70%',
    marginLeft:10,
    fontWeight:'500',
    fontSize:15
  },
  image: {
    flex: 1,
    justifyContent: "center",
  
  },
  icons: {
    backgroundColor:'white',
    padding:6,
    borderRadius:50,
  },
  icons2: {
    backgroundColor:'white',
    padding:6,
    borderRadius:20,
    height:40,
    width:40,
    alignItems: 'center'
  },
  otherLogin:
  {
    flexDirection:'row',
    marginTop:30,
    width:'80%',
    justifyContent:'space-around',
    alignItems: 'center',
    padding:20,
  },
  otherLogingrp:
  {
    flexDirection:'column',
    justifyContent:'center',
    alignItems: 'center',
  },
  otext:
  {
    color: 'black',
    fontWeight:'400',
    marginTop:3,
  },
  numberCont:
  {
      
      width:'70%',
      backgroundColor: 'white',
      alignItems: 'center',
      flexDirection:'row',
      marginTop:5,
      borderRadius:5,
      fontWeight:'500',
      fontSize:70,
      
  },
  numCode:
  {
      borderRadius:15,
      marginRight:3,
      marginLeft:10,
      
  }

});