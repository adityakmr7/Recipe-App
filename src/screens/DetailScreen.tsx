import React, { useContext } from "react";
import { View, Text, ImageBackground, Image, StatusBar } from "react-native";
import Center from "../components/Center";
import { Ionicons } from "@expo/vector-icons";
import { height } from "../constants/windowSize";
import SubTitle from "../components/SubTitle";
import { IconComponent } from "../components/IconComponent";
import CategoriesScroll from "../components/CategoriesScroll";
import { AppContext } from "../context/AppProvider";
import { ScrollView } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import PopularRecipeScroll from "../components/PopularRecipeScroll";
interface DetailScreenProps {
  navigation: StackNavigationProp<DetailScreenParam, "Detail">;
  route: RouteProp<DetailScreenParam, "Detail">;
}

type DetailScreenParam = {
  Home: undefined;
  Detail: undefined;
};

const DetailScreen: React.FC<DetailScreenProps> = ({ navigation, route }) => {
  const data = useContext(AppContext);

  return (
    <ScrollView>
      <StatusBar backgroundColor={"black"} />
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={{ width: "100%", height: height / 2 + 50 }}
          imageStyle={{ resizeMode: "stretch" }}
          source={require("../../assets/d-rectangle.png")}
        >
          <View
            style={{
              marginTop: height / 20 - 20,
              height: "100%",
              flexDirection: "column",
            }}
          >
            <View style={{ paddingLeft: 20 }}>
              <Ionicons
                onPress={() => navigation.goBack()}
                name="ios-arrow-round-back"
                size={40}
                color="grey"
              />
            </View>

            <View
              style={{
                paddingTop: 50,
                paddingLeft: 40,
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Image source={require("../../assets/dumplings-d.png")} />
            </View>
          </View>
        </ImageBackground>
      </View>

      <View style={{ flex: 1, marginTop: -30, marginHorizontal: 4 }}>
        <SubTitle title="Posttickers(Chinese Dumpling)" />
        <View>
          <Text style={{ color: "grey", letterSpacing: 1 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            accusamus ad ipsa voluptatem veritatis distinctio possimus ullam
            dolor debitis necessitatibus?
          </Text>
        </View>
        <View>
          <IconComponent IconSpace={false} />
        </View>
        <SubTitle title={"Ingredient"} />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {data.catArr.map(
            (item: { id: number; image: any; name: string }, index: number) => {
              return (
                <CategoriesScroll
                  ingredient={true}
                  key={item.id}
                  image={item.image}
                  name={item.name}
                />
              );
            }
          )}
        </ScrollView>
        <SubTitle title={"Recipe"} />
        <View style={{ marginHorizontal: 10 }}>
          <ScrollView>
            {data.popularArr.map(
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

export default DetailScreen;
