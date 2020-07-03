import React from "react";

import { View, ImageBackground, Text, ImageSourcePropType } from "react-native";
import { width, height } from "../constants/windowSize";

const CategoriesScroll = ({
  image,
  name,
  ingredient,
}: {
  image: ImageSourcePropType;
  name: string;
  ingredient?: boolean;
}) => {
  return (
    <View style={{ paddingHorizontal: 10, height: ingredient ? 130 : 90 }}>
      <ImageBackground
        source={image}
        imageStyle={{ resizeMode: "stretch" }}
        style={{
          overflow: "hidden",
          borderRadius: 20,
          width: width / 4 + 20,
          height: "100%",
          justifyContent: "flex-end",
          alignItems: "flex-start",
        }}
      >
        <View style={{ paddingLeft: 10, paddingBottom: 10 }}>
          <Text style={{ color: "white" }}>{name}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CategoriesScroll;
