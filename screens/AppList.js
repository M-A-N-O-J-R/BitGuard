import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default  AppList= ({list}) => {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.listTitle} numberOfLines={1}>{list.title}</Text>
      <View>
          <View style={{alignItems:'center'}}>
            <Text style={styles.name}>{list.username}</Text>
            <Text style={styles.click}>Click for Password</Text>
          </View>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
    listContainer:{
        backgroundColor:'mediumpurple',
        paddingHorizontal:16,
        paddingVertical:32,
        borderRadius:10,
        marginHorizontal:12,
        alignItems:'center',
        width:200
    },
    listTitle:{
        fontSize:24,
        fontWeight:"700",
        color:"white",
        marginBottom:18,  
    },
    name:{
        fontSize:27,
        color:'black',
        fontWeight:"700",
        marginTop:20
    },
    click:{
        marginTop:90,
        fontSize:12,
        color:'white',
        fontWeight:"200"
    }
});
