import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

export default function PickerItem({ label, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <Text style={{ padding: 10 }}>
        {label}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({});