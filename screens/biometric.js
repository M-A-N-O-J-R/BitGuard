import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ImageBackground,Image } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { Center } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

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
  

const LocalAuth=({navigation})=>{
    const [compatible, isCompatible] = useState(false);
    const [fingerPrints, setFingerPrints] = useState(false);

    useEffect(()=>{
        checkDeviceForHardware();
        checkForFingerprints();
     },[])
 
     const checkDeviceForHardware= async()=>{
         let compatible = await LocalAuthentication.hasHardwareAsync();
         isCompatible(compatible);
         //console.log('compatible',compatible);
     }
 
     const checkForFingerprints = async () => {
         let fingerprints = await LocalAuthentication.isEnrolledAsync();
         setFingerPrints( fingerprints );
         //console.log('fingerPrints', fingerprints)
       };
 
       const  scanFingerprint = async () => {
       
        if(compatible&&fingerPrints)
        {
          await LocalAuthentication.authenticateAsync()
          .then(res=>{
              if(res.success===true){
                navigation.navigate('Signin');
              }}).catch((err)=>{
                console.log(err.message);
              }) 
        }
         else
         {
           console.log('not compatible');
         }

       };

    return(
        
        <ImageBackground source={require('../assets/bg13.png')} style={styles.container}>
                           <View style={{flexDirection:'row'}}>

            <TouchableOpacity onPress={ ()=>scanFingerprint()}>
                {/* <Text allowFontScaling={ false }>SCAN</Text> */}
                <Text  allowFontScaling={ false } style={{fontFamily:'Merriweather_400Regular_Italic', backgroundColor:'black',color:'white',borderRadius:6,fontSize:30,padding:15,alignItems:'center',justifyContent:'center'}}>Enter
                
                </Text>
            <Ionicons name={'arrow-forward-circle'} color={'black'} size={40}/>
            
            </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default LocalAuth;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"lavender",
        alignItems:'center',
        justifyContent:'center'
    },
    fingerPrint: {
        flex:1,
        justifyContent:'center',
        alignItems: "center",
        alignContent:'center',
        marginTop: 25,
        backgroundColor:'red'
    },
    fpImage: {
        alignSelf: "center",
        marginBottom: 8
    },
    
    fpText: {
        fontFamily: "pl",
        fontSize: 15,
        color: "#341931"
    },
    
});