import React from "react";
import { View, Text } from "react-native";

interface HomeScreenProps {}
const TITLE_COLOR = "#4B7094";
export const HomeScreen: React.FC<HomeScreenProps> = ({}) => {
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <View style={{ paddingLeft: 20 }}>
        <Text
          style={{
            fontSize: 40,
            color: TITLE_COLOR,
            fontWeight: "bold",
          }}
        >
          Discover
        </Text>
      </View>
      <View style={{ height: 240 }}>
        <View
          style={{
            backgroundColor: TITLE_COLOR,
            height: "100%",
            marginHorizontal: 20,
            marginVertical: 10,
            borderRadius: 10,
          }}
        ></View>
      </View>
      <View style={{ height: 150 }}>
        <View
          style={{
            backgroundColor: "grey",
            height: "100%",
            marginVertical: 20,
            marginHorizontal: 20,
          }}
        >
          <View>
            <Text
              style={{ fontSize: 25, color: TITLE_COLOR, fontWeight: "bold" }}
            >
              Categories
            </Text>
          </View>
        </View>
      </View>
      <View></View>
    </View>
  );
};
