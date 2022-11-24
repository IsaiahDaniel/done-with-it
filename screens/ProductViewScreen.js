import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { COLORS, images } from '../constants';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function ProductViewScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.dark }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingTop: 60, padding: 40 }}>
            <EvilIcons name="close" size={34} color="white" />
            <FontAwesome5 name="trash-alt" size={24} color="white" />
        </View>
        <View style={{ marginTop: 30 }}>
          <Image
              source={images.Chair}
              style={{ height: 500, width: "100%" }}
              resizeMode="cover"
          />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({});