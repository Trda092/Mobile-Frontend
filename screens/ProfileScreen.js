import {
  NativeBaseProvider,
  ScrollView,
  Text,
  Input,
  Button,
} from "native-base";
import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
export default function ProfileScreen() {
  const image = { uri: "https://reactjs.org/logo-og.png" };
  const user = {
    id: 1,
    name: "Natanon",
    aboutme:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    contact:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of",
  };
  return (
    <NativeBaseProvider>
      <ScrollView>
        <View style={styles.Nav}>
          <View style={styles.Contain}>
            <View style={styles.Profile}>
              <ImageBackground
                imageStyle={{ borderRadius: 100 }}
                style={styles.Image}
                source={image}
                resizeMode="cover"
              ></ImageBackground>
            </View>
            <View style={styles.Info}>
              <Text style={{ fontSize: 20 }}>Name</Text>
              <Text style={{ fontSize: 20 }}>{user.name}</Text>
              {/* <Button onPress={user.name = }>pressme</Button> */}
            </View>
          </View>
        </View>
        <View
          style={{ height: "auto", justifyContent: "center", paddingTop: 20 }}
        >
          <Text style={{ fontSize: 30, paddingHorizontal: 20, paddingTop: 10 }}>
            About Me
          </Text>
          <Text style={{ paddingHorizontal: 20 }}>{user.aboutme}</Text>
        </View>
        <View
          style={{ height: "auto", justifyContent: "center", paddingTop: 20 }}
        >
          <Text style={{ fontSize: 30, paddingHorizontal: 20, paddingTop: 10 }}>
            Contact
          </Text>
          <Text style={{ paddingHorizontal: 20 }}>{user.contact}</Text>
        </View>
      </ScrollView>
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
  Nav: {
    display: "flex",
    backgroundColor: "#9D746B",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  Profile: {
    height: 100,
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  Image: {
    flex: 1,
    height: 100,
    width: 100,
  },
  Contain: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    paddingTop: 50,
    justifyContent: "center",
  },
  Info: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    paddingLeft: 30,
  },
});
