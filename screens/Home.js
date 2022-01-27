import { StyleSheet, Text, View,FlatList } from 'react-native';
import React, { useState } from 'react';
import { FloatingAction } from "react-native-floating-action";
import { Ionicons } from '@expo/vector-icons';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import firebase from '../firebase/fire';
import Firebase from 'firebase'
import AppList from './AppList.js';

const Home = ({navigation}) => {
  const [val,setVal]=useState([
    {
      title:'Instagram',
      username:'aravinth_26',
      password:'raj@123'
  },
  {
      title:'Facebook',
      username:'aravinth_26',
      password:'raj@123'
  },
  {
      title:'Twitter',
      username:'aravinth_26',
      password:'raj@123'
  },
  {
      title:'Github',
      username:'aravinth_26',
      password:'raj@123'
  },
  {
      title:'Linkedin',
      username:'aravinth_26',
      password:'raj@123'
  }
  ]);
  const ref=firebase.firestore().collection('records');
  return (
    <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
        {
          <View style={styles.container}>
            <View>
              <FlatList
              keyExtractor={(item)=>item.title}
              data={val}
              
              renderItem={({item})=>(
                <AppList list={item}/>
              )}
              />
              
              </View>
          </View>
        }
        <ActionButton size={60} buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="Add" onPress={() => {console.log("notes tapped!");navigation.navigate('AddItem');}}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          
          <ActionButton.Item buttonColor='#1abc9c' title="Update" onPress={() => {}}>
            <Icon name="sync" style={styles.actionButtonIcon} />
          </ActionButton.Item>

          <ActionButton.Item buttonColor='#3498db' title="Generate Password" onPress={() => {}}>
            <Icon name="key" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
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
