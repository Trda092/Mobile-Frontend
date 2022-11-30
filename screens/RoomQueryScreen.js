import React from "react";
import { useFonts, Ribeye_400Regular } from "@expo-google-fonts/ribeye";
import {
  Input,
  NativeBaseProvider,
  ScrollView,
  Button,
  Text,
} from "native-base";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput, StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import RoomCard from "../components/RoomCard";
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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>);
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
  const Tab = createMaterialTopTabNavigator();
  return (
    <NativeBaseProvider>
      <ScrollView style={[{ marginTop: "20%" }]}>
        <View style={[{flex:1}]}>
        <View>
          <Tab.Navigator>
            {data.includes("basketball") ? (
              <Tab.Screen name="basketball" component={BasketballScr} />
            ) : null}
            {data.includes("football") ? (
              <Tab.Screen name="football" component={FootballScr} />
            ) : null}
            {data.includes("ai") ? (
              <Tab.Screen name="ai" component={AiScr} />
            ) : null}
            {data.includes("pressing") ? (
              <Tab.Screen name="pressing" component={PressingScr} />
            ) : null}
            {data.includes("newcomer") ? (
              <Tab.Screen name="newcomer" component={NewcomerScr} />
            ) : null}
            {data.includes("detective") ? (
              <Tab.Screen name="detective" component={DetectiveScr} />
            ) : null}
            {data.includes("invest") ? (
              <Tab.Screen name="invest" component={InvestScr} />
            ) : null}
          </Tab.Navigator>
        </View>
        {/* {room.map((room, index) => {
            for (let i = 0; i < data.length; i++) {
              if (room.tag.includes(data[i]))
                return <RoomCard key={room.name} name={room.name} tag={room.tag} />;
            }
          })} */}
        <View>
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
