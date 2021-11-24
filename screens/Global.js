import React ,{useState} from 'react'
import { StyleSheet, Text, View ,FlatList,Image } from 'react-native'

import { 
    DancingScript_400Regular,
    DancingScript_500Medium,
    DancingScript_600SemiBold,
    DancingScript_700Bold 
  } from '@expo-google-fonts/dancing-script'

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
    const [items,setItems]=useState(
    [
        {key:1,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:2,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:3,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:4,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:5,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:6,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:7,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:8,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:9,date: date,msg:" unchanged.",likes:90,love:100},
        {key:10,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:11,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:12,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:13,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:14,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:15,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:16,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:17,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:18,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:19,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:20,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:21,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:22,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:23,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
        {key:24,date: date,msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likes:90,love:100},
    ]);
    let [fontsLoaded,error]= useFonts({
        DancingScript_400Regular,
        DancingScript_500Medium,
        DancingScript_600SemiBold,
        DancingScript_700Bold,
        Satisfy_400Regular
    });
    if(!fontsLoaded)
    {
        return<AppLoading/>
    }    
    return (
        <View style={styles.container}>
         <FlatList
            data={items}
            keyExtractor={(item)=>item.key}
            renderItem={({item}) =>(
                <View style={styles.itemRow}>
                    {/* <Text style={styles.itemDate}>{item.key}</Text> */}
                    <View>
                        <Text style={styles.itemDate}>Date :  {item.date}</Text>
                    </View>
                      
                    <Text>---------------------------------------------------------------------------------</Text>
                    <Text style={styles.itemMsg}>{item.msg}</Text>
                    <Text>---------------------------------------------------------------------------------</Text>
                    <View style={styles.likeLove}>
                        <View style={styles.itemLike}>
                            <Text >{item.likes}</Text>
                            <AntDesign name="like2" size={24} color="black" />
                        </View>
                        <View style={styles.itemLove}>
                            <Text >{item.love}</Text>
                            <AntDesign name="hearto" size={24} color="black" />
                        </View>
                    </View>
                </View>
            )}
         />

         
            
        </View>
    )
}

export default Global

const styles = StyleSheet.create({

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
       margin:10,
       marginBottom:25,
       borderRadius:7,


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
        padding:12,
        marginBottom:10,
        marginTop:10,
        borderRadius:3,
        fontFamily:'Satisfy_400Regular',
        fontSize:15,
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
        padding:10,
        width:'25%'
    },
    itemLike:
    {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding:8,
        width:'25%',
    },

})
