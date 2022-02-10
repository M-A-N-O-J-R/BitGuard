import React ,{useState,useEffect} from 'react';
import { View,StyleSheet,TextInput,Text as Ord_text,ScrollView,TouchableOpacity ,Linking} from 'react-native';
import { Text ,Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import LottieView from 'lottie-react-native';

  import { useFonts } from 'expo-font';
  import AppLoading from 'expo-app-loading';
  
  import { 
      DancingScript_400Regular,
      DancingScript_500Medium,
      DancingScript_600SemiBold,
      DancingScript_700Bold 
    } from '@expo-google-fonts/dancing-script';
  
  
    import { 
      Jost_100Thin,
      Jost_200ExtraLight,
      Jost_300Light,
      Jost_400Regular,
      Jost_500Medium,
      Jost_600SemiBold,
      Jost_700Bold,
      Jost_800ExtraBold,
      Jost_900Black,
      Jost_100Thin_Italic,
      Jost_200ExtraLight_Italic,
      Jost_300Light_Italic,
      Jost_400Regular_Italic,
      Jost_500Medium_Italic,
      Jost_600SemiBold_Italic,
      Jost_700Bold_Italic,
      Jost_800ExtraBold_Italic,
      Jost_900Black_Italic 
    } from '@expo-google-fonts/jost'
  



import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;


function Team() {


  let [fontsLoaded,error]= useFonts({
    DancingScript_400Regular,
    DancingScript_500Medium,
    DancingScript_600SemiBold,
    DancingScript_700Bold,
    Jost_100Thin,
    Jost_200ExtraLight,
    Jost_300Light,
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold,
    Jost_700Bold,
    Jost_800ExtraBold,
    Jost_900Black,
    Jost_100Thin_Italic,
    Jost_200ExtraLight_Italic,
    Jost_300Light_Italic,
    Jost_400Regular_Italic,
    Jost_500Medium_Italic,
    Jost_600SemiBold_Italic,
    Jost_700Bold_Italic,
    Jost_800ExtraBold_Italic,
    Jost_900Black_Italic 
    
  });

  if(!fontsLoaded)
  {
    return<AppLoading/>
  }


  
  
    return(
      <View style={styles.main}>
        <ScrollView>
            <View style={styles.container}>

                <View style={styles.cont2}>
                
                    <Text style={styles.name}>Manoj ravichandran </Text>
                    
                    <View style={styles.imgCont}>
                        <Image source={require('../assets/manoj.jpeg')}  style={styles.pic}/>
                        <Text style={styles.role}>Developer</Text>
                    </View>
                   
                    <Text style={styles.des}>Your <Text style={styles.line}>friendly</Text> neighborhood muggle</Text>
                    <View style={styles.link}>
                        <TouchableOpacity>
                            <FontAwesome5 name="linkedin" size={35} color="rgb(11,103,194)" onPress={() => Linking.openURL('https://www.linkedin.com/in/manoj-ravichandran-12b5841b2/')}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <MaterialCommunityIcons name="github" size={42} color="black" onPress={() => Linking.openURL('https://github.com/M-A-N-O-J-R')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.cont2}>
                    <Text style={styles.name}>Aravintharaj </Text>
                    
                    <View style={styles.imgCont}>
                        <Image source={require('../assets/rajuu.jpg')}  style={styles.pic}/>
                        <Text style={styles.role}>Developer</Text>
                    </View>
                   
                    <Text style={styles.des}> Would i rather be feared or loved?</Text><Text style={styles.des}> Um, easy.Both.</Text>
                    <Text style={styles.des}>I want people to be afraid of how much they love me</Text>
                    <View style={styles.link}>
                        <TouchableOpacity>
                            <FontAwesome5 name="linkedin" size={35} color="rgb(11,103,194)" onPress={() => Linking.openURL('https://www.linkedin.com/in/aravintharaj-s-55147a20a/')}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <MaterialCommunityIcons name="github" size={42} color="black" onPress={() => Linking.openURL('https://github.com/aravintharaj-s')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>  
       </View> 
        
    );

}
<View></View>
const styles = StyleSheet.create({
    link:
    {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '50%',
    },
  starCont:
  {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop:40,
  },
  row:
  {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-evenly',
    backgroundColor:'yellow',
    width:'100%',
  },
  main:
  {
      flex:1,
      backgroundColor:'lavender'
  },
    container:{
        flex : 1,
        alignItems:'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'lavender',
    },
    cont2:
    {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width:'90%',
        height:400,
        backgroundColor:'#FFF',
        padding:15,
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        borderRadius:13,
        marginTop:40,
        marginBottom:10
    },
    cont3:
    {
        alignItems: 'center',
        justifyContent: 'center',
        width:'90%',
        height:20,
        backgroundColor:'#FFF',
        padding:80,
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        borderRadius:13,
        marginTop:40,
        marginBottom:20,
    },
    text: 
    {
        fontSize:19,
        color: 'black',
        fontFamily: 'DancingScript_500Medium'
    },
    text2: 
    {
        fontSize:21,
        color: 'black',
        fontFamily: 'DancingScript_500Medium'
    },
    incomeAmt:
    {
      fontSize:16,
      color:'rgb(52,168,83)',
    },
    expenseAmt:
    {
      fontSize:16,
      color:'rgb(237,95,83)',
    },
    totalAmt:
    {
      fontSize:16,
      color:'rgbrgb(26,115,232)',
    },
    dCont:
    {
      justifyContent: 'center',
      alignItems: 'center',

      width:'100%',
    },
    pic:
    {
        width:115,
        height:115,
        borderRadius:100,
        borderWidth:1,
        borderColor: 'black',
    
    },
    role: {
        marginTop:5,
        fontSize:15,
        fontFamily: 'Jost_400Regular',
    },
    des:
    {
        textAlign: 'justify',
        fontSize:15,
        fontFamily: 'Jost_400Regular',
    },
    name:
    {
        fontSize:24,
        fontFamily: 'DancingScript_400Regular',

    },
    imgCont:
    {
        alignItems: 'center',
        justifyContent: 'center',
    },
    line: {
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid'
    }
});

export default Team;

