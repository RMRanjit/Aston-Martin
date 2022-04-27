import { useEffect, useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Text, Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

//TODO: Externalize Styles

export function ConfigurationConfirmation({ navigation, route }) {
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("Test", route.params);
    } catch (e) {
      // saving error
    }
  };

  useEffect(() => {
    //storeData();
  }, [route.params]);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#175851",
      }}
    >
      <Image
        source={require("../../../../assets/App.png")}
        style={{ width: 150, height: 150, resizeMode: "cover" }}
      />
      <Text
        style={{
          color: "#FFF056",
          fontFamily: "Optima",
          fontSize: 14,
        }}
      >
        Saving Configuration for {route.params.driver}
      </Text>

      {/* <TouchableOpacity
        onPress={() => {
          navigation.navigate("Configuration", { user: "hello" });
          //Alert.prompt("Nft Saved!");
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#FFF056",
            fontFamily: "Optima",
            fontSize: 20,
            width: 375,
            height: 10,

            borderColor: "#FFF056",
            borderStyle: "solid",
            borderWidth: 0.5,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center", //Centered vertically
            flex: 0.5,
          }}
        >
          Lets Race!
        </Text>
      </TouchableOpacity> */}

      <Button
        mode="contained"
        //labelStyle={{ fontSize: 18 }}
        color="#FFF056"
        contentStyle={{ height: 44 }}
        style={{ borderRadius: 10, width: 320, marginTop: 100 }}
        onPress={() => {
          navigation.navigate("Configuration");
        }}
      >
        Lets Race!
      </Button>
    </View>
  );
}
