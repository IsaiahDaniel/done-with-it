import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

export default function ListSeperator() {
  return (
    <View style={{ borderWidth: 1, borderColor: COLORS.lightGrey }} />
  )
}

const styles = StyleSheet.create({})