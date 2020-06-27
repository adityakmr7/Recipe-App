import React from "react";
import { View, ImageBackground, Text, ImageSourcePropType } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { TITLE_COLOR } from "../constants/color";
import { height, width } from "../constants/windowSize";
const PopularRecipeScroll = ({
  image,
  name,
  time,
  level,
}: {
  image: ImageSourcePropType;
  name: string;
  time: number;
  level: string;
}) => {
  return (
    <View style={{ height: height / 5, marginBottom: 40 }}>
      <ImageBackground
        source={image}
        imageStyle={{ resizeMode: "stretch" }}
        style={{
          width: "100%",
          height: height / 6,
          borderRadius: 20,
          overflow: "hidden",
        }}
      ></ImageBackground>
      <View style={{ paddingLeft: 10 }}>
        <Text
          style={{
            color: TITLE_COLOR,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {name}
        </Text>
      </View>
      <View style={{ flexDirection: "row", marginLeft: 10 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <MaterialIcons name="timer" size={15} color="#F3C624" />
          <Text style={{ color: "black", paddingHorizontal: 5 }}>
            {time} min
          </Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <MaterialCommunityIcons name="chef-hat" size={15} color="#F3C624" />
          <Text style={{ color: "black", paddingHorizontal: 5 }}>{level}</Text>
        </View>
      </View>
      <View
        style={{
          paddingVertical: 10,
        }}
      >
        <View
          style={{
            marginHorizontal: "25%",
            width: "50%",
            height: 5,
            backgroundColor: "#FFFFFF",

            alignSelf: "stretch",
          }}
        />
      </View>
    </View>
  );
};

export default PopularRecipeScroll;
