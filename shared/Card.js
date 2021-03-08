import React from "react";
import { ScrollView, Text, StyleSheet, ImageBackground } from "react-native";

const Card = (props) => {
   return (
      <ImageBackground
         source={require("../assets/Group 1bk-art.png")}
         style={styles.card}
      >
         <ScrollView style={styles.cardContent}>{props.children}</ScrollView>
      </ImageBackground>
   );
};

const styles = StyleSheet.create({
   card: {
      backgroundColor: "pink",
      marginVertical: 20,
      borderRadius: 7,
      elevation: 9,
      width: "100%",
      marginRight: "auto",
      marginLeft: "auto",
   },
   cardn: {
      backgroundColor: "pink",
      marginVertical: 20,
      borderRadius: 7,
      elevation: 9,
      width: "90%",
      marginRight: "auto",
      marginLeft: "auto",
   },
   cardContent: {
      backgroundColor: "#6a4b98",
      padding: 10,
      borderRadius: 9,
      fontSize: 10,
      color: "white",
      elevation: 8,
   },
});

export default Card;
