import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { Formik } from "formik";
import Global from "../styles/global";
import * as yup from "yup";

const ReviewSchema = yup.object({
   title: yup.string().required().min(4),
   body: yup.string().required().min(8),
   author: yup.string().required().min(8),
   rating: yup
      .string()
      .required()
      .test("is-num-1-5", "Rating must be a number between 1 and 5", (val) => {
         return parseInt(val) < 6 && parseInt(val) > 0;
      }),
});

const Forms = ({ addReview }) => {
   return (
      <View style={Global.container}>
         <Formik
            validationSchema={ReviewSchema}
            initialValues={{ title: "", body: "", rating: "", author: "" }}
            onSubmit={(values) => {
               addReview(values);
            }}
         >
            {(props) => (
               <View>
                  <TextInput
                     style={Global.input}
                     placeholder="Enter Title of Review"
                     onChangeText={props.handleChange("title")}
                     value={props.values.title}
                  />
                  <Text style={styles.red}>{props.errors.title}</Text>
                  <TextInput
                     multiline
                     style={Global.input}
                     placeholder="Enter Review"
                     onChangeText={props.handleChange("body")}
                     value={props.values.body}
                  />
                  <Text style={styles.red}>{props.errors.body}</Text>

                  <TextInput
                     style={Global.input}
                     placeholder="Enter 1-5"
                     onChangeText={props.handleChange("rating")}
                     value={props.values.rating}
                     keyboardType="numeric"
                  />
                  <Text style={styles.red}>{props.errors.rating}</Text>

                  <TextInput
                     style={Global.input}
                     placeholder="Enter author"
                     onChangeText={props.handleChange("author")}
                     value={props.values.author}
                  />
                  <Text style={styles.red}>{props.errors.author}</Text>

                  <Button
                     title="submit"
                     onPress={props.handleSubmit}
                     color={"#6a4b98"}
                  />
               </View>
            )}
         </Formik>
      </View>
   );
};

const styles = StyleSheet.create({
   red: {
      color: "red",
      textAlign: "center",
   },
});
export default Forms;
