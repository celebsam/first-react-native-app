import { createStackNavigator } from "react-navigation-stack";
import Contact from "../Components/Contact";
import React from "react";
import Header from "../shared/header";

const screens = {
   Contact: {
      screen: Contact,
      navigationOptions: ({ navigation }) => {
         return {
            headerTitle: () => (
               <Header navigation={navigation} title="Contact" />
            ),
         };
      },
   },
};

const ContactStack = createStackNavigator(screens, {
   defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
         backgroundColor: "#6a4b98",
      },
   },
});

export default ContactStack;
