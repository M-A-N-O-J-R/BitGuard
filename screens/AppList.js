import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default  AppList= ({list}) => {
  return (
    <View style={styles.listContainer}>
        <TouchableOpacity>
        <Text style={styles.listTitle} >{list.title}</Text>
        </TouchableOpacity>      
    </View>
    
  );
}

const styles = StyleSheet.create({
    listContainer:{
        backgroundColor:'white',
        padding:15,
        borderRadius:10,
        marginBottom:5,
        marginTop:10,
        width:420,
        height:80
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
    }
});
