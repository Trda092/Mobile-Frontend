import {
  NativeBaseProvider,
  ScrollView,
  Text,
  Input,
  Button,
  Center,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
export default function RoomScreen({ navigation }) {
  const room = [
    {
      id: 1,
      name: "ชีวิตก็เหมือนหมูลาบหมูแซ่บๆ",
      tag: ["กับข้าว", "ปัญหาชีวิต"],
      user_in_room: [
        {
          id: 1,
          name: "Trda",
          profile: { uri: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" },
          role: "host",
        },
        {
          id: 2,
          name: "Natanon",
          profile: {
            uri: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
          },
          role: "speaker",
        },
        {
          id: 3,
          name: "Chaowat",
          profile: {
            uri: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
          },
          role: "speaker",
        },
        {
          id: 4,
          name: "Santhitak",
          profile: {
            uri: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
          },
          role: "audience",
        },
      ],
    },
  ];
  return (
    <NativeBaseProvider>
      <View style={styles.Nav}>
        <View style={styles.Title}>
          <Text
            style={{ fontSize: 20, paddingVertical: 8, paddingHorizontal: 5 }}
          >
            {room[0].name}
          </Text>
        </View>
        <View style={{ justifyContent: "center" }}>
          <View style={styles.Speaker}>
            {room[0].user_in_room.map((user, index) => {
              if (user.role === "speaker" || user.role === "host")
                return (
                  <View style={styles.Profile}>
                    <ImageBackground
                      imageStyle={{ borderRadius: 100 }}
                      style={styles.Image}
                      source={user.profile}
                      resizeMode="cover"
                    ></ImageBackground>
                  </View>
                );
            })}
          </View>
        </View>
        <View style={{ width: "100%" }}>
          <View style={{ width: "40%" }}>
            <Text style={{ textAlign: "right" }}>Speaker</Text>
          </View>
          <View style={styles.Line}></View>
          <View style={{ width: "40%" }}>
            <Text style={{ textAlign: "right" }}>Audience</Text>
          </View>
        </View>

        <View style={{ justifyContent: "center" }}>
          <View style={styles.Audience}>
            {room[0].user_in_room.map((user, index) => {
              if (user.role === "audience")
                return (
                  <View style={styles.Profile}>
                    <ImageBackground
                      imageStyle={{ borderRadius: 100 }}
                      style={styles.Image}
                      source={user.profile}
                      resizeMode="cover"
                    ></ImageBackground>
                  </View>
                );
            })}
          </View>
        </View>

        <View style={styles.Footer}>
          <View style={{ paddingHorizontal: 20 }}>
            <AntDesign name="disconnect" size={24} color="black" />
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <Text>Audience</Text>
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <Text>Speaker</Text>
          </View>
          <View style={{ paddingHorizontal: 20 }}>
            <AntDesign
              name="smileo"
              size={24}
              color="black"
              onPress={() => {
                navigation.navigate("Profile");
              }}
            />
          </View>
          {/* <View></View>
          <View></View> */}
        </View>
      </View>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  BtnSelection: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "10%",
    // maxHeight:"50%"
  },
  BtnStyle: {
    borderColor: "white",
  },
  Title: {
    marginTop: 80,
    borderColor: "white",
    borderRadius: 6,
    borderWidth: 2,
    backgroundColor: "white",
    opacity: 0.5,
    width: "80%",
    height: "auto",
    justifyContent: "center",
  },
  Speaker: {
    display: "flex",
    flexDirection: "row",
    marginTop: 80,
    width: "80%",
    height: "auto",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  Nav: {
    display: "flex",
    backgroundColor: "#9D746B",
    height: "100%",
    alignItems: "center",
  },
  Profile: {
    height: 60,
    paddingHorizontal: 8,
    marginVertical: 10,
  },
  Image: {
    flex: 1,
    height: 60,
    width: 60,
  },
  Line: {
    height: 6,
    width: "40%",
    backgroundColor: "white",
  },
  Audience: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    height: "auto",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  Footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "8%",
    width: "100%",
    backgroundColor: "white",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
  },
});
