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
import Crypt from './crypt'

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
        <Tab.Screen name="crypt" 
         options={{
           tabBarIcon:({ color,size})=>(
            <AntDesign name="setting" size={24} color="black" />
           )
         }}
        component={Crypt} />
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