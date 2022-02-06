import { StyleSheet, Text, View,FlatList } from 'react-native';
import React, { useState,useEffect } from 'react';
import { FloatingAction } from "react-native-floating-action";
import { Ionicons } from '@expo/vector-icons';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import firebase from '../firebase/fire';
import Firebase from 'firebase'
import AppList from './AppList.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
var C = require("crypto-js");



const Home = ({navigation}) => {



  const [val,setVal]=useState([
  //   {
  //     title:'Instagram',
  //     username:'aravinth_26',
  //     password:'raj@123'
  // },
  // {
  //     title:'Facebook',
  //     username:'aravinth_26',
  //     password:'raj@123'
  // },
  // {
  //     title:'Twitter',
  //     username:'aravinth_26',
  //     password:'raj@123'
  // },
  // {
  //     title:'Github',
  //     username:'aravinth_26',
  //     password:'raj@123'
  // },
  // {
  //     title:'Linkedin',
  //     username:'aravinth_26',
  //     password:'raj@123'
  // }
  ]);

  const ref=firebase.firestore().collection('records');
  
  async function getRecords() {
    var user = firebase.auth().currentUser;
    if(user!=null) {
  
        await ref.onSnapshot((querySnapshot) => {
            const rec=[];
            querySnapshot.forEach((doc)=>{
            if(doc.data().Type=="Login")
            {
              var Decrypted = C.AES.decrypt(doc.data().password, "your password");
              var result =Decrypted.toString(C.enc.Utf8);
              rec.push({...doc.data(),result:result});
              console.log(result); 
            }
            else if(doc.data().Type=="Identity")
            {
              var Decrypted = C.AES.decrypt(doc.data().Idaadhar, "your password");
              var result =Decrypted.toString(C.enc.Utf8);
              rec.push({...doc.data(),result:result});
              console.log(result); 
            }
            else if(doc.data().Type=="Secure Note")
            {
              var Decrypted = C.AES.decrypt(doc.data().secure_note, "your password");
              var result =Decrypted.toString(C.enc.Utf8);
              rec.push({...doc.data(),result:result});
              console.log(result);               
            }
            else{
              const Decrypted = C.AES.decrypt(doc.data().cardcvv,"your password");
              var result =Decrypted.toString(C.enc.Utf8);
              rec.push({...doc.data(),result:result});
              console.log(result); 
            }
            // const encrypted = doc.data().pass.toString();
            })
            setVal(rec);
        })
    }
  }
  useEffect(()=>{
    getRecords();
  },[]);
  
  return (
    <View style={{flex:1,backgroundColor:'lavender',marginTop:40}}>
        {
          <View style={styles.container}>
            <View >
              {val.length>0?<FlatList
              keyExtractor={(item)=>item.title}
              data={val}
              
              renderItem={({item})=>(
                <AppList item={item}/>
              )}
              />:<Text>no data</Text>}
              </View>
          </View>
        }
        {/* <ActionButton size={60} buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="Add" onPress={() => {console.log("notes tapped!");navigation.navigate('AddItem');}}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          
          <ActionButton.Item buttonColor='#1abc9c' title="Update" onPress={() => {}}>
            <Icon name="sync" style={styles.actionButtonIcon} />
          </ActionButton.Item>

          <ActionButton.Item buttonColor='#3498db' title="Generate Password" onPress={() => {}}>
            <Icon name="key" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton> */}
        <TouchableOpacity style={{backgroundColor:'lavender',margin:10,marginLeft:'80%'}}>
          <Ionicons name="add-circle-sharp" size={55} color="black" onPress={() => {navigation.navigate('AddItem');}} />
        </TouchableOpacity>
      </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  container:{
    flex:1,
    
    backgroundColor:'lavender',
    alignItems:'center',
    justifyContent:'center'
  }
});
