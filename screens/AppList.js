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
    Image,
    Pressable
  } from 'react-native';
import { Feather,Ionicons } from '@expo/vector-icons';  
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
          const [modalOpen,setmodalOpen]=useState(false);
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
            
                <TouchableOpacity style={styles.listContainer} onPress={()=>setmodalOpen(true)}>
                <Text >{item.Type}:{item.name}</Text>
              {/* <Text >{item.password}</Text>
                {vis==false?<Text>{item.result}</Text>:<Text>{temp}</Text>}
                <TouchableOpacity onPress={()=>{setVis(!vis)}}>{vis==false?<Feather name="eye" size={24} color="black" />:<Feather name="eye-off" size={24} color="black" />}
          </TouchableOpacity>*/}
                </TouchableOpacity>      
                <Modal
        animationType="slide"
        transparent={true}
        visible={modalOpen}
        onRequestClose={() => {setmodalOpen(false)}}>
        <View style={styles.centeredView} onPressOut={() => {setmodalOpen(false)}}>
        
          <View style={styles.modalView} >
          
            <Text style={styles.modalText}>Hellhfhffho World!</Text>
            
          </View>
        </View>

      </Modal>

      {/* <Modal visible={modalOpen} animationType="slide"
        transparent={true}>
            <Ionicons name="close-sharp" size={24} color="black" onPress={()=>setmodalOpen(false)} style={styles.btnClose}/>
            <View style={styles.modalContent}>
              
              <Text>hiiii</Text>
            </View>
      
         </Modal> */}


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

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
 
    
});