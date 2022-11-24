import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants';

export default function Card(props) {

    const { title, subTitle, image } = props;

  return (
    <View style={{ flex: 1, marginTop: 40 }}>
        <View style={{ width: SIZES.width, backgroundColor: COLORS.white, borderRadius: 15 }}>
            <Image
                source={image}
                resizeMode="cover"
                style={{ height: 200, width: "100%", overflow: "hidden", borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
            />
            <View style={{ padding: 30 }}>
                <Text style={{ fontSize: SIZES.base }}>{title}</Text>
                <Text style={{ fontSize: 18, color: COLORS.secondary, marginTop: 10 }}>{subTitle}</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({})