import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../constants";
import { category } from "../data/categories";
import PickerItem from "./PickerItem";

export default function CustomPicker({
  icon,
  selectedItem,
  onSelectItem,
  placeholder,
}) {
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <>
      <Pressable onPress={() => setToggleModal(true)}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: COLORS.lightGrey,
            padding: 15,
            borderRadius: 22,
          }}
        >
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={24}
              color={COLORS.lightGrey2}
              style={{ alignItems: "center", marginRight: 10 }}
            />
          )}
          <Text style={{ color: COLORS.lightGrey2, flex: 1 }}>
            {selectedItem ? selectedItem.label : placeholder}
          </Text>
          <MaterialCommunityIcons
            name="chevron-down"
            size={24}
            color={COLORS.lightGrey2}
            style={{ alignItems: "center", marginRight: 10 }}
          />
        </View>
      </Pressable>
      <Modal visible={toggleModal} animationType="slide">
        <View style={{ marginTop: 80 }}>
          <Button title="Close Modal" onPress={() => setToggleModal(false)} />
          <FlatList
            data={category}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => 
                <PickerItem 
                    label={item.label} 
                    onPress={() => {
                        setToggleModal(false);
                        onSelectItem(item)
                    }} 
                />
            }
          />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({});
