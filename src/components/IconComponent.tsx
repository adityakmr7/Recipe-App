import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { TITLE_COLOR, BACKGROUND_COLOR, ICON_COLOR } from "../constants/color";
interface IconComponentProps {
  IconSpace?: boolean;
}

export const IconComponent: React.FC<IconComponentProps> = ({ IconSpace }) => {
  return (
    <View
      style={{
        paddingVertical: 15,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: `${IconSpace ? "80%" : "40%"}`,
      }}
    >
      <View style={{ flex: 1, flexDirection: "row" }}>
        <MaterialCommunityIcons name="chef-hat" size={15} color={ICON_COLOR} />
        <Text
          style={{
            color: `${IconSpace ? "white" : TITLE_COLOR}`,
            paddingHorizontal: 5,
          }}
        >
          Easy
        </Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <MaterialIcons name="timer" size={15} color={ICON_COLOR} />
        <Text
          style={{
            color: `${IconSpace ? "white" : TITLE_COLOR}`,
            paddingHorizontal: 5,
          }}
        >
          36 min
        </Text>
      </View>
    </View>
  );
};
