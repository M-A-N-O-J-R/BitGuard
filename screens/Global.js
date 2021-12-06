import React ,{useState,useEffect} from 'react'
import { StyleSheet, Text, View ,FlatList,Image,ImageBackground } from 'react-native'
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
    var year = new Date().getFullYear();
    date=date+'-'+month+'-'+year;

    const ref = firebase.firestore().collection("global");
    //const [items, setItems] =useState([]);
    const [items,setItems]=useState(
    [
        // {key:1,date: "Dec 02, 2021",time:"18:35 IST",msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        // {key:2,date: "Dec 02, 2021",time:"18:35 IST",msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        // {key:3,date: "Dec 02, 2021",time:"18:35 IST",msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        // {key:4,date: "Dec 02, 2021",time:"18:35 IST",msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        // {key:5,date: "Dec 02, 2021",time:"18:35 IST",msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        // {key:6,date: "Dec 02, 2021",time:"18:35 IST",msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        // {key:7,date: "Dec 02, 2021",time:"18:35 IST",msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        // {key:8,date: "Dec 02, 2021",time:"18:35 IST",msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        // {key:9,date: "Dec 02, 2021",time:"18:35 IST",msg:" unchanged.",likes:90,love:100},
        // {key:10,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        // {key:11,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        // {key:12,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        // {key:13,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        // {key:14,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        // {key:15,date: date,time:"18:35 IST",msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        // {key:16,date: date,time:"18:35 IST",msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        // {key:17,date: date,time:"18:35 IST",msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        // {key:18,date: date,time:"18:35 IST",msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        // {key:19,date: date,time:"18:35 IST",msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        // {key:20,date: date,time:"18:35 IST",msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        // {key:21,date: date,time:"18:35 IST",msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        // {key:22,date: date,time:"18:35 IST",msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        // {key:23,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        // {key:24,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
     ]);
    
    async function getRecords() {
        var user = firebase.auth().currentUser;
        if(user!=null) {

            await ref.onSnapshot((querySnapshot) => {
                const rec=[];
                querySnapshot.forEach((doc)=>{
                rec.push(doc.data());    
                })
                setItems(rec);
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
        <ImageBackground source={require('../assets/bg8.jpg')} resizeMode="cover" style={styles.image}>
        <Text style={styles.HeaderText}>Global Confessions</Text>
         <FlatList
            data={items}
            keyExtractor={(item)=>item.key}
            renderItem={({item}) =>(
                <View style={styles.itemRow}>
                    {/* <Text style={styles.itemDate}>{item.key}</Text> */}
                    <View style={styles.itemTD}>
                        <Text style={styles.itemDate}>{item.date},</Text>
                        <Text style={styles.itemTime}>{item.time} IST</Text>
                    </View>
                      
                    
                    <Text style={styles.itemMsg}>{item.msg}</Text>
                    
                    <View style={styles.likeLove}>
                        <View style={styles.itemLike}>
                            <Text style={styles.iconT}>{item.likes}</Text>
                            <AntDesign name="like2" size={15} color="black" />
                        </View>
                        <View style={styles.itemLove}>
                            <Text style={styles.iconT}>{item.love}</Text>
                            <AntDesign name="hearto" size={15} color="black" />
                        </View>
                    </View>
                </View>
            )}
         />

         
            </ImageBackground>
        </View>
    )
}

export default Global

const styles = StyleSheet.create({
    iconT:
    {
        fontSize:13,
    },
    container: {
        marginTop:40,
        flex:1,  
        justifyContent: 'center',
        alignItems: 'center',
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
    likeLove:
    {
        flexDirection:'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        

    },
    itemLove:
    {
        flexDirection:'row',
        
        alignItems: 'center',
        justifyContent:'space-evenly',
        width:'17%',
        padding:5,
    },
    itemLike:
    {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding:5,
        width:'17%',
    },
    itemDate:
    {
        color:'grey',
        fontSize:12,
        fontWeight:'bold',
        marginRight:5,
    },
    itemTD:
    {
        flexDirection:'row',
        alignItems: 'center',
    },
    itemTime:
    {
        color:'#C8C8C8',
        fontSize:12,
        marginRight:5,
    },
    image: {
        flex: 1,
        justifyContent: "center",
      
      },
HeaderText:
  {
    fontSize:23,
    margin:30,
    fontFamily:'Satisfy_400Regular',
    color:'rgb(67,63,64)',
    letterSpacing:1,
    textAlign:'center',
  }

})
