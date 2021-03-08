import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Card from "../shared/Card";
import Global from "../styles/global";
import { images } from "../styles/global";

const Review = ({ navigation }) => {
   const rating = navigation.getParam("rating");
   return (
      <View>
         <Card>
            <Text style={styles.heading}> {navigation.getParam("title")}</Text>
            <Text style={Global.font}> {navigation.getParam("body")} </Text>
            <View style={styles.rating}>
               <Text style={Global.font}>Rating:</Text>
               <Image style={styles.how} source={images.ratings[rating]} />
            </View>
            <Text style={Global.author}>
               By {navigation.getParam("author")}
            </Text>
         </Card>
      </View>
   );
};

const styles = StyleSheet.create({
   rating: {
      flexDirection: "row",
      justifyContent: "center",
      marginBottom: 15,
      paddingTop: 16,
   },
   heading: {
      fontFamily: "SansitaSwashed-Bold",
      marginVertical: 15,
      fontSize: 25,
      color: "white",
   },
   how: {
      marginTop: 3,
      marginLeft: 8,
   },
});

export default Review;
