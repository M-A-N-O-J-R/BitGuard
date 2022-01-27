import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import NumberScreen from './screens/NumberScreen'
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/Home';
import AddItem from './screens/AddItem';
import OtpScreen from './screens/OTP';
import { Ionicons } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="Signin" component={SigninScreen} />
      <Stack.Screen options={{headerShown:false}} name="Signup" component={SignupScreen} />
        <Stack.Screen options={{ title: 'My Vault',headerTitleAlign: "center",headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },headerLeft: (props) => null,headerRight: () => (
            <TouchableHighlight onPress={()=>{}}>
     <View>
     <Ionicons name="search" size={24} color="black" />
         
     </View>
 </TouchableHighlight>
  
          ), }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerShown:false}} name="AddItem" component={AddItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
