import { NativeBaseProvider, Text} from 'native-base'
import React, { Component } from 'react'
import { StyleSheet, View} from 'react-native'

export default function LoginScreen() {
    return (
      <NativeBaseProvider>
          <View style={styles.textIcon}>
          <Text fontSize="4xl" style={[{marginRight:"30%"}]}>The</Text>
          <Text fontSize="4xl" style={[{marginLeft:"10%"}]}>Prattler</Text>
          </View>
      </NativeBaseProvider>
    );
}
const styles = StyleSheet.create({
  textIcon:{
    textAlign:'center',
    marginTop:"15%"
  }
});

