import { NativeBaseProvider, ScrollView, VStack } from 'native-base'
import React from 'react'
import { View } from 'react-native'
import FriendStateBox from '../components/FriendStateBox'

export default function FriendStatusScreen() {
  return (
    <NativeBaseProvider>
        <ScrollView>
            <View>
                <VStack space={3} alignItems="center">
                    <FriendStateBox/>
                </VStack>
            </View>
        </ScrollView>
    </NativeBaseProvider>
  )
}
