import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { Center } from 'native-base';



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
        <View style={ styles.fingerPrint }>
            <TouchableOpacity onPress={ ()=>scanFingerprint()}>
                {/* <Text allowFontScaling={ false }>SCAN</Text> */}
               
                <Text  allowFontScaling={ false }>Click here</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LocalAuth;

const styles = StyleSheet.create({
    fingerPrint: {
        flex:1,
        justifyContent:'center',
        alignItems: "center",
        marginTop: 25,
    },
    fpImage: {
        alignSelf: "center",
        marginBottom: 8
    },
    fpText: {
        fontFamily: "pl",
        fontSize: 15,
        color: "#341931"
    }
});