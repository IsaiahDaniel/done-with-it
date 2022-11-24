import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../constants';

export default function Input({ icon, ...otherProps }) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: COLORS.lightGrey, padding: 15, borderRadius: 10, marginBottom: 15 }}>
      {icon && <MaterialCommunityIcons name={icon} size={24} color={COLORS.lightGrey2} style={{ alignItems: "center", marginRight: 10 }} /> }
      <TextInput 
        {  ...otherProps }
        style={{ color: "#0c0c0c", width: "100%" }}
      />
    </View>
  )
}

const styles = StyleSheet.create({});