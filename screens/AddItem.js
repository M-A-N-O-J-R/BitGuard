import React ,{useState} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Alert,
  ImageBackground,
  Picker
} from 'react-native';
import firebase from '../firebase/fire'
const ref=firebase.firestore().collection('records');
var db = firebase.firestore();
import addbg from '../assets/bg10.jpg';





export default function AddItem ({navigation}){
 const [title, onChangeTitle] = React.useState('');
 const [username, onChangeUsername] = React.useState('');
 const [pass, onChangePass] = React.useState('');
 const [note, onChangeNote] = React.useState('');

 let addItem = (title,username,pass,note) => {
  ref.add({
    name: title,
    id: username,
    password: pass,
    Note:note
  });
  
};

const  handleSubmit = () => {
    addItem(title,username,pass,note);
    Alert.alert('Item saved successfully','Do you wish to add more items',[
      {text:'Yes',onPress:() => {}},
      {text:'No',onPress:() => {navigation.navigate('Home');}}
    ]);
    
  };
  const [selectedValue, setSelectedValue] = useState("java");
    return (
      <ImageBackground source={addbg} style={styles.bgimg}>
      <View style={styles.main}>
        <Text style={styles.title}>Drop your passwords here!</Text>
        <Text>What type of item is this? </Text>
        <View style={{backgroundColor:"gainsboro",width:170,borderRadius:10,padding:10}}>
        <Picker
        selectedValue={selectedValue}
        style={{ height: 25, width: 170, }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Login" value="Login" />
        <Picker.Item label="Card" value="Card" />
        <Picker.Item label="Identity" value="Identity" />
        <Picker.Item label="Secure Note" value="Secure Note" />
      </Picker>
      </View>
        <Text>Website/App : </Text>
        <TextInput placeholder="www.gmail.com" style={styles.itemInput} onChangeText={text => onChangeTitle(text)} />
        <Text>Username : </Text>
        <TextInput placeholder="xyz" style={styles.itemInput} onChangeText={text => onChangeUsername(text)} />
        <Text>Password : </Text>
        <TextInput placeholder="***************"  value={pass} secureTextEntry style={styles.itemInput} onChangeText={text => onChangePass(text)} />
        <Text>Note  :</Text>
        <TextInput placeholder="(Optional)"style={[styles.itemInput,{height:250}]} onChangeText={text => onChangeNote(text)} />
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
    flex:0.95,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
    height:65,
    width:400,
    borderRadius:20,
    opacity:0.9,
    marginTop:40
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
  },
  pick:{
     height: 50,
      width: 150,
       margin:10,
       color:'black'
  }
});
