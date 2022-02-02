import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Crypto from 'expo-crypto';
import CryptoES from "crypto-es";
var C = require("crypto-js");

export default function App() {
    var mytexttoEncryption = "Helloj" 
    const encrypted = CryptoES.AES.encrypt(mytexttoEncryption ,"your password").toString();
     console.log(encrypted);

     var Decrypted = C.AES.decrypt(encrypted, "your password");
     var result =Decrypted.toString(C.enc.Utf8);
    console.log(result); 
  return (
    <View style={styles.container}>
      <Text>Crypto Module Example</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});