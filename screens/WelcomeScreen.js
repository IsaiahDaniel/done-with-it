import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import Button from "../components/Button";
import { images, SIZES } from "../constants";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={images.Background}
      style={{
        height: "100%",
        justifyContent: "space-between",
      }}
      resizeMode="cover"
      blurRadius={10}
    >
      <View style={{ alignItems: "center" }}>
        <Image
          source={images.Logo}
          style={{
            height: 100,
            width: 100,
            marginTop: 100,
          }}
          resizeMode="cover"
        />
        <Text
          style={{ fontWeight: "600", fontSize: SIZES.base, marginTop: 20 }}
        >
          Sell What you Don't Need
        </Text>
      </View>


      <View style={{ padding: 20 }}>
        <Button title="Login" />
        <View style={{ marginTop: 20 }} />
        <Button title="Register" secondary />
      </View>
    </ImageBackground>
  );
}
