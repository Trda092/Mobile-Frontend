import React, { useState } from "react";
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
import { TextInput, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import RoomCard from "../components/RoomCard";
import InterestRoomSwap from "../components/InterestRoomSwap";
import InterestBadge from "../components/InterestBadge";
export default function RoomQueryScreen({ route, navigation }) {
  const data = route.params.selectInterest;
  const [selectCat, setSelectCat] = useState("");
  const room = [
    { id: 1, name: "ชีวิตก็เหมือนหมูลาบหมูแซ่บๆ", tag: ["pressing", "ai"] },
    { id: 2, name: "chat", tag: ["ai", "football"] },
  ];
  const test = ["football"];
  console.log(data, selectCat);
  const fontsLoaded = async () =>
    await useFonts({
      Ribeye_400Regular,
    });
  return (
    <NativeBaseProvider>
      <ScrollView style={[{ marginTop: "20%" }]}>
        <View styles={[{ flex: 1, flexDirection: "row" }]}>
          <HStack>
            {data.includes("basketball") ? (
              <InterestRoomSwap
                text="basketball"
                onPress={() => {
                  setSelectCat("basketball");
                }}
              />
            ) : null}
            {data.includes("football") ? (
              <InterestRoomSwap
                text="football"
                onPress={() => {
                  setSelectCat("football");
                }}
              />
            ) : null}
            {data.includes("ai") ? (
              <InterestRoomSwap
                text="ai"
                onPress={() => {
                  setSelectCat("ai");
                }}
              />
            ) : null}
            {data.includes("pressing") ? (
              <InterestRoomSwap
                text="pressing"
                onPress={() => {
                  setSelectCat("pressing");
                }}
              />
            ) : null}
            {data.includes("newcomer") ? (
              <InterestRoomSwap
                text="newcomer"
                onPress={() => {
                  setSelectCat("newcomer");
                }}
              />
            ) : null}
            {data.includes("detective") ? (
              <InterestRoomSwap
                text="detective"
                onPress={() => {
                  setSelectCat("detective");
                }}
              />
            ) : null}
            {data.includes("invest") ? (
              <InterestRoomSwap
                text="invest"
                onPress={() => {
                  setSelectCat("invest");
                }}
              />
            ) : null}
          </HStack>
        </View>
        <View styles={[{ flex: 1 }]}>
          {/* <VStack space={4} alignItems="center">
            <InterestBadge text="a" dataLists={["a"]} />
            <InterestBadge text="a" dataLists={["a"]} />
            <InterestBadge text="a" dataLists={["a"]} />
            <InterestBadge text="a" dataLists={["a"]} />
          </VStack> */}
        </View>
        {room.map((room, index) => {
          for (let i = 0; i < data.length; i++) {
            if (room.tag.includes(data[i]))
              return (
                <RoomCard key={room.name} name={room.name} tag={room.tag} />
              );
          }
        })}
        <View>
          <TouchableOpacity
            style={{
              alignSelf: "center",
              width: "80%",
              marginTop: "5%",
              backgroundColor: "#9D746B",
              padding: 8,
              borderRadius: 10,
              position: "relative",
              bottom: "0%",
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
