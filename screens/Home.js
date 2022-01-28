import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from '../firebase/fire'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Foundation } from '@expo/vector-icons';
import { Feather,AntDesign,Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

import Records from './Records';
import Generate from './Generate';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();


  const [val,setVal]=useState([]);

  const ref=firebase.firestore().collection('records');
  
  async function getRecords() {
    var user = firebase.auth().currentUser;
    if(user!=null) {
  
        await ref.onSnapshot((querySnapshot) => {
            const rec=[];
            querySnapshot.forEach((doc)=>{
            rec.push(doc.data());    
            })
            setVal(rec);
        })
    }
  }
  useEffect(()=>{
    getRecords();
  },[]);
  
  return (
    <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
        {
          <View style={styles.container}>
            <View>
              <FlatList
              keyExtractor={(item)=>item.title}
              data={val}
              
              renderItem={({item})=>(
                <AppList item={item}/>
              )}
              />
              
              </View>
          </View>
        }
        <ActionButton size={60} buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="Add" onPress={() => {console.log("notes tapped!");navigation.navigate('AddItem');}}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>

export default function App({navigation}) {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator          
          tabBarOptions={
          {
           
            labelStyle: 
            {
              fontSize: 12,
            },
			    }}
          screenOptions={{headerShown:false}}>
        <Tab.Screen name="Details" 
         options={{
            tabBarIcon: ({ color, size }) => (
              <SimpleLineIcons name="notebook" size={24} color="black" />
            )
            
          }}
        >
          {()=> <Records navigation={navigation}/>}
        </Tab.Screen>
        <Tab.Screen name="Generate Password" 
         options={{
            tabBarIcon: ({ color, size }) => (
                <Foundation name="key" size={24} color="black" />
            )
            
          }}
        >
          {()=> <Generate/>}
        </Tab.Screen>
        <Tab.Screen name="Settings" 
         options={{
           tabBarIcon:({ color,size})=>(
            <AntDesign name="setting" size={24} color="black" />
           )
         }}
        component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});