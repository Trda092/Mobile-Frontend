import { Heading, NativeBaseProvider, ScrollView, VStack, Text } from 'native-base'
import React from 'react'
import { View } from 'react-native'
import FriendStateBox from '../components/FriendStateBox'
import { useFonts, Ribeye_400Regular } from '@expo-google-fonts/ribeye';

export default function FriendStatusScreen() {
    const fontsLoaded = async ()=> await useFonts({
        Ribeye_400Regular,
      });
  return (
    <NativeBaseProvider>
        <ScrollView style={[{backgroundColor:'#B4948D'}]}>
            <View style={[{marginTop:"20%", marginBottom:"10%", marginLeft:"3%"}]}>
                <Text fontSize="3xl" style={[{fontFamily:'Ribeye_400Regular'}]}>Friend</Text>
            </View>
            <View>
                <VStack space={3} alignItems="center">
                    <FriendStateBox status="joining"/>
                    <FriendStateBox status="avaliable"/>
                    <FriendStateBox status="offline"/>
                    <FriendStateBox status="offline"/>
                    <FriendStateBox status="offline"/>
                    <FriendStateBox status="offline"/>
                    <FriendStateBox status="offline"/>
                    <FriendStateBox status="offline"/>
                    <FriendStateBox status="offline"/>
                    <FriendStateBox status="offline"/>
                    
                </VStack>
            </View>
        </ScrollView>
    </NativeBaseProvider>
  )
}
