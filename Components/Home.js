import React, { useState } from "react";
import {
   View,
   Text,
   StyleSheet,
   Button,
   TouchableOpacity,
   FlatList,
   Modal,
   Keyboard,
   TouchableWithoutFeedback,
   ScrollView,
   Image,
} from "react-native";
import Card from "../shared/Card";
import Global from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import Forms from "./Forms";

const Home = ({ navigation }) => {
   const [modalOpen, setModalOpen] = useState(false);
   const [reviews, setReviews] = useState([
      {
         key: 1,
         title: "The Importance of Education",
         rating: 3,
         body:
            "Education is an important issue in one’s life. It is the key to success in the future, and tohave many opportunities in our life. Education has many advantages for people. For instance, itilluminates  a  person's mind  and  thinking. It helps  students to plan  for work, or   pursue highereducation by  graduating from university. Having education  in an area helps people think, feel,and behave in  a   way   that   contributes   to their success, and improves not only their  personalsatisfaction   but   also   their   community.  In   addition,   education   develops   human   personality,thoughts, and social skills. It also prepares people for life experiences. It makes people have aspecial status in their own society and everywhere they live. I believe that everyone is entitled tohave education ‘’from cradle to grave’’.  There are various benefits of having education, such ashaving a good career, having a good status in society, and having self-confidence.",
         author: "John Doe",
      },
      {
         key: 2,
         title: "Why you should give",
         rating: 4,
         body:
            "A 2008 study by Harvard Business School professor Michael Norton and colleagues found that giving money to someone else lifted participants’ happiness more that spending it on themselves (despite participants’ prediction that spending on themselves would make them happier). Happiness expert Sonja Lyubomirsky, a professor of psychology at the University of California, Riverside, saw similar results when she asked people to perform five acts of kindness each week for six weeks.These good feelings are reflected in our biology. In a 2006 study, Jorge Moll and colleagues at the National Institutes of Health found that when people give to charities, it activates regions of the brain associated with pleasure, social connection, and trust, creating a “warm glow” effect. Scientists also believe that altruistic behavior releases endorphins in the brain, producing the positive feeling known as the “helper’s high.",
         author: "Sandra Johnson",
      },
      {
         key: 3,
         title: "Why Charity is important",
         rating: 4,
         body:
            "Charity is the act of extending love and kindness to others unconditionally, which is a conscious act but the decision is made by the heart, , without expecting a reward. When Charity is carried out selflessly, it is a one-way act where a person gives but asks for nothing in return. It is due to this act of nature that makes it precious and soulful. There are people who believe charity should begin at home but others believe it should originate from the heart. However, charity originates from the heart as you feel the urge of giving, begins from home, ultimately extending to others in the society. Charity is essential and therefore meant to be done for public benefit, relief and to provide assistance to people at times of need in any part of the world, especially who are the victims of war, natural disaster, catastrophe, hunger, disease, poverty, orphans by supplying them with food, shelter, medical aid and other fundamental needs..",
         author: "Dale Carnegie",
      },
   ]);

   const addReview = (review) => {
      review.key = Math.random().toString();
      setReviews((currentReview) => {
         return [review, ...currentReview];
      });
      setModalOpen(false);
   };
   return (
      <ScrollView style={Global.container}>
         <View>
            <View>
               <Text style={styles.help}>
                  What if this was your child? Will you HELP?
               </Text>
               <Image
                  style={styles.headerImageOne}
                  source={require("../assets/homepage-sctn-bw.png")}
               />
            </View>
            <View>
               <Image
                  style={styles.headerImageTwo}
                  source={require("../assets/Section2_img-new.png")}
               />
               <Text style={styles.help}>
                  We are haunted by our history because we don't Talk about it{" "}
               </Text>
            </View>
            <View>
               <Text style={styles.what}>What We Do</Text>
               <View style={styles.weDoCard}>
                  <Text style={styles.weDoheading}>Education</Text>
                  <Text style={styles.weDoText}>
                     Education is the movement from darkness to light. By
                     providing educational opportunities to children we work
                     against the efforts to indoctrinate them into violence and
                     destructive paths.
                  </Text>
                  <Image
                     style={styles.headerImage}
                     source={require("../assets/tab1.jpg")}
                  />
               </View>
               <View style={styles.weDoCard}>
                  <Text style={styles.weDoheading}>Disaster Intervention</Text>
                  <Text style={styles.weDoText}>
                     Ever imagined a world without water? Yet this is the
                     reality for many, especially in the rural areas. How can
                     you help to solve this problem?
                  </Text>
                  <Image
                     style={styles.headerImage}
                     source={require("../assets/tab2.jpg")}
                  />
               </View>
               <View style={styles.weDoCard}>
                  <Text style={styles.weDoheading}>Healthcare</Text>
                  <Text style={styles.weDoText}>
                     In the slums of the Niger delta, Nigerian people live in
                     crushing poverty, suffering from overcrowded, unsanitary
                     conditions.
                  </Text>
                  <Image
                     style={styles.headerImage}
                     source={require("../assets/tab3.jpg")}
                  />
               </View>
               <View style={styles.weDoCard}>
                  <Text style={styles.weDoheading}>Gender Equality</Text>
                  <Text style={styles.weDoText}>
                     The emancipation of woman will only be possible when a
                     woman can take part in production on a large, social scale,
                     and domestic work no longer claims anything but an
                     insignificant amount of her time
                  </Text>
                  <Image
                     style={styles.headerImage}
                     source={require("../assets/tab4.jpg")}
                  />
               </View>
            </View>
            <View style={styles.blue}>
               <Text style={styles.textOne}>
                  With good health and education anything is possible
               </Text>
               <Text style={styles.textTwo}>
                  With you on our side, we will build happier and healthier
                  children in Africa.
               </Text>
               <Text style={styles.textTwo}>
                  Your donation fuels our ability
               </Text>
               <View style={styles.donate}>
                  <Button
                     title="Donate Now"
                     color={"#694a98"}
                     onPress={() => navigation.navigate("Donate")}
                  />
               </View>
            </View>
         </View>
         <Modal visible={modalOpen} animationType="slide">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
               <View style={styles.modalContent}>
                  <MaterialIcons
                     style={styles.open}
                     name="close"
                     size={24}
                     onPress={() => setModalOpen(false)}
                  />
                  <Forms addReview={addReview} />
               </View>
            </TouchableWithoutFeedback>
         </Modal>
         <Text style={styles.article}>Articles</Text>
         <FlatList
            data={reviews}
            renderItem={({ item }) => (
               <TouchableOpacity
                  onPress={() => navigation.navigate("Review", item)}
               >
                  <Card>
                     <Text style={Global.paragraph}>{item.title}</Text>
                  </Card>
                  {/* <Text style={Global.paragraph}>{item.body}</Text> */}
               </TouchableOpacity>
            )}
         />
         <TouchableOpacity>
            <MaterialIcons
               style={styles.open}
               name="add"
               size={24}
               onPress={() => setModalOpen(true)}
            />
         </TouchableOpacity>
      </ScrollView>
   );
};

const styles = StyleSheet.create({
   open: {
      marginTop: 10,
      marginBottom: 50,
      borderWidth: 1,
      borderColor: "#6a4b98",
      marginLeft: "auto",
      marginRight: "auto",
      padding: 10,
   },
   modalContent: {
      flex: 1,
   },
   headerImageOne: {
      width: "80%",
      marginRight: "auto",
      marginLeft: 40,
      height: 410,
      marginRight: 8,
      marginBottom: 75,
   },
   headerImageTwo: {
      width: "80%",
      marginRight: "auto",
      marginLeft: 40,
      height: 400,
      marginRight: 8,
      marginBottom: 25,
   },
   help: {
      fontSize: 35,
      color: "#684a98",
      fontWeight: "bold",
      marginBottom: 16,
      textAlign: "center",
      textTransform: "capitalize",
   },
   what: {
      textAlign: "center",
      color: "#684a98",
      fontWeight: "bold",
      fontSize: 35,
      marginTop: 20,
   },
   weDoCard: {
      width: "90%",
      marginRight: "auto",
      marginLeft: "auto",
   },
   weDoheading: {
      fontSize: 20,
      color: "#684a98",
      marginBottom: 10,
   },
   weDoText: {
      fontSize: 16,
   },
   headerImage: {
      width: "100%",
      height: 300,
      marginTop: 10,
      marginBottom: 50,
   },
   blue: {
      backgroundColor: "#1b95c8",
      width: "90%",
      marginRight: "auto",
      marginLeft: "auto",
      height: 400,
   },
   textOne: {
      fontSize: 30,
      paddingVertical: 40,
      textAlign: "center",
      color: "white",
      fontWeight: "bold",
   },
   textTwo: {
      width: "80%",
      fontSize: 18,
      marginRight: "auto",
      marginLeft: "auto",
      color: "white",
      paddingVertical: 10,
   },
   donate: {
      width: "50%",
      marginRight: "auto",
      marginLeft: "auto",
      marginTop: 10,
      elevation: 15,
   },
   article: {
      fontSize: 27,
      color: "#694a98",
      textAlign: "center",
      fontWeight: "bold",
      marginTop: 35,
      marginBottom: 1,
   },
});

export default Home;
