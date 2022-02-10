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
        <View style={{flex:1,backgroundColor:'#FFFFFF'}}>
                <Image source={require('../assets/splash.gif')} style={styles.img}></Image>
                <TouchableOpacity style={styles.button} onPress={ ()=>scanFingerprint()}>
                {/* <Text allowFontScaling={ false }>SCAN</Text> */}
                <Text  style={{color:'white',fontSize:30,fontFamily:'Merriweather_400Regular_Italic'}} allowFontScaling={ false } >Enter
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default LocalAuth;

const styles = StyleSheet.create({
    img:{
        marginTop:230,
        height:400,
        width:"100%",
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        height:60,
        width:150,
        backgroundColor:'black',
        color:'white',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:140,
        borderRadius:10,
    }
});