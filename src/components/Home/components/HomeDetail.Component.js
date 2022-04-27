import React from "react";
import { ImageBackground, View } from "react-native";
//import { styles } from "./ProductCard.styles";
import { Card, Text } from "react-native-paper";
//import { ImageBackground } from "react-native-web";

//TODO: Stylize components

export const HomeDetail = ({ product = {} }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#175851" }}>
      <ImageBackground
        style={{ width: "100%", height: "100%", flex: 1 }}
        resizeMode="contain"
        source={require("../../../../assets/App.png")}
      >
        <Text
          style={{
            color: "#FFF056",
            //fontFamily: "Helvetica Neue Light",
            fontSize: 20,
          }}
        >
          This is where the home content would show up. What do we want to show
          here?
        </Text>
      </ImageBackground>
    </View>
  );
};
