import { createStackNavigator } from "react-navigation-stack";
import About from "../Components/About";
import React from "react";
import Header from "../shared/header";

const screens = {
   About: {
      screen: About,
      navigationOptions: ({ navigation }) => {
         return {
            headerTitle: () => <Header navigation={navigation} title="About" />,
         };
      },
   },
};

const AboutStack = createStackNavigator(screens, {
   defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
         backgroundColor: "#6a4b98",
      },
   },
});

export default AboutStack;
