import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { Button, KeyboardAvoidingView, StyleSheet, Text, View,TextInput } from 'react-native';
import firebase from '../firebase/fire'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { generatePassword } from '../screens/generatepasswords';
import { Feather,AntDesign,Ionicons } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';


export default function App() {

  const [generatedPassword, setGeneratedPassword] = React.useState('');
  const [lowerCaseCount, setLowerCaseCount] = React.useState(0);
  const [upperCaseCount, setUpperCaseCount] = React.useState(0);
  const [symbolCount, setSymbolCount] = React.useState(0);
  const [digitCount, setDigitCount] = React.useState(0);
  const copyText=(text)=>{
    Clipboard.setString(text);
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
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
      <TouchableHighlight
      style={styles.button}
      underlayColor="black"
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
        <Text style={styles.buttonText}>Generate</Text>
      </TouchableHighlight>
      <Text style={{marginTop:20}}>Generated Password :</Text>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <Text style={styles.pass}>{generatedPassword}</Text>
      <TouchableHighlight onPress={()=>{copyText(generatedPassword)}}>
        <MaterialCommunityIcons name="content-copy" size={24} color="black"/>
        </TouchableHighlight>
        </View>
    </KeyboardAvoidingView>
  );
}




const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
    height:65,
    width:'100%',
    borderRadius:20,
    opacity:0.9,
    marginTop:40
  },
  button:{
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'lavender',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30,
    width: '70%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth:2,
    borderColor:'grey'
  },
  itemInput: {  
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    backgroundColor:'gainsboro',
    marginBottom:10,
    color: 'black',
    paddingHorizontal:15,
    paddingVertical:10,
    width:'95%'
  },
  buttonText: {
    fontSize: 20,
    color: 'black',
    alignSelf: 'center',
    fontWeight:'700',
  },
  pass:{
    
    margin:20,
    padding:20,
    backgroundColor:'black',
    color:'white',
    borderRadius:5,
    width:"90%",
    textAlign:'center'
  }
});