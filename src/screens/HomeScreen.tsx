import React, { useEffect, useState, useContext } from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { get_random_recipes } from "../services/api_url";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import PopularRecipeScroll from "../components/PopularRecipeScroll";
import CategoriesScroll from "../components/CategoriesScroll";
import { TITLE_COLOR, BACKGROUND_COLOR, ICON_COLOR } from "../constants/color";
import SubTitle from "../components/SubTitle";
import { height, width } from "../constants/windowSize";
import { AppContext } from "../context/AppProvider";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
interface HomeScreenProps {
  navigation: StackNavigationProp<HomeParam, "Home">;
  route: RouteProp<HomeParam, "Home">;
}
type HomeParam = {
  Home: undefined;
  Detail: undefined;
};

// const useFetch = (url: string) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   async function fetchData() {
//     const response = await fetch(url);
//     const json = await response.json();
//     setData(json);
//     setLoading(false);
//   }
//   useEffect(() => {
//     fetchData();
//   }, []);
//   return { loading, data };
// };

export const HomeScreen: React.FC<HomeScreenProps> = ({
  navigation,
  route,
}) => {
  //const { loading, data } = useFetch(get_random_recipes); //150 point request daily

  const staticData = useContext(AppContext);

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
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Detail")}
          >
            <ImageBackground
              imageStyle={{ resizeMode: "stretch" }}
              style={{ width: "100%", height: "100%" }}
              source={require("../../assets/Rectangle.png")}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flex: 1 }}>
                  <View style={{ paddingLeft: 30, paddingTop: 20 }}>
                    <Text
                      style={{
                        fontSize: 30,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      Postickers
                    </Text>
                    <Text
                      style={{
                        fontSize: 20,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      (Chinese Dumplings)
                    </Text>
                    <View style={{ paddingTop: 10 }}>
                      <Text style={{ color: "white", fontSize: 10 }}>
                        A authentic potstar Dish Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet.
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
                          color={ICON_COLOR}
                        />
                        <Text style={{ color: "white", paddingHorizontal: 5 }}>
                          Easy
                        </Text>
                      </View>
                      <View style={{ flex: 1, flexDirection: "row" }}>
                        <MaterialIcons
                          name="timer"
                          size={15}
                          color={ICON_COLOR}
                        />
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
          </TouchableWithoutFeedback>
        </View>
      </View>

      <View style={{ height: height / 5 - 10 }}>
        <View
          style={{
            height: "100%",
            marginVertical: 20,
            marginHorizontal: 20,
          }}
        >
          <SubTitle title={"Categories"} />

          <View style={{ marginVertical: 5 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {staticData.catArr.map(
                (
                  item: { id: number; image: any; name: string },
                  index: number
                ) => {
                  return (
                    <CategoriesScroll
                      ingredient={false}
                      key={item.id}
                      image={item.image}
                      name={item.name}
                    />
                  );
                }
              )}
            </ScrollView>
          </View>
        </View>
      </View>

      <View style={{ marginVertical: 20, marginHorizontal: 20 }}>
        <SubTitle title={"Popular Recipes"} />
        <View>
          <ScrollView>
            {staticData.popularArr.map(
              (
                item: {
                  time: number;
                  level: string;
                  id: number;
                  name: string;
                  image: any;
                },
                index: number
              ) => {
                return (
                  <PopularRecipeScroll
                    time={item.time}
                    level={item.level}
                    key={item.id}
                    name={item.name}
                    image={item.image}
                  />
                );
              }
            )}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};
