import React,{useState} from 'react';
import {Alert,Text,TextInput,View,StyleSheet,Button,KeyboardAvoidingView} from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { Ionicons ,AntDesign} from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import firebase from '../firebase/fire';


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




export default function Feedback({msg})
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
      <KeyboardAvoidingView style={{flex: 1}}>
            
            <KeyboardAvoidingView style={styles.container}>
                
                <View style={styles.centercontainer}>
                  <Text style={styles.header}>Contact Us</Text>
                  <View>
                    <Text style={{...styles.text}} >Manoj    8825530230</Text>
                    <Text style={{...styles.text}} >Aravintharaj   9840xxxxxx</Text>
                  </View>
                    <Text style={{...styles.mail}} >You can mail your queries to aravioct@gmail.com or manojravichandran12@gmail.com</Text>
                </View>
               
            </KeyboardAvoidingView>
      </KeyboardAvoidingView> 
       
   )
}

const styles = StyleSheet.create({
    mail: {
      fontSize:15,
      padding:15,
      marginLeft:'16%',
    },
    text: 
    {
        fontFamily:'Jost_400Regular',
        fontSize:16,
        margin:5,
    },
    text2: 
    {
        fontFamily:'Jost_400Regular',
        fontSize:13,
        width:'45%',
        marginLeft:10,
    },
    iconCont:
    {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
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
        marginTop:220,
        marginBottom:220,
        marginLeft:30,
        marginRight:30,
        borderRadius:10,
        backgroundColor:'#rgb(252,253,252)',

        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 2,


    },
    setCont:
    {
        flexDirection: 'row',
        marginTop:45,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft:28,
    },
    header:
    {
        fontSize:24,
        marginLeft:10,
        fontFamily:'DancingScript_600SemiBold',
    },
    inputBox:
  {
    height:50,
    width:'60%',
    backgroundColor:'rgb(252,252,252)',
    borderRadius:8,
    padding:10,
    borderBottomWidth:3,
    borderBottomColor: 'black',
    fontFamily: 'Jost_400Regular',
    
    
  },
  inputBox2:
  {
    height:50,
    width:'60%',
    backgroundColor:'rgb(254,252,252)',
    borderRadius:8,
    padding:10,
    borderBottomWidth:3,
    borderBottomColor: 'black',
    marginTop:35,
    marginBottom:60,
    fontFamily: 'Jost_400Regular',
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

})