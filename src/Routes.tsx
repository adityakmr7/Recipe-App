import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { HomeScreen } from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
interface RoutesProps {}

{
  /* <Ionicons name="ios-heart" size={24} color="black" /> */
}

export const Routes: React.FC<RoutesProps> = ({}) => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            elevation: 0,
            backgroundColor: "#F4FCFF",
          },
          animationEnabled: true,
          headerRight: () => {
            return (
              <View style={{ flexDirection: "row", paddingRight: 10 }}>
                <View style={{ paddingHorizontal: 5 }}>
                  <Feather name="search" size={24} color="black" />
                </View>
                <View style={{ paddingHorizontal: 5 }}>
                  <Ionicons name="ios-heart-empty" size={24} color="black" />
                </View>
              </View>
            );
          },
          headerLeft: () => {
            return (
              <View style={{ paddingLeft: 10 }}>
                <AntDesign name="menuunfold" size={24} color="black" />
              </View>
            );
          },
        }}
      >
        <Stack.Screen
          options={{ headerTitle: "" }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name={"Detail"}
          options={{ header: () => null }}
          component={DetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
