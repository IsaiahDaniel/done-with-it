import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants';

export default function Button(props) {

    const { title, primary, secondary, onPress } = props;

    if(secondary){
        return (
            <TouchableOpacity style={{ backgroundColor: COLORS.secondary, padding: 20, borderRadius: 10, width: "100%" }} onPress={onPress}>
                <Text style={{ textAlign: "center", color: COLORS.white }}>{ title }</Text>
            </TouchableOpacity>
        )
    }

  return (
    <TouchableOpacity style={{ backgroundColor: COLORS.primary, padding: 20, borderRadius: 10, color: COLORS.white, width: "100%" }} onPress={onPress}>
      <Text style={{ color: COLORS.white, textAlign: "center" }}>{ title }</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({});