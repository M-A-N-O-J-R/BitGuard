import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from '../firebase/fire'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather,AntDesign,Ionicons } from '@expo/vector-icons';

import Global from './Global';
import New from './NewItem';


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

export default function App() {
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
        <Tab.Screen name="Home" 
         options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="globe" size={24} color="black" />
            )
            
          }}
        >
          {()=> <Global/>}
        </Tab.Screen>
        <Tab.Screen name="Post" 
         options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-outline" size={24} color="black" />
            )
            
          }}
        >
          {()=> <New/>}
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