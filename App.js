import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import NumberScreen from './screens/NumberScreen'
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/Home';
import AddItem from './screens/AddItem';
import OtpScreen from './screens/OTP';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="Signin" component={SigninScreen} />
      <Stack.Screen options={{headerShown:false}} name="Signup" component={SignupScreen} />
        <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerShown:false}} name="AddItem" component={AddItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
