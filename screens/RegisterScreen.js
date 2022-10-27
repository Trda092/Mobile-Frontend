import { NativeBaseProvider, ScrollView, Box, Input, Button, Circle, Icon } from 'native-base'
import React from 'react'
import { View } from 'react-native'
import { useFonts, Ribeye_400Regular } from '@expo-google-fonts/ribeye';


export default function RegisterScreen() {
  const [fontsLoaded] = useFonts({
    Ribeye_400Regular,
  });
  return (
    <NativeBaseProvider>
        <ScrollView>
          <View>
            <Circle></Circle>
          </View>
        <View>
        <Box style={[{marginTop:"10%"}]}>
            <Box alignSelf="center" alignItems="center" borderWidth="2" borderColor="#736868" bg="white" maxW="80" rounded="lg" p="5">
            <Input size="md" placeholder="Name" mt="2" mb="3" borderWidth="1" borderColor="#736868"/>
            <Input size="md" placeholder="Username" mt="2" mb="3" borderWidth="1" borderColor="#736868"/>
            <Input size="md" placeholder="Email" mt="2" mb="3" borderWidth="1" borderColor="#736868"/>
            <Input type="password" size="md" placeholder="Password" my="3" borderWidth="1" borderColor="#736868"/>
            <Input type="password" size="md" placeholder="Confirm Password" my="3" borderWidth="1" borderColor="#736868"/>
            <Button alignSelf="flex-end" mt="4" mb="3" width="40%" height="10%" bgColor="#B4948D" borderWidth="1" borderColor="#9D746B" shadow="7" _text={{fontSize:"lg"}} >Register</Button>
            
            </Box>
          </Box>
          </View>
        </ScrollView>
    </NativeBaseProvider>
  )
}
