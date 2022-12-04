import React from "react";
import { useFonts, Ribeye_400Regular } from "@expo-google-fonts/ribeye";
import {
  Input,
  NativeBaseProvider,
  ScrollView,
  Button,
  Text,
  HStack,
  VStack,
} from "native-base";
import { View } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
import { TextInput, StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import RoomCard from "../components/RoomCard";
import InterestRoomSwap from "../components/InterestRoomSwap";
export default function RoomQueryScreen({ route, navigation }) {
  const data = route.params.selectInterest;

  const room = [
    { id: 1, name: "ชีวิตก็เหมือนหมูลาบหมูแซ่บๆ", tag: ["pressing", "ai"] },
    { id: 2, name: "chat", tag: ["ai", "football"] },
  ];
  const test = ["football"];
  console.log(data);
  const fontsLoaded = async () =>
    await useFonts({
      Ribeye_400Regular,
    });
  function BasketballScr() {
    return (
     <RoomCard name={room.name} tag={room.tag}/>);
      // <View><Text>xxx</Text></View>
  }
  function FootballScr() {
    return (
      // <RoomCard name="ชีวิตก็เหมือนหมูลาบหมูแซ่บๆ" tag={["basketball", "football"]}/>
      <View><Text>xxx</Text></View>
    );
  }
  function AiScr() {
    return (
      // <RoomCard name="ชีวิตก็เหมือนหมูลาบหมูแซ่บๆ" tag={["basketball", "football"]}/>
      <View><Text>xxx</Text></View>
    );
  }
  function PressingScr() {
    return (
      // <RoomCard name="ชีวิตก็เหมือนหมูลาบหมูแซ่บๆ" tag={["basketball", "football"]}/>
      <View><Text>xxx</Text></View>
    );
  }
  function NewcomerScr() {
    return (
      // <RoomCard name="ชีวิตก็เหมือนหมูลาบหมูแซ่บๆ" tag={["basketball", "football"]}/>
      <View><Text>xxx</Text></View>
    );
  }
  function DetectiveScr() {
    return (
      // <RoomCard name="ชีวิตก็เหมือนหมูลาบหมูแซ่บๆ" tag={["basketball", "football"]}/>
      <View><Text>xxx</Text></View>
    );
  }
  function InvestScr() {
    return (
      // <RoomCard name="ชีวิตก็เหมือนหมูลาบหมูแซ่บๆ" tag={["basketball", "football"]}/>
      <View><Text>xxx</Text></View>
    );
  }
  return (
    <NativeBaseProvider>
      <ScrollView style={[{ marginTop: "20%" }]}>
        <View styles={[{flex:1, flexDirection:"row"}]}>
          <HStack>
            {data.includes("basketball") ? <InterestRoomSwap text="basketball"/> : null}
            {data.includes("football") ?  <InterestRoomSwap text="football"/> : null} 
            {data.includes("ai") ? <InterestRoomSwap text="ai"/> : null}
            {data.includes("pressing") ? <InterestRoomSwap text="pressing"/> : null}
            {data.includes("newcomer") ? <InterestRoomSwap text="newcomer"/> : null}
            {data.includes("detective") ? <InterestRoomSwap text="detective"/> : null}
            {data.includes("invest") ? <InterestRoomSwap text="invest"/> : null}
        </HStack>
        </View>
        <View styles={[{flex:1}]}>
          <VStack space={4} alignItems="center">
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
          {/* <RoomCard name="ลาบหมู"/> */}
          </VStack>
        </View>
        {/* {room.map((room, index) => {
            for (let i = 0; i < data.length; i++) {
              if (room.tag.includes(data[i]))
                return <RoomCard key={room.name} name={room.name} tag={room.tag} />;
            }
          })} */}
        <View styles={[{flex:1}]}>
          <TouchableOpacity
            style={{
              flex:1,
              alignSelf: "center",
              width: "80%",
              marginTop: "5%",
              backgroundColor: "#9D746B",
              padding: 8,
              borderRadius: 10,
              position:"relative",
              bottom:'0%'
            }}
          >
            <Text
              style={{ textAlign: "center", fontFamily: "Ribeye_400Regular" }}
              onPress={() => {
                navigation.navigate("CreateRoom");
              }}
            >
              Create Room
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  JoinBut: {
    display: "flex",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: 1,
  },
});
