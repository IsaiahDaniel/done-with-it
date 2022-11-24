import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { images } from "../constants";
import Input from "../components/Input";
import Button from "../components/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../components/ErrorMessage";

export default function LoginScreen() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });

  return (
    <View style={{ marginTop: 20, padding: 10 }}>
      <Image
        source={images.Logo}
        resizeMode="cover"
        style={{ width: 70, height: 70, alignSelf: "center", marginBottom: 20 }}
      />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            {/* {console.log("args", args)} */}
            {/* {console.log("errors", errors)} */}
            <Input
              title="Login"
              placeholder="Enter email"
              icon="email"
              onBlur={() => setFieldTouched("email")}
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={handleChange("email")}
            />
            {/* <ErrorMessage>{errors.email && errors.email}</ErrorMessage> */}
            {touched.email && <Text style={{ color: "red", marginBottom: 10  }}>{errors.email && errors.email}</Text> }
            <Input
              title="Login"
              placeholder="Enter Password"
              icon="lock"
              onBlur={() => setFieldTouched("password")}
              keyboardType="email-address"
              secureTextEntry
              onChangeText={handleChange("password")}
            />
            {/* <ErrorMessage>{errors.password && errors.password}</ErrorMessage> */}
            {touched.password && <Text style={{ color: "red", marginBottom: 10  }}>{errors.password && errors.password}</Text>}
            <Button title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </View>
  );
}
