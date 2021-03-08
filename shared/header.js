import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const header = ({ navigation, title }) => {
   const hamHandler = () => {
      navigation.openDrawer();
   };
   return (
      <ImageBackground
         source={require("../assets/Group 1bk-art.png")}
         style={styles.header}
      >
         <MaterialIcons
            name="menu"
            size={28}
            onPress={hamHandler}
            style={styles.icon}
         />
         <View style={styles.headerContainer}>
            <Image
               style={styles.headerImage}
               source={require("../assets/GCF-LOGO-NW-300x158.png")}
            />
            <Text style={styles.headerText}>{title}</Text>
         </View>
      </ImageBackground>
   );
};

const styles = StyleSheet.create({
   header: {
      width: "100%",
      height: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
   },
   headerText: {
      fontWeight: "bold",
      fontSize: 20,
      color: "white",
      letterSpacing: 1,
   },
   icon: {
      position: "absolute",
      left: 5,
   },
   headerImage: {
      width: 49,
      height: 36,
      marginRight: 8,
   },
   headerContainer: {
      flexDirection: "row",
   },
});

export default header;
