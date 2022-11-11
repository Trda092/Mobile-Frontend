import React from 'react'
import { HStack, Center, ReactNativeBaseProvider } from 'native-base'

export default function FriendStateBox(props) {
  return (
    <HStack space={0} justifyContent="center">
    <Center h="20" w="20%" bg="primary.300" shadow={3} />
    <Center h="20" w="60%" bg="primary.500" shadow={3} />
    <Center h="20" w="20%" bg="primary.700" shadow={3} />
  </HStack>
  )
}
