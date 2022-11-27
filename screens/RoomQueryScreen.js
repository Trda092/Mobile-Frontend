import React from 'react'
import { useFonts, Ribeye_400Regular } from '@expo-google-fonts/ribeye';
import { Input, NativeBaseProvider, ScrollView, Button, Text} from 'native-base';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
export default function RoomQueryScreen({route, navigation}) {
  const data = route.params.selectInterest;
  console.log(data)
  const fontsLoaded = async ()=> await useFonts({
    Ribeye_400Regular,
  });
  return (
    <NativeBaseProvider>
        <ScrollView style={[{marginTop:"20%"}]}>
        <View>
          
        </View>
        <View>
        <TouchableOpacity
              style={{
                alignSelf: "center",
                width:"80%",
                marginTop: "5%",
                backgroundColor: "#9D746B",
                padding: 8,
                borderRadius: 10,
              }}
            >
              <Text style={{ textAlign: "center" }} onPress={()=>{navigation.navigate("CreateRoom")}}>CreateRoom</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
  </NativeBaseProvider>
  )
}
