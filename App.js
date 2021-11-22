import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/Home'

const stackNavigator = createStackNavigator({

  Signup:{
    screen:SignupScreen,
    navigationOptions:{
      header:null,
    }
  },
  Signin:{
    screen:SigninScreen,
    navigationOptions:{
      header:null,
    }
  },
  Home:{
    screen:HomeScreen,
    navigationOptions:{
      header:null,
    }
  }

});

const App = createAppContainer(stackNavigator);

export default App;
