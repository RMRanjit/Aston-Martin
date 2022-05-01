import React, { useContext } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { ProductDetailCard } from "../components/products/components/ProductDetail.Component";

export const ProductDetailView = ({ navigation, route }) => {
  const { product } = route.params;

  return (
    <>
      <ProductDetailCard product={product} />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Button
          mode="contained"
          //labelStyle={{ fontSize: 18 }}
          color="#FFF056"
          contentStyle={{ height: 44 }}
          style={{
            borderRadius: 10,
            width: 350,
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
          onPress={() => {
            navigation.navigate("Product");
          }}
        >
          Back to Products!
        </Button>
      </View>
    </>
  );
};
