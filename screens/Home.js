import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import firebase from '../firebase/fire'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Foundation, MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather,AntDesign,Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import Records from './Records';
import Generate from './Generate';

import AppIntroSlider from 'react-native-app-intro-slider';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { FontAwesome } from '@expo/vector-icons'; 
import { 
  Oswald_200ExtraLight,
  Oswald_300Light,
  Oswald_400Regular,
  Oswald_500Medium,
  Oswald_600SemiBold,
  Oswald_700Bold 
} from '@expo-google-fonts/oswald'
import { 
  Satisfy_400Regular 
} from '@expo-google-fonts/satisfy'
import { 
  Merriweather_300Light,
  Merriweather_300Light_Italic,
  Merriweather_400Regular,
  Merriweather_400Regular_Italic,
  Merriweather_700Bold,
  Merriweather_700Bold_Italic,
  Merriweather_900Black,
  Merriweather_900Black_Italic 
} from '@expo-google-fonts/merriweather'


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

export default function App({navigation,route}) {
  const [showRealApp, setShowRealApp] = useState(false);
  
  useEffect(() => {
    
    console.log(route.params.screen);
    if(route.params.screen=="signin")
    {
      setShowRealApp(true);
    }
    
  },[route.params.screen]);

  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };
  const RenderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="arrow-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{backgroundColor: 'transparent'}}
        />
      </View>
    );
  };

  const RenderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{backgroundColor: 'transparent'}}
        />
      </View>
    );
  };

  const RenderItem = ({item}) => {

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Text style={styles.introTitleStyle}>
          {item.title}
        </Text>
        <Image
          style={styles.introImageStyle}
          source={item.image} />
        <Text style={styles.introTextStyle}>
          {item.text}
        </Text>
      </View>
    );
  };
  
  return (
    
    <>
    {showRealApp!=0?(<NavigationContainer independent={true}>
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
    </NavigationContainer>):(<AppIntroSlider
      data={slides}
      renderItem={RenderItem}
      onDone={onDone}
      renderDoneButton={RenderDoneButton}
      renderNextButton={RenderNextButton}
      activeDotStyle={{backgroundColor: 'rgba(0,0,0,.9)'}}
      dotStyle={{backgroundColor: 'rgba(0,0,0,.1)'}}
    />)
    
  }

  </>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'black',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  introImageStyle: {
    width: 400,
    height: 300,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    paddingVertical: 30,
    fontFamily:'Merriweather_400Regular_Italic'
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
    fontFamily:'Merriweather_400Regular_Italic'
  },
});

const slides = [
  {
    key: 1,
    title: 'Welcome',
    text: 'Forgot Password ?\n..NO..\nForget Password!',
    image: require('../assets/s7.png'),
    backgroundColor: 'white',
  },
  {
    key: 2,
    title: 'View ',
    text: 'Keep track of all your passwords across platforms securely',
    image: require('../assets/s4.png'),
    backgroundColor: 'white',
  },
  {
    key: 3,
    title: 'Generate',
    text: 'Get Secure Passwords in a flick',
    image: require('../assets/s16.png'),
    backgroundColor: 'white',
  },
  {
    key: 4,
    title: 'Store',
    text: 'Save credentials,card details and personal info in a click',
    image: require('../assets/s14.png'),
    backgroundColor: 'white',
  },
  {
    key: 5,
    title: 'Safe',
    text: 'All of your saved data is fully encrypted before it ever leaves your device, and only you have access to managing it',
    image: require('../assets/s3.png'),
    backgroundColor: 'white',
  },
];