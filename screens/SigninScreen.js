import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Image,ImageBackground,StyleSheet, Text, View ,TextInput,TouchableOpacity,Button,KeyboardAvoidingView} from 'react-native';

import firebase from '../firebase/fire';
import Firebase from 'firebase'


import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'

import * as Google from 'expo-google-app-auth';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons,Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { FontAwesome } from '@expo/vector-icons'; 


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
  Satisfy_400Regular 
} from '@expo-google-fonts/satisfy'
import { 
  Merriweather_300Light,
  Merriweather_300Light_Italic,
  Merriweather_400Regular,
  Merriweather_400Regular_Italic,
  Merriweather_700Bold,
  Merriweather_700Bold_Italic,
  Merriweather_900Black,
  Merriweather_900Black_Italic 
} from '@expo-google-fonts/merriweather'
const image = { uri: "https://hazlitt.net/sites/default/files/styles/article-header-image/public/field/image/gossip-illo-web.jpg?itok=ELA1gHGp" };


export default function SignupScreen({navigation}) {
  
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [Error,setError]=useState('');
 

  const [phoneNumber,setPhoneNumber]=useState('');
  const [code,setCode] = useState('');

  const sentVerification=()=>{

  };

  const confirmCode=()=>{

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

  const signIn = async()=>{
    console.log(email);
    console.log(password);
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      navigation.navigate('Home');
    }).catch((err)=>{console.log(err.message)});
  }


  const signUp = async()=>{
    
    firebase.auth().createUserWithEmailAndPassword(email,password).then((email,password)=>signInWithEmailAndPassword(email,password)).then(()=>{
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
  Satisfy_400Regular,
  Merriweather_300Light,
  Merriweather_300Light_Italic,
  Merriweather_400Regular,
  Merriweather_400Regular_Italic,
  Merriweather_700Bold,
  Merriweather_700Bold_Italic,
  Merriweather_900Black,
  Merriweather_900Black_Italic
});
if(!fontsLoaded)
{
    return<AppLoading/>
}    

  return (
   <View style={styles.container1}> 
   <ImageBackground source={require('../assets/sbg.jpeg')} resizeMode="cover" style={styles.image}>
    <View style={styles.container}>
       <View style={{height: 100,...styles.title}}>
          <Text style={styles.HeaderText}>BitGaurd</Text>
          <FontAwesome name="shield" size={50} color="black" />
       </View>
    
      <KeyboardAvoidingView
       behavior="padding" style={styles.container2}
      >
      <View style={styles.inputCont}>
      <Ionicons name="mail-open-outline" size={24} color="black" style={styles.icones}/>
        <TextInput placeholder="E-Mail" value={email} onChangeText={(text)=>
          {
            setEmail(text.trim());
          }
        } style={styles.input}></TextInput>
      </View>
      
      <View style={styles.inputCont}>
      <MaterialCommunityIcons name="key-outline" size={24} color="black" style={styles.icones} />
      <TextInput placeholder="Password" value={password} onChangeText={(text)=>setPassword(text)} style={styles.input} secureTextEntry></TextInput>
      </View>
      </KeyboardAvoidingView>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={()=>{signIn()}} style={styles.button2}>
           <Text style={styles.btnText2}>Login</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={()=>{signUp()}} style={styles.button2}>
           <Text style={styles.btnText2} >register</Text>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={()=>{navigation.navigate('Signup')}} style={{alignItems: 'center'}}>
           <Text style={styles.link}>Don't have an account? </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{}} style={{alignItems: 'center'}}>
           <Text style={styles.link}>Forgot password?</Text>
        </TouchableOpacity>
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
        
       
      </View>
      
    </View>
    </ImageBackground>
    </View> 
  );
}

const styles = StyleSheet.create({
  title:
  {
    
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    width:'55%',
    marginTop:'25%',
    marginBottom:'17%',

  },
  link:
  {
    color:'rgb(0,149,247)',
    marginBottom:20,
  },
  icones:{
    marginLeft:17,
  },
  inputCont:
  {
    backgroundColor:'white',
    width:'70%',
    marginTop:12,
    flexDirection:'row',
    alignItems: 'center',
    borderRadius:7,
    justifyContent: 'flex-start',
    borderColor: 'black',
    
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
  container2: {
    width: '100%',
    alignItems: 'center',
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
    marginTop:10,
  },
  btnText2:{
    color: 'white',
  },
  input:{
    padding:10,
    backgroundColor: 'white',
    color: 'black',
    borderRadius:5,
    marginLeft:"5%",
    fontSize:14,
    width:"80%",
    
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
    alignItems: 'center',
    justifyContent: 'center',
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
  HeaderText:
  {
    fontSize:32,
    fontFamily:'Merriweather_700Bold_Italic',
    color:'rgb(51,51,51)',
    letterSpacing:2,
  },
});