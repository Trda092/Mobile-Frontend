import React from 'react'
import { useFonts, Ribeye_400Regular } from '@expo-google-fonts/ribeye';
import { Input, NativeBaseProvider, ScrollView, Button } from 'native-base';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RoomCard from '../components/RoomCard';
export default function RoomQueryScreen() {
  const fontsLoaded = async ()=> await useFonts({
    Ribeye_400Regular,
  });
  return (
    <NativeBaseProvider>
        <ScrollView style={[{marginTop:"20%"}]}>
        {/* <View style={[{marginTop:10, justifyContent:"center", alignItems:"center"}]}>
            <Input rounded width="80%" type="text" mt="10%" placeholder='search' style={[{fontFamily:'Ribeye_400Regular'}]} InputRightElement={<Ionicons name="md-search" size={24} color="black" style={[{marginRight:3}]}/>} borderWidth="2" borderColor="grey"></Input>
        </View> */}
        <View>
          <RoomCard/>
        </View>
        </ScrollView>
  </NativeBaseProvider>
  )
}
