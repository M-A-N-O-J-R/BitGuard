import React ,{useState,useEffect} from 'react'
import { StyleSheet, Text, View ,FlatList,Image,ImageBackground,TextInput } from 'react-native'
import firebase from '../firebase/fire'

import { 
    DancingScript_400Regular,
    DancingScript_500Medium,
    DancingScript_600SemiBold,
    DancingScript_700Bold 
  } from '@expo-google-fonts/dancing-script'
  import { 
    PlayfairDisplay_400Regular,
    PlayfairDisplay_500Medium,
    PlayfairDisplay_600SemiBold,
    PlayfairDisplay_700Bold,
    PlayfairDisplay_800ExtraBold,
    PlayfairDisplay_900Black,
    PlayfairDisplay_400Regular_Italic,
    PlayfairDisplay_500Medium_Italic,
    PlayfairDisplay_600SemiBold_Italic,
    PlayfairDisplay_700Bold_Italic,
    PlayfairDisplay_800ExtraBold_Italic,
    PlayfairDisplay_900Black_Italic 
  } from '@expo-google-fonts/playfair-display'

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
  import { 
    PoiretOne_400Regular 
  } from '@expo-google-fonts/poiret-one'

  import { 
    Satisfy_400Regular 
  } from '@expo-google-fonts/satisfy'

  import { useFonts } from 'expo-font';
  import AppLoading from 'expo-app-loading';
  import { AntDesign } from '@expo/vector-icons';

const Global = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var mon="";
    var year = new Date().getFullYear();
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    hours=hours+':'+minutes;
    date=date+'-'+month+'-'+year;

    const [msg,setMsg]=useState('');

    if(month==1)
    {
        mon="Jan";
    }
    else if(month==2)
    {
        mon="Feb";
    }
    else if(month==3)
    {
        mon="Mar";
    }
    else if(month==4)
    {
        mon="Apr";
    }
    else if(month==5)
    {
        mon="May";
    }
    else if(month==6)
    {
        mon="Jun";
    }
    else if(month==7)
    {
        mon="Jul";
    }
    else if(month==8)
    {
        mon="Aug";
    }else if(month==9)
    {
        mon="Sep";
    }
    else if(month==10)
    {
        mon="Oct";
    }
    else if(month==11)
    {
        mon="Nov";
    }
    else if(month==12)
    {
        mon="Dec";
    }
    // console.log(mon);
    // console.log(hours);
    const ref = firebase.firestore().collection("global");
    //const [items, setItems] =useState([]);
    const [items,setItems]=useState(
    [
        {key:1,date: "Dec 02, 2021",time:"18:35 IST",msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:2,date: "Dec 02, 2021",time:"18:35 IST",msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:3,date: "Dec 02, 2021",time:"18:35 IST",msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:4,date: "Dec 02, 2021",time:"18:35 IST",msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:5,date: "Dec 02, 2021",time:"18:35 IST",msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:6,date: "Dec 02, 2021",time:"18:35 IST",msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:7,date: "Dec 02, 2021",time:"18:35 IST",msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:8,date: "Dec 02, 2021",time:"18:35 IST",msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:9,date: "Dec 02, 2021",time:"18:35 IST",msg:" unchanged.",likes:90,love:100},
        {key:10,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:11,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:12,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:13,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:14,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:15,date: date,time:"18:35 IST",msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:16,date: date,time:"18:35 IST",msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:17,date: date,time:"18:35 IST",msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:18,date: date,time:"18:35 IST",msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:19,date: date,time:"18:35 IST",msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:20,date: date,time:"18:35 IST",msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:21,date: date,time:"18:35 IST",msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:22,date: date,time:"18:35 IST",msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:23,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:24,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
     ]);
    
    async function getRecords() {
        var user = firebase.auth().currentUser;
        if(user!=null) {

            await ref.onSnapshot((querySnapshot) => {
                const rec=[];
                querySnapshot.forEach((doc)=>{
                rec.push(doc.data());    
                })
                setItems([...rec,...items]);
            })
        }
    }
    useEffect(()=>{
        getRecords();
    },[]);
    
    let [fontsLoaded,error]= useFonts({
        DancingScript_400Regular,
        DancingScript_500Medium,
        DancingScript_600SemiBold,
        DancingScript_700Bold,
        Satisfy_400Regular,
        PoiretOne_400Regular,
        PlayfairDisplay_400Regular,
        PlayfairDisplay_500Medium,
        PlayfairDisplay_600SemiBold,
        PlayfairDisplay_700Bold,
        PlayfairDisplay_800ExtraBold,
        PlayfairDisplay_900Black,
        PlayfairDisplay_400Regular_Italic,
        PlayfairDisplay_500Medium_Italic,
        PlayfairDisplay_600SemiBold_Italic,
        PlayfairDisplay_700Bold_Italic,
        PlayfairDisplay_800ExtraBold_Italic,
        PlayfairDisplay_900Black_Italic,
        Merriweather_300Light,
        Merriweather_300Light_Italic,
        Merriweather_400Regular,
        Merriweather_400Regular_Italic,
        Merriweather_700Bold,
        Merriweather_700Bold_Italic,
        Merriweather_900Black,
        Merriweather_900Black_Italic 

    });
    if(!fontsLoaded)
    {
        return<AppLoading/>
    }
    
    return (
        <View style={styles.container}>
        {/* <ImageBackground source={require('../assets/bg8.jpg')} resizeMode="cover" style={styles.image}> */}
        <Text style={styles.HeaderText}>New</Text>
        <View style={styles.inputCont}>
            <TextInput multiline value={msg} onChangeText={(text)=>{setMsg(text)}} placeholder="What do you want to talk about" style={styles.input}/>
        </View>
            {/* </ImageBackground> */}
        </View>
    )
}

export default Global

const styles = StyleSheet.create({
    inputCont:
    {
        width: "100%",
        backgroundColor: 'yellow',
        padding: 10,
        height: "80%",
    },
    iconT:
    {
        fontSize:13,
    },
    container: {
        marginTop:40,
        flex:1,  
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
        width:"100%",
    },
    itemRow:
    {
       flex: 1,
       backgroundColor: 'white',
       padding:20,
       margin:8,
       marginBottom:25,
       borderRadius:1,


       elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 2,

        
    },
    itemMsg:
    {
        
        color:'black',
        textAlign: 'justify',
        marginBottom:10,
        marginTop:10,
        borderRadius:5,
        fontFamily:'Merriweather_300Light_Italic',
        fontSize:13,
        padding:15,
        color:'black',
        // backgroundColor: 'rgb(255,247,247)',
        // borderWidth:1,                             Decide Later
        // borderColor: '#eee',
        // padding:30,
    },
HeaderText:
  {
    fontSize:23,
    margin:30,
    fontFamily:'Satisfy_400Regular',
    color:'rgb(67,63,64)',
    letterSpacing:1,
    textAlign:'center',
  },
  input: 
  {
    backgroundColor:'red',
    width:"100%",
    color:'black',
    textAlign :'justify',
    borderRadius:5,
    fontFamily:'Merriweather_300Light_Italic',
    fontSize:17,
    padding:15,

  }

})
