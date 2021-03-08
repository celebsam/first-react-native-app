import { StyleSheet } from "react-native";

const Global = StyleSheet.create({
   container: {
      padding: 24,
      flex: 1,
   },
   font: {
      fontSize: 17,
      color: "white",
   },
   author: {
      fontSize: 15,
      textAlign: "right",
      color: "white",
   },
   paragraph: {
      marginVertical: 20,
      lineHeight: 20,
      color: "white",
      fontSize: 23,
      padding: 6,
   },
   input: {
      borderWidth: 1,
      borderColor: "#6a4b98",
      padding: 10,
      fontSize: 20,
      borderRadius: 6,
      marginVertical: 5,
   },
});

export const images = {
   ratings: {
      1: require("../assets/rating-1.png"),
      2: require("../assets/rating-2.png"),
      3: require("../assets/rating-3.png"),
      4: require("../assets/rating-4.png"),
      5: require("../assets/rating-5.png"),
   },
};

export default Global;
