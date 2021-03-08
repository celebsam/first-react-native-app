import React, { useState } from "react";
import * as Font from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import Home from "./Components/Home";
import { AppLoading } from "expo";
import About from "./Components/About";
import Navigator from "./routes/drawer";

const getFonts = () => {
   return Font.loadAsync({
      "SansitaSwashed-Bold": require("./assets/fonts/SansitaSwashed-Bold.ttf"),
      "SansitaSwashed-Regular": require("./assets/fonts/SansitaSwashed-Regular.ttf"),
   });
};

export default function App() {
   const [fontLoaded, setFontLoaded] = useState(false);

   if (fontLoaded) {
      return <Navigator />;
   } else {
      return (
         <>
            <AppLoading
               startAsync={getFonts}
               onFinish={() => setFontLoaded(true)}
            />
            <Text>This is the home page not rendering anything</Text>
         </>
      );
   }
}
