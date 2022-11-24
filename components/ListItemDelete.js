import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { COLORS } from "../constants";

import { EvilIcons } from '@expo/vector-icons';

export default function ListItemDelete({ onPress }) {
    // console.log("Onpress", onPress())
  return (
    <Pressable onPress={onPress} style={{ backgroundColor: COLORS.danger, width: 70, alignItems: "center", justifyContent: "center" }}>
        <EvilIcons name="trash" size={34} color="white" />
    </Pressable>
  );
}