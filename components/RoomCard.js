import React, { useEffect, useState } from "react";
import {
  NativeBaseProvider,
  ScrollView,
  Text,
  Input,
  Button,
} from "native-base";
import { View, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
export default function RoomCard(props) {
  const [tag, setTag] = useState(props.tag);
  // useEffect(() => {
  //   setTag(props.tag);
  // });
  return (
    <View
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
      }}
    >
      <View style={styles.JoinBut}>
        <View
          style={{
            width: "80%",
            borderWidth: 2,
            justifyContent: "center",
            borderColor: "#9D746B",
          }}
        >
          <Text>{props.name}</Text>
        </View>
        <View
          style={{
            width: "20%",
            borderBottomWidth: 2,
            borderTopWidth: 2,
            borderRightWidth: 2,
            borderColor: "#9D746B",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#9D746B",
            }}
          >
            <Text style={{ textAlign: "center" }}>Join</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            width: "100%",
            borderBottomWidth: 2,
            borderLeftWidth: 2,
            borderRightWidth: 2,
            height: "80%",
            alignItems: "center",
            borderColor: "#9D746B",
          }}
        >
          {/* {tag.map((tag, index) => {
            return <Text style={{ paddingHorizontal: 5 }}>#{tag}</Text>;
          })} */}
        </View>
      </View>
    </View>
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
