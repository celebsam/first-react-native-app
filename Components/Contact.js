import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import Global from "../styles/global";

const Contact = () => {
   return (
      <ScrollView>
         <Text style={styles.waysHeading}>Contact Us</Text>
         <Text style={styles.underline}>+234 808 251 6713</Text>
         <Text style={styles.underline}> admin@garnetcarefoundation.org</Text>
         <Text style={styles.woji}>
            100 Woji Road, GRA Phae II, 500271 Port Harcourt, Rivers State
         </Text>
         <Text style={styles.help}>You Can Help</Text>
         <View>
            <View style={styles.card}>
               <Image
                  style={styles.headerImageOne}
                  source={require("../assets/tab1.jpg")}
               />
               <Text style={styles.donations}>Donations</Text>
               <Text style={styles.donOne}>Telephone: 08082516713</Text>
               <Text style={styles.donTwo}>
                  Email: admin@argetcarefoundation.org
               </Text>
            </View>
            <View style={styles.card}>
               <Image
                  style={styles.headerImageOne}
                  source={require("../assets/tab2.jpg")}
               />
               <Text style={styles.donations}>Media & Marketing</Text>
               <Text style={styles.donOne}>Telephone: 08082516713</Text>
               <Text style={styles.donTwo}>
                  Email: admin@argetcarefoundation.org
               </Text>
            </View>
            <View style={styles.card}>
               <Image
                  style={styles.headerImageOne}
                  source={require("../assets/tab3.jpg")}
               />
               <Text style={styles.donations}>Career & Volunteers</Text>
               <Text style={styles.donOne}>Telephone: 08082516713</Text>
               <Text style={styles.donTwo}>
                  Email: admin@argetcarefoundation.org
               </Text>
            </View>
         </View>
         <View>
            <Text style={styles.direction}>Directions</Text>
            <View style={styles.fromm}>
               <Text style={styles.road}>From Aba Road</Text>
               <Text style={styles.drive}>
                  Drive into G.R.A, through G.R.A junction, turn right towards
                  Jeveniks Restaurant, turn left and drive few KM straight. The
                  office is beside NDIC building.
               </Text>
            </View>
            <View style={styles.fromm}>
               <Text style={styles.road}>From Abacha Road</Text>
               <Text style={styles.drive}>
                  Go towards cheers bar into Woji road, look out for NDIC
                  building, the office is beside it.
               </Text>
            </View>
            <View style={styles.fromm}>
               <Text style={styles.road}>Working Hours</Text>
               <Text style={styles.driver}>Mon - Fri 8:00am - 5:00pm</Text>
               <Text style={styles.drive}>Sat 9:00am - 1:00pm</Text>
            </View>
         </View>
      </ScrollView>
   );
};

const styles = StyleSheet.create({
   waysHeading: {
      fontSize: 40,
      fontWeight: "bold",
      color: "#694a98",
      borderLeftWidth: 4,
      width: "80%",
      marginRight: "auto",
      marginLeft: "auto",
      paddingHorizontal: 20,
      marginTop: 20,
      marginBottom: 25,
   },
   underline: {
      color: "black",
      textDecorationLine: "underline",
      textDecorationColor: "#694a98",
      marginVertical: 10,
      fontSize: 20,
      marginLeft: 15,
      fontWeight: "bold",
      width: "80%",
      marginRight: "auto",
      marginLeft: "auto",
   },
   woji: {
      fontSize: 23,
      marginTop: 10,
      width: "80%",
      marginRight: "auto",
      marginLeft: "auto",
   },
   help: {
      marginVertical: 10,
      padding: 15,
      backgroundColor: "#694a98",
      textAlign: "center",
      fontSize: 26,
      fontWeight: "bold",
      color: "white",
   },
   headerImageOne: {
      width: "100%",
      height: 200,
      marginRight: "auto",
      marginLeft: "auto",
   },
   donations: {
      fontSize: 24,
      color: "#694a98",
      textAlign: "center",
      fontWeight: "bold",
      marginTop: 15,
   },
   card: {
      width: "80%",
      marginRight: "auto",
      marginLeft: "auto",
      shadowOffset: { width: 10, height: 10 },
      shadowColor: "black",
      borderWidth: 1,
      borderRadius: 5,
      backgroundColor: "#ccc",
      marginVertical: 10,
   },
   donOne: {
      color: "black",
      textAlign: "center",
      fontSize: 16,
      fontWeight: "bold",
      paddingVertical: 20,
   },
   donTwo: {
      color: "black",
      textAlign: "center",
      fontSize: 16,
      fontWeight: "bold",
      paddingBottom: 20,
   },
   direction: {
      color: "#694a98",
      fontWeight: "bold",
      fontSize: 27,
      textAlign: "center",
      textTransform: "uppercase",
      marginTop: 33,
   },
   road: {
      fontSize: 19,
      fontWeight: "bold",
      marginVertical: 14,
   },
   fromm: {
      width: "80%",
      marginLeft: "auto",
      marginRight: "auto",
   },
   drive: {
      fontSize: 16,
      marginBottom: 20,
   },
   driver: {
      fontSize: 16,
      marginBottom: 10,
   },
});

export default Contact;
