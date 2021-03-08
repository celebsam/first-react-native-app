import { createStackNavigator } from "react-navigation-stack";
import Home from "../Components/Home";
import Review from "../Components/Review";
import Header from "../shared/header";
import Donate from "../Components/Donate";
import React from "react";

const screens = {
   Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => {
         return {
            headerTitle: () => (
               <Header navigation={navigation} title="Garnet Care" />
            ),
         };
      },
   },
   Review: {
      screen: Review,
   },
   Donate: {
      screen: Donate,
   },
};

const HomeStack = createStackNavigator(screens, {
   defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
         backgroundColor: "#6a4b98",
      },
   },
});

export default HomeStack;
