import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES, images } from "../constants";
import ListItem from "../components/ListItem";

export default function ListingDetails(props) {
  const { title, subTitle } = props;

  return (
    <View>
      <Image
            source={images.Jacket}
            style={{ height: 300, width: SIZES.width }}
            resizeMode="cover"
        />
      <View style={{ padding: 25 }}>
        <Text style={{ fontSize: SIZES.base }}>Red Jacket For Sale</Text>
        <Text style={{ color: COLORS.secondary, fontSize: 18, marginTop: 10 }}>$100</Text>

        <View style={{ marginTop: 20 }}> 
          <ListItem title="Mosh Hamedani" subTitle="5 Listings" image={images.Mosh} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
