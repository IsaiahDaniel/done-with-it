import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDelete from "../components/ListItemDelete";
import ListSeperator from "../components/ListSeperator";
import { COLORS, images } from "../constants";
import { messages } from "../data/Messages";

export default function Messages() {
  const [message, setMessage] = useState(messages);
  const [refreshing, setRefreshing] = useState(false);

  const onDeleteMessageHandler = (id) => {
    const newMessage = message.filter((m) => m._id !== id);
    console.log("new Message", newMessage);
    setMessage(newMessage);
  };

  return (
    <FlatList
      data={message}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subTitle={item.description}
          image={item.image}
          renderRightActions={() => (
            <ListItemDelete onPress={() => onDeleteMessageHandler(item._id)} />
          )}
        />
      )}
      ItemSeparatorComponent={() => (
        <View style={{ borderWidth: 1, borderColor: COLORS.lightGrey }} />
      )}
      refreshing={refreshing}
      onRefresh={() => {
        setMessage([
          {
            _id: 2,
            title: "Red Jacket for Sale",
            description: "lorem ipsum dolor sit amet",
            image: images.Couch,
          },
        ]);
      }}
    />
  );
}

const styles = StyleSheet.create({});
