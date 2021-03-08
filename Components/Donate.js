import React from "react";
import {
   View,
   Text,
   Image,
   StyleSheet,
   Button,
   ScrollViewComponent,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
// import Card from "../shared/Card";
import Global from "../styles/global";

const Donate = ({ navigation }) => {
   return (
      <ScrollView>
         <Text style={styles.waysHeading}>Ways To Help</Text>
         <Text style={styles.textOne}>
            Everyone has the power to transform lives. Every human responds to
            love, suffering and pain. Every human occupies the ssame world.
         </Text>
         <Text style={styles.textTwo}>
            Let us recognise that we are all part of each other and raise a
            generation of women and girls who will find their spark and realise
            their full potential.
         </Text>
         <View>
            <Text style={styles.donate}>Donate For Healthcare</Text>
            {/* card starts here */}
            <View style={styles.card}>
               <Image
                  style={styles.image}
                  source={{
                     uri:
                        "https://images.unsplash.com/photo-1597926576452-0f8ad9efdae0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80",
                  }}
               />
               <View style={styles.flex}>
                  <Text style={styles.item}>Gloves & Mask</Text>
                  <Text style={styles.amount}>NGN 1,000</Text>
               </View>
               <Text style={styles.desc}>
                  Provieds protective equipment for community health workers
                  raising awareness and fighting the spread of COVID-19.
               </Text>
               <Text style={styles.now}>DONATE NOW</Text>
            </View>
            {/* card end here */}

            {/* card starts here */}
            <View style={styles.card}>
               <Image
                  style={styles.image}
                  source={{
                     uri:
                        "https://images.unsplash.com/photo-1542736667-069246bdbc6d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1351&amp;q=80",
                  }}
               />
               <View style={styles.flex}>
                  <Text style={styles.item}>Hospital Bills</Text>
                  <Text style={styles.amount}>NGN 6,000</Text>
               </View>
               <Text style={styles.desc}>
                  Six thousand naira will go a long way to help save a patient
                  in the hospital.
               </Text>
               <Text style={styles.now}>DONATE NOW</Text>
            </View>
            {/* card end here */}

            {/* Donate for education */}
            <Text style={styles.donate}>Donate For Education</Text>
            {/* card starts here */}
            <View style={styles.card}>
               <Image
                  style={styles.image}
                  source={require("../assets/tab1.jpg")}
               />
               <View style={styles.flex}>
                  <Text style={styles.item}>Renovate a School</Text>
                  <Text style={styles.amount}>NGN 3,000</Text>
               </View>
               <Text style={styles.desc}>
                  We need to train 500,000 out of school child and a little
                  token can help a lot.
               </Text>
               <Text style={styles.now}>DONATE NOW</Text>
            </View>
            {/* card end here */}

            {/* card starts here */}
            <View style={styles.card}>
               <Image
                  style={styles.image}
                  source={{
                     uri:
                        "https://images.unsplash.com/photo-1485322551133-3a4c27a9d925?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80",
                  }}
               />
               <View style={styles.flex}>
                  <Text style={styles.item}>Buy a Book</Text>
                  <Text style={styles.amount}>NGN 1,000</Text>
               </View>
               <Text style={styles.desc}>
                  Get a book with 1,000 and make a child's dream come true
               </Text>
               <Text style={styles.now}>DONATE NOW</Text>
            </View>
            <Text style={styles.donate}>Donate For Empowerment</Text>
            {/* card starts here */}
            <View style={styles.card}>
               <Image
                  style={styles.image}
                  source={{
                     uri:
                        "https://images.unsplash.com/photo-1466027397211-20d0f2449a3f?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1305&amp;q=80",
                  }}
               />
               <View style={styles.flex}>
                  <Text style={styles.item}>Sewing Machine</Text>

                  <Text style={styles.amount}>NGN 5,000</Text>
               </View>
               <Text style={styles.desc}>
                  This helps empower young people who just finished theri
                  training in getting material like a sewing machine and a shop.
               </Text>
               <Text style={styles.now}>DONATE NOW</Text>
            </View>
            {/* card end here */}

            {/* card starts here */}
            <View style={styles.card}>
               <Image
                  style={styles.image}
                  source={{
                     uri:
                        "https://images.unsplash.com/photo-1565608087341-404b25492fee?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80",
                  }}
               />
               <View style={styles.flex}>
                  <Text style={styles.item}>Catering</Text>
                  <Text style={styles.amount}>NGN 40,000</Text>
               </View>
               <Text style={styles.desc}>
                  Get a book with 1,000 and make a child's dream come true
               </Text>
               <Text style={styles.now}>DONATE NOW</Text>
            </View>
            {/* card end here */}
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
      marginTop: 10,
   },
   textOne: {
      fontSize: 16,
      fontStyle: "italic",
      width: "80%",
      marginRight: "auto",
      marginLeft: "auto",
      marginVertical: 20,
   },
   textTwo: {
      fontSize: 16,
      fontStyle: "italic",
      width: "80%",
      marginRight: "auto",
      marginLeft: "auto",
      marginVertical: 10,
   },
   donate: {
      fontSize: 33,
      fontWeight: "bold",
      color: "#694a98",
      textAlign: "center",
      marginVertical: 15,
   },
   image: {
      width: "100%",
      marginRight: "auto",
      marginLeft: "auto",
      height: 250,
   },
   card: {
      width: "85%",
      marginRight: "auto",
      marginLeft: "auto",
      backgroundColor: "#ccc",
      borderWidth: 1,
      marginBottom: 20,
   },
   flex: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      marginRight: "auto",
      marginLeft: "auto",
   },
   item: {
      color: "#694a98",
      fontSize: 22,
      marginRight: "auto",
      padding: 20,
   },
   amount: {
      paddingHorizontal: 15,
      paddingTop: 15,
      marginTop: 17,
      backgroundColor: "#694a98",
      color: "white",
      fontSize: 15,
   },
   desc: {
      width: "100%",
      marginRight: "auto",
      marginLeft: "auto",
      marginVertical: 20,
      paddingHorizontal: 15,
   },
   now: {
      textAlign: "center",
      marginVertical: 20,
      letterSpacing: 5,
      color: "#694a98",
      fontSize: 16,
   },
});

export default Donate;
