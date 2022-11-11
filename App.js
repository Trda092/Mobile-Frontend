import React from "react";
import {
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import InterestBadge from "./components/InterestBadge";
import { Text,View } from "react-native";
import InterestSelectScreen from "./screens/InterestSelectScreen";
import RegisterScreen from "./screens/RegisterScreen";
import RoomQueryScreen from "./screens/RoomQueryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FriendStatusScreen from "./screens/FriendStatusScreen";
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      {/* <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Register" component={RegisterScreen}/>
      <Stack.Screen name="InterestSelection" component={InterestSelectScreen}/> */}
      {/* <Stack.Screen name="RoomQuery" component={RoomQueryScreen}></Stack.Screen> */}
      <Stack.Screen name="FriendStatus" component={FriendStatusScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    // <RoomQueryScreen/>
  );
}


