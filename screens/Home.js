import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FloatingAction } from "react-native-floating-action";
import { Ionicons } from '@expo/vector-icons';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
const Home = ({navigation}) => {
  
  return (
    <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
        {/* Rest of the app comes ABOVE the action button component !*/}
        <ActionButton size={60} buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="Add" onPress={() => {console.log("notes tapped!");navigation.navigate('AddItem');}}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          
          <ActionButton.Item buttonColor='#1abc9c' title="Update" onPress={() => {}}>
            <Icon name="sync" style={styles.actionButtonIcon} />
          </ActionButton.Item>

          <ActionButton.Item buttonColor='#3498db' title="Generate Password" onPress={() => {}}>
            <Icon name="key" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
