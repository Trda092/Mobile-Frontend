import { Box, NativeBaseProvider, Text, Input, Button, Link, ScrollView} from 'native-base'
import React, { Component } from 'react'
import { StyleSheet, View} from 'react-native'
import { useFonts, Ribeye_400Regular } from '@expo-google-fonts/ribeye';

export default function LoginScreen({navigation}) {
  const fontsLoaded = async ()=> await useFonts({
    Ribeye_400Regular,
  });
    return (
      <NativeBaseProvider>
        <ScrollView>
          <View style={styles.textIcon}>
            <Text fontSize="3xl" style={[{textAlign:'center', fontFamily:'Ribeye_400Regular'}]}>The</Text>
            <Text fontSize="3xl" style={[{textAlign:'center', fontFamily:'Ribeye_400Regular'}]}>Prattler</Text>
          </View>
          <View>
          <Box style={[{marginTop:"10%"}]}>
            <Box alignSelf="center" alignItems="center" borderWidth="2" borderColor="#736868" bg="white" maxW="80" rounded="lg" p="5">
            <Input size="md" placeholder="Username/Email" mt="2" mb="3" borderWidth="1" borderColor="#736868"/>
            <Input type="password" size="md" placeholder="Password" my="3" borderWidth="1" borderColor="#736868"/>
            <Button mt="4" mb="3" bgColor="#B4948D" borderWidth="1" borderColor="#9D746B" shadow="7" _text={{fontSize:"md", textAlign:'center'}} onPress={()=>{navigation.navigate("InterestSelection")}}>Sign in</Button>
            </Box>
          </Box>
          <View style={[{marginTop:'5%'}]}>
          <Text style={[{textAlign:'center'}]} fontSize="sm">Don't have an account? <Text underline onPress={()=>{navigation.navigate("Register")}}>sign up</Text></Text>
          <Text style={[{textAlign:'center'}]} fontSize="sm">forgot password?</Text>
          </View>
          </View>
          </ScrollView>
      </NativeBaseProvider>
    );
}
const styles = StyleSheet.create({
  textIcon:{
    textAlign:'center',
    marginTop:"40%",
  }
});

