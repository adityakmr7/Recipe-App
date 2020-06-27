import React from "react";

import { View, ImageBackground, Text, ImageSourcePropType } from "react-native";
import { width, height } from "../constants/windowSize";

const CategoriesScroll = ({
  image,
  name,
}: {
  image: ImageSourcePropType;
  name: string;
}) => {
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <ImageBackground
        source={image}
        imageStyle={{ resizeMode: "stretch" }}
        style={{
          overflow: "hidden",
          borderRadius: 20,
          width: width / 4 + 20,
          height: height / 9,
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
