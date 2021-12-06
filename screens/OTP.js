import { StatusBar } from 'expo-status-bar';
import React,{useState,useRef,useEffect} from 'react';
import { Image,ImageBackground,StyleSheet, Text, View ,TextInput,TouchableOpacity,Button,KeyboardAvoidingView} from 'react-native';

import firebase from '../firebase/fire';
import Firebase from 'firebase'


import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'

import * as Google from 'expo-google-app-auth';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto,Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import { getAuth, signInAnonymously } from "firebase/auth";

import { 
  Oswald_200ExtraLight,
  Oswald_300Light,
  Oswald_400Regular,
  Oswald_500Medium,
  Oswald_600SemiBold,
  Oswald_700Bold 
} from '@expo-google-fonts/oswald'
import { 
  Anton_400Regular 
} from '@expo-google-fonts/anton'
import { 
  Satisfy_400Regular 
} from '@expo-google-fonts/satisfy'
const image = { uri: "https://hazlitt.net/sites/default/files/styles/article-header-image/public/field/image/gossip-illo-web.jpg?itok=ELA1gHGp" };


export default function SignupScreen({route,navigation}) {
  
  const [Error,setError]=useState('');
  
  const { number,id} = route.params;

  const[d1,setD1]=useState('');
  const[d2,setD2]=useState('');
  const[d3,setD3]=useState('');
  const[d4,setD4]=useState('');
  const[d5,setD5]=useState('');
  const[d6,setD6]=useState('');

  const [phoneNumber,setPhoneNumber]=useState('');
  const [phoneNumber2,setPhoneNumber2]=useState('');
  const [code,setCode] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);

  
  useEffect(() => {
    if (code !== '') 
    {
      // Make API call to /beer
      confirmCode();
    } else {
      // Throw error 404, beer not found
      console.log('waiting');
    }
  }, [code]);

  const confirmCode2=()=>{
    setCode((d1+d2+d3+d4+d5+d6));
  }
  const confirmCode=()=>{
    
    const credential = firebase.auth.PhoneAuthProvider.credential(
        id,
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
  let [fontsLoaded,error]= useFonts({
    Oswald_200ExtraLight,
    Oswald_300Light,
    Oswald_400Regular,
    Oswald_500Medium,
    Oswald_600SemiBold,
    Oswald_700Bold,
    Anton_400Regular,
    Satisfy_400Regular  
  });
  if(!fontsLoaded)
  {
      return<AppLoading/>
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
       
    {/* <Text style={styles.HeaderText}>Gossip..</Text> */}
      <View style={styles.verification}>
        <Text style={styles.text1}>Verification</Text>
        <Text>Enter OTP code sent to your number {number}</Text>
        <View style={styles.otpCode}>
            <TextInput
            style={styles.digit}
            placeholder="0"
            onChangeText={(digit)=>{
              if(digit.length>1)
                  {
                    digit = digit.slice(0, -1); 
                  }
                  //console.log(number);
              setD1(digit.trim());
            }}
            value={d1}
            keyboardType="number-pad"/> 


          <TextInput
          style={styles.digit}
          placeholder="0"
          onChangeText={(digit)=>{
              if(digit.length>1)
                  {
                    digit = digit.slice(0, -1); 
                  }
                  //console.log(number);
              setD2(digit.trim());
            }}
          value={d2}
          keyboardType="number-pad"/> 



<TextInput
          style={styles.digit}
          placeholder="0"
          onChangeText={(digit)=>{
              if(digit.length>1)
                  {
                    digit = digit.slice(0, -1); 
                  }
                  //console.log(number);
              setD3(digit.trim());
            }}
          value={d3}
          keyboardType="number-pad"/>   


<TextInput
          style={styles.digit}
          placeholder="0"
          onChangeText={(digit)=>{
              if(digit.length>1)
                  {
                    digit = digit.slice(0, -1); 
                  }
                  //console.log(number);
              setD4(digit.trim());
            }}
          value={d4}
          keyboardType="number-pad"/> 

<TextInput
          style={styles.digit}
          placeholder="0"
          onChangeText={(digit)=>{
              if(digit.length>1)
                  {
                    digit = digit.slice(0, -1); 
                  }
                  //console.log(number);
              setD5(digit.trim());
            }}
          value={d5}
          keyboardType="number-pad"/> 


<TextInput
          style={styles.digit}
          placeholder="0"
          onChangeText={(digit)=>{
              if(digit.length>1)
                  {
                    digit = digit.slice(0, -1); 
                  }
                  //console.log(number);
              setD6(digit.trim());
              
            }}
          value={d6}
          
          keyboardType="number-pad"/>    
        </View>

        <Text>{number}</Text>
        <Text>{code}</Text>
        <Text>{id}</Text>    
</View>
        <View style={styles.btnContainer}>
        <TouchableOpacity onPress={()=>{confirmCode2()}} style={styles.button2}>
           <Text style={styles.btnText2}>Confirm Code</Text>
           <AntDesign name="arrowright" size={24} color="white" />
        </TouchableOpacity>
        
        {/* <TouchableOpacity onPress={()=>{sentVerification()}} style={styles.button2}>
           <Text style={styles.btnText2} >Send OTP</Text>
        </TouchableOpacity> */}
      </View>
      
      
    </View>
    </ImageBackground>
    </View> 
  );
}

const styles = StyleSheet.create({
  verification:
  {
    marginBottom:"130%",

  },
  text1: {
    fontWeight:"bold",
    fontSize:17,
  },
  otpCode:
  {
    padding:10,
    width:'80%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center',
  },
  digit:
  {
    backgroundColor:'#eee',
    padding:10,
    borderRadius:5,
    width:'16%',
    textAlign:'center',
    fontSize:16,
    marginLeft:10,
    borderColor:'black',
    borderWidth:1,
  },
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

    width:'80%',
    alignItems: 'center',
    position:'absolute',
    bottom: "8%",
    backgroundColor:'#FFFFFF',
  },
  button2:
  {
    padding:15,
    alignItems:'center',
    width:'100%',
    backgroundColor: 'black',
    borderRadius:5,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  btnText2:{
    color: 'white',
    marginLeft:"30%",
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
      marginTop:60,
      borderRadius:5,
      fontWeight:'500',
      fontSize:70,
      
  },
  numCode:
  {
      borderRadius:15,
      marginRight:3,
      marginLeft:10,
      
  },
  HeaderText:
  {
    fontSize:53,
    marginTop:60,
    fontFamily:'Satisfy_400Regular',
    color:'rgb(67,63,64)',
    letterSpacing:2,
  }

});