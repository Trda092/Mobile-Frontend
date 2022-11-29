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
      "I'm react native developer",
    contact:
      "device@kml.ds.co.es",
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
