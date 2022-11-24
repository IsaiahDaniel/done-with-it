import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import { COLORS, images } from '../constants';

import { listing } from '../data/Listing';

export default function ListingScreen() {
  return (
    <View style={{ backgroundColor: COLORS.lightGrey }}>
      <View style={{ paddingLeft: 10, paddingRight: 10 }}>
        <FlatList
          data={listing}
          keyExtractor={item => item._id}
          renderItem={({ item }) => (
              <Card
                  title={item.title}
                  subTitle={`$${item.price}`}
                  image={item.image}
              />
          )}
        />
        <Input />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})