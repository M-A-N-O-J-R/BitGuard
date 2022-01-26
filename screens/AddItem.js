import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Alert,
  ImageBackground,
} from 'react-native';
import firebase from '../firebase/fire'
const ref=firebase.firestore().collection('records');
var db = firebase.firestore();
import addbg from '../assets/bg10.jpg';


let addItem = (title,pass) => {
  ref.add({
    name: title,
    password: pass
  });
};

export default function AddItem ({navigation}){
 const [title, onChangeTitle] = React.useState('');
 const [pass, onChangePass] = React.useState('');


const  handleSubmit = () => {
    addItem(title,pass);
    Alert.alert('Item saved successfully','Do you wish to add more items',[
      {text:'Yes',onPress:() => {}},
      {text:'No',onPress:() => {navigation.navigate('Home');}}
    ]);
  };
    return (
      <ImageBackground source={addbg} style={styles.bgimg}>
      <View style={styles.main}>
        <Text style={styles.title}>Drop your passwords here!</Text>
        <Text>Website/App : </Text>
        <TextInput placeholder="www.gmail.com" style={styles.itemInput} onChangeText={text => onChangeTitle(text)} />
        <Text>Username : </Text>
        <TextInput placeholder="xyz" style={styles.itemInput} onChangeText={text => onChangeTitle(text)} />
        <Text>Password : </Text>
        <TextInput placeholder="***************" secureTextEntry style={styles.itemInput} onChangeText={text => onChangePass(text)} />
        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
  main: {
    flex:0.50,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
    height:65,
    width:300,
    borderRadius:20
  },
  title: {
    marginBottom: 50,
    fontSize: 24,
    textAlign: 'center',
    
  },
  itemInput: {  
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    backgroundColor:'gainsboro',
    marginBottom:10,
    color: 'black',
    paddingHorizontal:15,
    paddingVertical:10
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30,
    width:100,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  bgimg:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});
