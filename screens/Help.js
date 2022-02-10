import React,{useState,useCallback} from 'react';
import {Alert,Text,TextInput,View,StyleSheet,Button,KeyboardAvoidingView} from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { Ionicons ,AntDesign} from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import firebase from '../firebase/fire';
import { FontAwesome5 } from '@expo/vector-icons'; 


import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


import { 
    DancingScript_400Regular,
    DancingScript_500Medium,
    DancingScript_600SemiBold,
    DancingScript_700Bold 
  } from '@expo-google-fonts/dancing-script';

  import { 
    Jost_100Thin,
    Jost_200ExtraLight,
    Jost_300Light,
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold,
    Jost_700Bold,
    Jost_800ExtraBold,
    Jost_900Black,
    Jost_100Thin_Italic,
    Jost_200ExtraLight_Italic,
    Jost_300Light_Italic,
    Jost_400Regular_Italic,
    Jost_500Medium_Italic,
    Jost_600SemiBold_Italic,
    Jost_700Bold_Italic,
    Jost_800ExtraBold_Italic,
    Jost_900Black_Italic 
  } from '@expo-google-fonts/jost'




export default function Help()
{





    let [fontsLoaded,error]= useFonts({
        DancingScript_400Regular,
        DancingScript_500Medium,
        DancingScript_600SemiBold,
        DancingScript_700Bold,
        Jost_100Thin,
        Jost_200ExtraLight,
        Jost_300Light,
        Jost_400Regular,
        Jost_500Medium,
        Jost_600SemiBold,
        Jost_700Bold,
        Jost_800ExtraBold,
        Jost_900Black,
        Jost_100Thin_Italic,
        Jost_200ExtraLight_Italic,
        Jost_300Light_Italic,
        Jost_400Regular_Italic,
        Jost_500Medium_Italic,
        Jost_600SemiBold_Italic,
        Jost_700Bold_Italic,
        Jost_800ExtraBold_Italic,
        Jost_900Black_Italic 
      });

      if(!fontsLoaded)
      {
        return<AppLoading/>
      }
      
   return(
      <KeyboardAvoidingView style={{flex: 1,backgroundColor:'lavender'}}>
           
            <KeyboardAvoidingView style={styles.container}>
                
                <View style={styles.centercontainer}>

                    <View style={styles.tcont}>
                        <Text style={styles.title}>BITGUARD</Text>
                        <MaterialCommunityIcons name="shield" size={38} color="blueviolet"/>
                        
                    </View>
                    
                    <Text style={{...styles.text}} >BitGaurd is an encrypted digital vault with biometric protection that stores secure password login information you use to access apps and accounts on your mobile device, websites and other services.
                     In addition to keeping your identity, credentials and sensitive data safe, BitGaurd also has a password generator to create strong, unique passwords and ensure you aren't using the same password in multiple places. </Text>
                     <Text style={{...styles.text}} >
                     Forgot Password..NO..Forget Password!'
                     </Text>
                </View>
                
               
            </KeyboardAvoidingView>
            
      </KeyboardAvoidingView> 
       
   )
}

const styles = StyleSheet.create({
    
    text: 
    {
        fontFamily:'Jost_400Regular',
        fontSize:17,
        margin:15,
        textAlign: 'justify'
    },
    text2: 
    {
        fontFamily:'Jost_400Regular',
        fontSize:13,
        width:'85%',
        marginLeft:10,
    },
    row:
    {
        marginTop:65,
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    container: 
    {
        flex: 1,
        marginTop:40,
        marginBottom:40,
        marginLeft:30,
        marginRight:30,
        borderRadius:10,
        backgroundColor:'#fff',

        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 2,


    },
  centercontainer: 
  {
    flex: 1,
    
    width:'100%',
    height:'100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    textAlign: 'center',
    
    borderRadius:8,
    
    
  },
  tcont:
  {
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:50,
  },
  title: 
  {
    fontSize:34,
    fontFamily: 'Jost_400Regular',
    color:'black',
    textAlign: 'center',
    marginRight:1,
    letterSpacing:8
  },

})