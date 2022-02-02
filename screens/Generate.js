import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { Button, KeyboardAvoidingView, StyleSheet, Text, View,TextInput ,ImageBackground} from 'react-native';
import firebase from '../firebase/fire'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { generatePassword } from '../screens/generatepasswords';
import { Feather,AntDesign,Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';


export default function App() {

  const [generatedPassword, setGeneratedPassword] = React.useState('');
  const [lowerCaseCount, setLowerCaseCount] = React.useState(4);
  const [upperCaseCount, setUpperCaseCount] = React.useState(4);
  const [symbolCount, setSymbolCount] = React.useState(2);
  const [digitCount, setDigitCount] = React.useState(3);
  const copyText=(text)=>{
    Clipboard.setString(text);
    setGeneratedPassword('');
    
    
  }
  return (
    //<ImageBackground source={require('../assets/bg11.jpg')} resizeMode="cover" style={styles.image}> 
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.title}>Generate Password</Text>
      <Text style={{margin:10}}>Enter the number of lower case letter :</Text>
      <TextInput
      keyboardType='numeric'
      style={styles.itemInput}
        placeholder="Lower Case"
        onChangeText={(value) => {
          setLowerCaseCount(parseInt(value));
        }}
      />
      <Text style={{margin:10}}>Enter the number of upper case letter :</Text>
      <TextInput
      keyboardType='numeric'
      style={styles.itemInput}
        placeholder="Upper Case"
        onChangeText={(value) => {
          setUpperCaseCount(parseInt(value));
        }}
      />
      <Text style={{margin:10}}>Enter the number of symbols :</Text>
      <TextInput
      keyboardType='numeric'
      style={styles.itemInput}
        placeholder="Symbols"
        onChangeText={(value) => {
          setSymbolCount(parseInt(value));
        }}
      />
      <Text style={{margin:10}}>Enter the number of digits :</Text>
      <TextInput
      keyboardType='numeric'
      style={styles.itemInput}
        placeholder="Digits"
        onChangeText={(value) => {
          setDigitCount(parseInt(value));
        }}
      />
      <TouchableOpacity
      style={styles.button2}
      
        onPress={() => {
          setGeneratedPassword(
            generatePassword(
              lowerCaseCount,
              upperCaseCount,
              symbolCount,
              digitCount
            )
          );
        }}>
        <Text style={styles.btnText2}>Generate</Text>
      </TouchableOpacity>
      <Text style={{marginTop:20}}>Generated Password :</Text>
      <View style={styles.button3}>
        <Text styles={styles.btnText3}>{generatedPassword}</Text>
        <TouchableOpacity onPress={()=>{copyText(generatedPassword)}}>
          <MaterialCommunityIcons name="content-copy" size={24} color="black"/>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
   // </ImageBackground>
  );
}




const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  
  },
  container: {
    flex:1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'lavender',
    height:65,
    width:'100%',
    borderRadius:20,
    opacity:0.9,
    marginTop:40
  },
  button2:
  {
    padding:15,
    alignItems:'center',
    width:'80%',
    backgroundColor: 'black',
    borderRadius:5,
    marginBottom:30,
    marginTop:25,
    alignSelf:'center',
    
  },
  btnText2:{
    color: 'white',
    fontSize:16,
  },
  itemInput: {  
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    backgroundColor:'white',
    marginBottom:10,
    color: 'black',
    paddingHorizontal:15,
    paddingVertical:10,
    width:'100%'
  },

  pass:{
    
    margin:20,
    padding:20,
    backgroundColor:'black',
    color:'white',
    borderRadius:5,
    width:"100%",
    textAlign:'center'
  },
  button3:
  {
    padding:15,
    alignItems:'center',
    width:'98%',
    borderRadius:5,
    backgroundColor:'white',
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomLeftRadius:10,
    borderTopLeftRadius:10,
    borderBottomRightRadius:10,
    borderTopRightRadius:10,
    borderWidth: 1,
    
  },
  btnText3:{
    color: 'black',
    marginLeft:"5%",
    margin:20,
    padding:20,
    backgroundColor:'black',
    color:'white',
    borderRadius:5,
    width:"90%",
    textAlign:'center'
  },
  title: {
    marginBottom: 40,
    fontSize: 24,
    textAlign: 'center',
    fontFamily:'Merriweather_700Bold_Italic'
    
  },
});