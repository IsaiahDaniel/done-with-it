import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Switch, Text, View } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import ProductViewScreen from "./screens/ProductViewScreen";
import ListingDetails from "./screens/ListingDetails";
import Card from "./components/Card";
import { COLORS, images } from "./constants";
import Messages from "./screens/Messages";
import Icon from "./components/Icon";
import ListItem from "./components/ListItem";
import AccountScreen from "./screens/AccountScreen";
import ListingScreen from "./screens/ListingScreen";
import TextInput from "./components/Input";
import Input from "./components/Input";
import { useState } from "react";
import CustomPicker from "./components/CustomPicker";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  const [category, setCategory] = useState();

  return (
    <SafeAreaView style={styles.container}>
      {/* <WelcomeScreen /> */}
      {/* <ProductViewScreen /> */}
      {/* <ListingDetails /> */}
      {/* <Card 
        title="Red Jacket For sale"
        subTitle="$100"
        image={images.Jacket}
      />
    <Card 
        title="Red Jacket For sale"
        subTitle="$100"
        image={images.Couch}
      /> */}
      {/* <Messages /> */}
      {/* <Icon name="email" size={50} backgroundColor="red" iconColor="white" /> */}
      {/* <ListItem title="My Title" Iconcomponent={<Icon name="email"  />} /> */}
      {/* <AccountScreen /> */}
      {/* <ListingScreen /> */}
      {/* <Input icon="email" placeholder="Email" />
      <Input icon="email" placeholder="username" /> */}
      {/* <CustomPicker
        icon="apps"
        placeholder="Category"
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
      /> */}
      <LoginScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // backgroundColor: COLORS.lightGrey,
    padding: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
