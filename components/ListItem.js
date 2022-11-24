import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableHighlight,
} from "react-native";
import { COLORS } from "../constants";
import Swipeable from "react-native-gesture-handler/Swipeable";

export default function ListItem(props) {
  const { title, subTitle, image, onPress, IconComponent, renderRightActions } = props;

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={COLORS.lightGrey}
        onPress={renderRightActions}
      >
        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 15, backgroundColor: COLORS.white }}
        >

          { IconComponent && IconComponent }

          {image && (
            <Image
              source={image}
              style={{
                width: 60,
                height: 60,
                borderRadius: 50,
              }}
            />
          )}

          <View style={{ marginLeft: 14 }}>
            <Text style={{ fontSize: 24}}>{title}</Text>
            { subTitle && (
              <Text style={{ color: COLORS.secondary, fontSize: 18 }}>
                {subTitle}
              </Text>
            ) }
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({});
