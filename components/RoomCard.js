import { Box, NativeBaseProvider, ScrollView } from 'native-base'
import React from 'react'
import { View } from 'react-native'

export default function RoomCard() {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <View>
          <Box>
              <Box><Box>Room Topic</Box><Box>Join</Box></Box>
              <Box>Description</Box>
          </Box>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  )
}
