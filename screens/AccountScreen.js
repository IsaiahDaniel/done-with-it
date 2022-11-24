import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ListItem from '../components/ListItem';
import { COLORS, images } from '../constants';
import Icon from '../components/Icon';

import { Account } from '../data/Account';
import ListSeperator from '../components/ListSeperator';


// format-list-bulleted
// primary

// email
// secondary

export default function AccountScreen() {
  return (
    <View style={{ backgroundColor: COLORS.lightGrey, flex: 1 }}>
      <ListItem 
        title="Mosh Hamedani" 
        subTitle="programmingwithmosh@gmail.com" 
        image={images.Mosh}
      />
    
    <View style={{ marginTop: 50 }} />

    <View>
        <FlatList
            data={Account}
            keyExtractor={item => item._id}
            renderItem={({ item }) => (
                <ListItem 
                    IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} /> } 
                    title={item.title}
                />
            )}
            ItemSeparatorComponent={() => <ListSeperator />}
        />

        <View style={{ marginTop: 30 }} />

        <ListItem 
            title="Logout"
            IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        />
    </View>



    </View>
  )
}

const styles = StyleSheet.create({})