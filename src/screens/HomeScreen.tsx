import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  ImageSourcePropType,
  Image,
} from "react-native";
import { get_random_recipes } from "../services/api_url";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { catArr, popularArr } from "../dummy_data/categories_data";
interface HomeScreenProps {}
const { width, height } = Dimensions.get("window");
const TITLE_COLOR = "#4B7094";
const BACKGROUND_COLOR = "#F4FCFF";

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return { loading, data };
};

export const HomeScreen: React.FC<HomeScreenProps> = ({}) => {
  const { loading, data } = useFetch(get_random_recipes); //150 point request daily

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: BACKGROUND_COLOR, flex: 1 }}
    >
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

      <View style={{ height: height / 3 }}>
        <View
          style={{
            height: "100%",
            // marginHorizontal: 20,
            marginVertical: 10,
            borderRadius: 10,
          }}
        >
          {/**? Header App */}
          <ImageBackground
            imageStyle={{ resizeMode: "stretch" }}
            style={{ width: "100%", height: "100%" }}
            source={require("../../assets/Rectangle.png")}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flex: 1 }}>
                <View style={{ paddingLeft: 30, paddingTop: 20 }}>
                  <Text
                    style={{ fontSize: 30, color: "white", fontWeight: "bold" }}
                  >
                    Postickers
                  </Text>
                  <Text
                    style={{ fontSize: 20, color: "white", fontWeight: "bold" }}
                  >
                    (Chinese Dumplings)
                  </Text>
                  <View style={{ paddingTop: 10 }}>
                    <Text style={{ color: "white", fontSize: 10 }}>
                      A authentic potstar Dish Lorem ipsum dolor sit amet. Lorem
                      ipsum dolor sit amet.
                    </Text>
                  </View>

                  <View
                    style={{
                      paddingVertical: 15,
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "80%",
                    }}
                  >
                    <View style={{ flex: 1, flexDirection: "row" }}>
                      <MaterialCommunityIcons
                        name="chef-hat"
                        size={15}
                        color="#F3C624"
                      />
                      <Text style={{ color: "white", paddingHorizontal: 5 }}>
                        Easy
                      </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                      <MaterialIcons name="timer" size={15} color="#F3C624" />
                      <Text style={{ color: "white", paddingHorizontal: 5 }}>
                        36 min
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={{ flex: 1 }}>
                <Image source={require("../../assets/dumplings.png")} />
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>

      <View style={{ height: height / 5 - 10 }}>
        <View
          style={{
            // backgroundColor: "grey",
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

          <View style={{ marginVertical: 5 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {catArr.map((item, index) => {
                return (
                  <CategoriesScroll
                    key={item.id}
                    image={item.image}
                    name={item.name}
                  />
                );
              })}
            </ScrollView>
          </View>
        </View>
      </View>

      <View style={{ marginVertical: 20, marginHorizontal: 20 }}>
        <View>
          <Text
            style={{ fontSize: 25, color: TITLE_COLOR, fontWeight: "bold" }}
          >
            Popular recipes
          </Text>
        </View>
        <View>
          <ScrollView>
            {popularArr.map((item, index) => {
              return (
                <PopularRecipeScroll
                  time={item.time}
                  level={item.level}
                  key={item.id}
                  name={item.name}
                  image={item.image}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

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
    </View>
  );
};
