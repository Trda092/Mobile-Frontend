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
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Roomcard from "../components/RoomCard";
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
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Bassketball</Text>
      </View>
    );
  }
  function FootballScr() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Foolball</Text>
      </View>
    );
  }
  function AiScr() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Ai</Text>
      </View>
    );
  }
  function PressingScr() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Pressing</Text>
      </View>
    );
  }
  function NewcomerScr() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>NewComer</Text>
      </View>
    );
  }
  function DetectiveScr() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Detective</Text>
      </View>
    );
  }
  function InvestScr() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Invest</Text>
      </View>
    );
  }
  const Tab = createMaterialTopTabNavigator();
  return (
    <NativeBaseProvider>
      <ScrollView style={[{ marginTop: "20%" }]}>
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
        <View>
          <TouchableOpacity
            style={{
              alignSelf: "center",
              width: "80%",
              marginTop: "5%",
              backgroundColor: "#9D746B",
              padding: 8,
              borderRadius: 10,
              justifyContent: "flex-end",
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

          {room.map((room, index) => {
            for (let i = 0; i < data.length; i++) {
              if (room.tag.includes(data[i]))
                return <Roomcard name={room.name} tag={room.tag} />;
            }
          })}
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
}
