import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import Global from "../styles/global";

const About = () => {
   return (
      <ScrollView>
         <Text style={styles.passion}>
            We are passionate about vulnerable women and children
         </Text>
         <Text style={styles.longText}>
            We are a non-profit organisation founded to ensure every woman and
            girl has the opportunity to improve their living condition and hope
            for a better future.
         </Text>
         <View style={styles.whatWeDo}>
            <Text style={styles.passion}>What We Do</Text>
            <View>
               <Image
                  style={styles.headerImage}
                  source={require("../assets/healthcare.jpg")}
               />
               <Text style={styles.topic}>HeathCare</Text>
            </View>
            <View>
               <Image
                  style={styles.headerImage}
                  source={require("../assets/water.jpeg")}
               />
               <Text style={styles.topic}>Water</Text>
            </View>
            <View>
               <Image
                  style={styles.headerImage}
                  source={require("../assets/agroc.jpeg")}
               />
               <Text style={styles.topic}>Agriculture</Text>
            </View>
         </View>
         <View>
            <Text style={styles.mission}>Our Mission</Text>
            <Text style={styles.missionText}>
               To ensure every woman and girl makes a difference in the world.
               We are committed to unleash the potenctial of vulnerable woman
               and girls to make positive change happen.
            </Text>
         </View>
         <View>
            <Text style={styles.mission}>Our Vision</Text>
            <Text style={styles.missionText}>
               A world where every woman and girl have the opportunity to
               achieve their full potential and contribute to all aspects of
               life development.
            </Text>
         </View>
      </ScrollView>
   );
};

const styles = StyleSheet.create({
   passion: {
      color: "#684a98",
      fontSize: 30,
      textAlign: "center",
      fontWeight: "bold",
      marginVertical: 10,
      textTransform: "capitalize",
   },
   longText: {
      color: "black",
      width: "80%",
      marginRight: "auto",
      marginLeft: "auto",
      fontSize: 17,
   },
   headerImage: {
      width: "80%",
      height: 136,
      marginRight: "auto",
      marginLeft: "auto",
   },
   topic: {
      textAlign: "center",
      marginTop: 8,
      marginBottom: 36,
      fontSize: 18,
   },
   mission: {
      fontSize: 22,
      color: "#684a98",
      textAlign: "center",
      fontWeight: "bold",
   },
   missionText: {
      width: "80%",
      marginRight: "auto",
      marginLeft: "auto",
      marginBottom: 30,
      fontSize: 16,
   },
});

export default About;
