import React,{useState} from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Center, Row } from 'native-base';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    TextInput,
    Alert,
    ImageBackground,
    Picker,
    ScrollView,
    Modal,
    Image
  } from 'react-native';
import { Feather } from '@expo/vector-icons';  
export default  AppList= ({item}) => {
  
//   return (
    // <View >
    //     <TouchableOpacity style={styles.listContainer}>
    //     <Text >{item.Type}</Text>
    //     <Text  >{item.id}</Text>
    //     <Text  >{item.name}</Text>
    //     <Text >{item.password}</Text>
    //     <Text >{item.Note}</Text>
    //     </TouchableOpacity>      
    // </View>
    const [selectedValue, setSelectedValue] = useState(item.Type);
    
    if(selectedValue=='Card')
        {
          
          return (
           
            <View >
            <TouchableOpacity style={styles.listContainer}>
            <Text >{item.Type}:{item.cardholdername}</Text>
            </TouchableOpacity>      
        </View>
            
          );
        }
        else if (selectedValue=='Identity') 
        {
          return (
           
            <View >
                <TouchableOpacity style={styles.listContainer}>
                <Text >{item.Type}:{item.Id_Firstname}</Text>
                </TouchableOpacity> 
                     
            </View>
            
          );
        } 
        else if (selectedValue=='Secure Note')
         {
          return (
           
            <View >
                <TouchableOpacity style={styles.listContainer}>
                <Text >{item.Type} : {item.secure_name}</Text>
                </TouchableOpacity>      
            </View>
          );
        } 
        else
         {
          
          const [vis,setVis]=useState(true);
          var len=0;
          if(item.result)
          {
            len=item.result.length;
          }
          var temp='';
         for(var i=0;i<len;i++)
         {
            temp+='*';
         }
          return (
           
            <View>
            
                <TouchableOpacity style={styles.listContainer} >
                <Text >{item.Type}:{item.name}</Text>
              {/* <Text >{item.password}</Text>
                {vis==false?<Text>{item.result}</Text>:<Text>{temp}</Text>}
                <TouchableOpacity onPress={()=>{setVis(!vis)}}>{vis==false?<Feather name="eye" size={24} color="black" />:<Feather name="eye-off" size={24} color="black" />}
          </TouchableOpacity>*/}
                </TouchableOpacity>      
                 
            </View>
            
 
  );
}
}
const styles = StyleSheet.create({
    listContainer:{
        backgroundColor:'white',
        padding:15,
        borderRadius:10,
        marginBottom:5,
        marginTop:10,
        width:360,
        height:60,
        flexDirection:'column',
        justifyContent:'center',
    },
    listTitle:{
        color:'black',
        padding:5,
        margin:5 ,
        fontSize:19,
        
    },
    name:{
        color:'black',
        padding:5,
        margin:5
    },
    click:{
        marginTop:90,
        fontSize:12,
        color:'white',
        fontWeight:"200"
    },
    
});