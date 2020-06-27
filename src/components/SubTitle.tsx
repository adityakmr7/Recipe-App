import React from "react";
import { View, Text } from "react-native";
import { TITLE_COLOR } from "../constants/color";

const SubTitle = ({ title }: { title: string }) => (
  <View>
    <Text style={{ fontSize: 25, color: TITLE_COLOR, fontWeight: "bold" }}>
      {title}
    </Text>
  </View>
);
export default SubTitle;
