import React ,{useState} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Alert,
  ImageBackground,
  Picker,
  ScrollView
} from 'react-native';
import firebase from '../firebase/fire'
const ref=firebase.firestore().collection('records');
var db = firebase.firestore();
import addbg from '../assets/bg11.jpg';

import { Feather,AntDesign,Ionicons,SimpleLineIcons,FontAwesome  } from '@expo/vector-icons';
import CryptoES from "crypto-es";
var C = require("crypto-js");



export default function AddItem ({navigation}){


 const [title, onChangeTitle] = React.useState('');
 const [username, onChangeUsername] = React.useState('');
 const [pass, onChangePass] = React.useState('');
 const [note, onChangeNote] = React.useState('');

 const [cardName, onChangeCardName] = React.useState('');
 const [Brand, onChangeBrand] = React.useState('');
 const [cardNumber, onChangeCardNumber] = React.useState('');
 const [cvv, onChangeCVV] = React.useState('');
 const [ex1, onChangeEx1] = React.useState('');
 const [ex2, onChangeEx2] = React.useState('');
 const [cardNote, onChangeCardNote] = React.useState('');
 
 const [idtitle, onChangeIdtitle] = React.useState('');
 const [idfname, onChangeIdfname] = React.useState('');
 const [idlname, onChangeIdlname] = React.useState('');
 const [idemail, onChangeIdemail] = React.useState('');
 const [idphone, onChangeIdphone] = React.useState('');
 const [idaadhar, onChangeIdaadhar] = React.useState('');
 const [idpassport, onChangeIdpassport] = React.useState('');
 const [idlicense, onChangeIdlicense] = React.useState('');
 const [idnote, onChangeIdnote] = React.useState('');
 const [addr1, onChangeAddr1] = React.useState('');
 const [addr2, onChangeAddr2] = React.useState('');
 const [city, onChangecity] = React.useState('');
 const [state, onChangestate] = React.useState('');
 const [country, onChangecountry] = React.useState('');
 const [zip, onChangezip] = React.useState('');

 
 const [stitle, onChangeSTitle] = React.useState('');
 const [snote, onChangeSNote] = React.useState('');
 const [type,setType]=useState('Login');

 const [selectedValue, setSelectedValue] = useState("Login");

 let addItem = (title,username,pass,note) => {
  
  const encrypted = CryptoES.AES.encrypt(pass,"your password").toString();  
 
  ref.add({
    name: title,
    id: username,
    password: encrypted,
    Note:note,
    Type:selectedValue
  });
};

let addCardItem = (cvv,cardName,cardNumber,ex1,ex2,Brand,cardNote) => {
  ref.add({
    cardcvv:cvv,
    cardholdername:cardName,
    number:cardNumber,
    expr:ex1.concat('/'+ex2),
    cardbrand:Brand,
    card_note:cardNote,
    Type:selectedValue
  });
};

let addIdentityItem = (idtitle,idfname,idlname,idemail,idphone,idaadhar,idpassport,idlicense,idnote,addr1,addr2,city,state,country,zip) => {
  ref.add({
    Idtitle:idtitle,
    Id_Firstname:idfname,
    Id_Lastname:idlname,
    Idemail:idemail,
    Idphone:idphone,
    Idaadhar:idaadhar,
    Idpassport:idpassport,
    Idlicense:idlicense,
    Idnote:idnote,
    address1:addr1,
    address2:addr2,
    card_city:city,
    card_state:state,
    card_country:country,
    card_zip:zip,
    Type:selectedValue
  });
};
let addnodeItem = (stitle,snote) => {
  ref.add({
    secure_name: stitle,
    secure_note: snote,
    Type:selectedValue
  });
};
const  handleIDSubmit = () => {
  addIdentityItem(idtitle,idfname,idlname,idemail,idphone,idaadhar,idpassport,idlicense,idnote,addr1,addr2,city,state,country,zip);
  // Alert.alert('Item saved successfully','Do you wish to add more items',[
  //   {text:'Yes',onPress:() => {}},
  //   {text:'No',onPress:() => {navigation.navigate('Home');}}
  // ]);
  onChangeIdtitle('');
  onChangeIdfname('');
  onChangeIdlname('');
  onChangeIdemail('');
  onChangeIdphone('');
  onChangeIdaadhar('');
  onChangeIdpassport('');
  onChangeIdlicense('');
  onChangeIdnote('');
  onChangeAddr1('');
    onChangeAddr2('');
    onChangecity('');
    onChangecountry('');
    onChangestate('');
    onChangezip('');
};
const  handleCardSubmit = () => {
    addCardItem(cvv,cardName,cardNumber,ex1,ex2,Brand,cardNote);
    // Alert.alert('Item saved successfully','Do you wish to add more items',[
    //   {text:'Yes',onPress:() => {}},
    //   {text:'No',onPress:() => {navigation.navigate('Home');}}
    // ]);
    onChangeCVV('');
    onChangeCardName('');
    onChangeCardNumber('');
    onChangeEx1('');
    onChangeEx2('');
    onChangeBrand('');
    onChangeCardNote('');
  };
  const  handleSubmit = () => {
    addItem(title,username,pass,note);
    // Alert.alert('Item saved successfully','Do you wish to add more items',[
    //   {text:'Yes',onPress:() => {}},
    //   {text:'No',onPress:() => {navigation.navigate('Home');}}
    // ]);
    onChangeTitle('');
    onChangeUsername('');
    onChangePass('');
    onChangeNote('');
    
  };
  const  handlenoteSubmit = () => {
    addnodeItem(stitle,snote);
    // Alert.alert('Item saved successfully','Do you wish to add more items',[
    //   {text:'Yes',onPress:() => {}},
    //   {text:'No',onPress:() => {navigation.navigate('Home');}}
    // ]);
    onChangeSTitle('');
    onChangeSNote('');
    
  };
  
  if(selectedValue=='Card')
      {
        
        return (
          
          <View style={styles.main}>
            <Text style={styles.title}>Card Details  <AntDesign name="creditcard" size={24} color="black" /></Text>
           
            <Text >What type of item is this? </Text>
            <View style={{backgroundColor:"gainsboro",width:'100%',borderRadius:5,padding:10,borderWidth:1}}>
            <Picker
            selectedValue={selectedValue}
            style={{ height: 25, width: '100%', }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Login" value="Login" />
            <Picker.Item label="Card" value="Card" />
            <Picker.Item label="Identity" value="Identity" />
            <Picker.Item label="Secure Note" value="Secure Note" />
          </Picker>
          </View>
           
            <Text style={{marginTop:10}}>Cardholder Name : </Text>
            <TextInput placeholder="Enter name here" value={cardName} style={styles.itemInput} onChangeText={text => onChangeCardName(text)} />
            <Text>Brand : </Text>
            <TextInput placeholder="Enter brand of card here" style={styles.itemInput} value={Brand} onChangeText={text => onChangeBrand(text)} />
            <Text>Card Number </Text>
            <TextInput placeholder="**** **** **** ****" style={styles.itemInput} value={cardNumber}secureTextEntry keyboardType='numeric' onChangeText={text => onChangeCardNumber(text)} />
            
            <View style={{flexDirection:'row'}}>
            <Text>Expiry Date : </Text>
            <Text style={{marginLeft:60}}>CVV : </Text>
            </View>
            <View style={{flexDirection:'row'}}>
              
            <TextInput placeholder="11" keyboardType='numeric' style={[styles.itemInput,{width:65}]} value={ex1} onChangeText={text => onChangeEx1(text)} />
            <Text style={{fontSize:27}}>/</Text>
            <TextInput placeholder="23" keyboardType='numeric' style={[styles.itemInput,{width:65}]} value={ex2} onChangeText={text => onChangeEx2(text)} />
            <TextInput placeholder="***"   secureTextEntry keyboardType='numeric' style={[styles.itemInput,{width:150,marginLeft:20}]} value={cvv} onChangeText={text => onChangeCVV(text)} />
            </View>
            <Text>Note  :</Text>
            <TextInput placeholder="(Optional)" style={[styles.itemInput]}  value={cardNote} multiline onChangeText={text => onChangeCardNote(text)} />
            <TouchableHighlight
              style={styles.button}
              underlayColor="white"
              onPress={handleCardSubmit}
            >
              <Text style={styles.buttonText}>Add</Text>
            </TouchableHighlight>
            
          </View>
          
        );
      }
      else if (selectedValue=='Identity') 
      {
        return (
          
          <View style={styles.main}>
          <Text style={styles.title}>Personal Details  <Ionicons name="person-circle-outline" size={24} color="black" /></Text>
            <ScrollView vertical={true}>
            <Text>What type of item is this? </Text>
            <View style={{backgroundColor:"gainsboro",width:'100%',borderRadius:5,padding:10,borderWidth:1}}>
            <Picker
            selectedValue={selectedValue}
            style={{ height: 25, width: '100%', }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Login" value="Login" />
            <Picker.Item label="Card" value="Card" />
            <Picker.Item label="Identity" value="Identity" />
            <Picker.Item label="Secure Note" value="Secure Note" />
          </Picker>
          </View>
           
            <Text style={{marginTop:10}}>Title: </Text>
            <TextInput placeholder="Enter the title here"  style={styles.itemInput} value={idtitle} onChangeText={text => onChangeIdtitle(text)} />
            <Text>First Name : </Text>
            <TextInput placeholder="Enter your First name" style={styles.itemInput} value={idfname} onChangeText={text => onChangeIdfname(text)} />
            <Text>Last Name : </Text>
            <TextInput placeholder="Enter your last name" style={styles.itemInput} value={idlname} onChangeText={text => onChangeIdlname(text)} />
            <Text>Email : </Text>
            <TextInput placeholder="Enter your email  here" style={styles.itemInput} value={idemail} onChangeText={text => onChangeIdemail(text)} />
            <Text>Phone : </Text>
            <TextInput placeholder="Enter your number here" style={styles.itemInput} value={idphone} keyboardType='numeric'  onChangeText={text => onChangeIdphone(text)} />
            <Text>AADHAR number : </Text>
            <TextInput placeholder="**** **** **** ****" style={styles.itemInput} value={idaadhar} keyboardType='numeric' secureTextEntry  onChangeText={text => onChangeIdaadhar(text)} />
            <Text>Passport number : </Text>
            <TextInput placeholder="Enter Passport Number here" style={styles.itemInput} value={idpassport} keyboardType='numeric' secureTextEntry  onChangeText={text => onChangeIdpassport(text)} />
            <Text>License number : </Text>
            <TextInput placeholder="Enter License Number here" style={styles.itemInput} value={idlicense} keyboardType='numeric' secureTextEntry  onChangeText={text => onChangeIdlicense(text)} />
            <Text>Address 1 : </Text>
            <TextInput placeholder="Enter your address here" style={[styles.itemInput]}  value={addr1} multiline onChangeText={text => onChangeAddr1(text)} />
            <Text>Address 2 : </Text>
            <TextInput placeholder="Enter your address here" style={[styles.itemInput]}  value={addr2} multiline onChangeText={text => onChangeAddr2(text)} />
            <Text>City/Town : </Text>
            <TextInput placeholder="Enter your City/Town name" style={styles.itemInput} value={city} onChangeText={text => onChangecity(text)} />
            <Text>State/Province : </Text>
            <TextInput placeholder="Enter your State/Province name" style={styles.itemInput} value={state} onChangeText={text => onChangestate(text)} />
            <Text>Country : </Text>
            <TextInput placeholder="Enter your Country name" style={styles.itemInput} value={country} onChangeText={text => onChangecountry(text)} />
            <Text>Zip/Postal Code : </Text>
            <TextInput placeholder="Enter your Zip/Postal code here" style={styles.itemInput} value={zip} keyboardType='numeric'  onChangeText={text => onChangezip(text)} />
            <Text>Note : </Text>
            <TextInput placeholder="(Optional)" style={[styles.itemInput]}  value={idnote} multiline onChangeText={text => onChangeIdnote(text)} />
            <TouchableHighlight
              style={styles.button}
              underlayColor="white"
              onPress={handleIDSubmit}
            >
              <Text style={styles.buttonText}>Add</Text>
            </TouchableHighlight>
            </ScrollView>
          </View>
         
        );
      } 
      else if (selectedValue=='Secure Note')
       {
        return (
          
          <View style={styles.main}>
          <Text style={styles.title}>Notes  <FontAwesome name="sticky-note-o" size={24} color="black" /></Text>
            <Text style={{backgroundColor:'white'}}>What type of item is this? </Text>
            <View style={{backgroundColor:"gainsboro",width:'100%',borderRadius:5,padding:10,borderWidth:1}}>
            <Picker
            selectedValue={selectedValue}
            style={{ height: 25, width: '100%', }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Login" value="Login" />
            <Picker.Item label="Card" value="Card" />
            <Picker.Item label="Identity" value="Identity" />
            <Picker.Item label="Secure Note" value="Secure Note" />
          </Picker>
          </View>
          <Text>Name : </Text>
            <TextInput placeholder="Enter the title here" style={styles.itemInput} value={stitle} onChangeText={text => onChangeSTitle(text)} />
            <Text>Note : </Text>
            <TextInput placeholder="Enter your note here" style={[styles.itemInput,{height:150,textAlignVertical: 'top'}]}  value={snote} multiline onChangeText={text => onChangeSNote(text)} />
            <TouchableHighlight
              style={styles.button}
              underlayColor="white"
              onPress={handlenoteSubmit}
            >
              <Text style={styles.buttonText}>Add</Text>
            </TouchableHighlight>
          </View>
         
        );
      } 
      else
       {
        return (
          
          <View style={styles.main}>
            <Text style={styles.title}>Password Details <AntDesign name="login" size={24} color="black" /></Text>
            <Text>What type of item is this? </Text>
            <View style={{backgroundColor:"gainsboro",width:'100%',borderRadius:5,padding:10,borderWidth:1}}>
            <Picker
            selectedValue={selectedValue}
            style={{ height: 25, width: '100%', }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Login" value="Login" />
            <Picker.Item label="Card" value="Card" />
            <Picker.Item label="Identity" value="Identity" />
            <Picker.Item label="Secure Note" value="Secure Note" />
          </Picker>
          </View>
           
            <Text style={{marginTop:10}}>Website/App : </Text>
            <TextInput placeholder="www.gmail.com" value={title} style={styles.itemInput} onChangeText={text => onChangeTitle(text)} />
            <Text>Username : </Text>
            <TextInput placeholder="xyz" style={styles.itemInput} value={username} onChangeText={text => onChangeUsername(text)} />
            <Text>Password : </Text>
            <TextInput placeholder="***************"  value={pass} secureTextEntry style={styles.itemInput} onChangeText={text => onChangePass(text)} />
            <Text>Note  :</Text>
            <TextInput placeholder="(Optional)" style={[styles.itemInput]}  value={note} multiline onChangeText={text => onChangeNote(text)} />
            <TouchableHighlight
              style={styles.button}
              underlayColor="white"
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Add</Text>
            </TouchableHighlight>
          </View>
          
        );
      } 
}

const styles = StyleSheet.create({
  main: {
    flex:1,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    height:65,
    width:380,
    borderRadius:20,
    opacity:1,
    marginTop:40,
    backgroundColor:'lavender',
    alignSelf:'center',
  },
  title: {
    marginBottom: 70,
    fontSize: 22,
    textAlign: 'center',
    fontFamily:'Merriweather_700Bold_Italic'
  },
  itemInput: {  
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    backgroundColor:'rgba(255,255,255,0.8)',
    marginBottom:10,
    color: 'black',
    paddingHorizontal:15,
    paddingVertical:10,
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
    width: '50%',
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
       color:'black',
       
  }
});
