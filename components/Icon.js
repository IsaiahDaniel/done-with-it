import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Icon({ name, size, backgroundColor, iconColor }) {
  return (
    <View style={{ width: size, height: size, borderRadius: size / 2, backgroundColor, justifyContent: "center", alignItems: "center" }}>
      <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor} />
    </View>
  )
}

Icon.defaultProps = {
    size: 40,
    backgroundColor: "#000",
    iconColor: "#fff"
}

const styles = StyleSheet.create({})