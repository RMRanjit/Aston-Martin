import React, { useContext } from "react";
import { Text } from "react-native";
import { Button } from "react-native-paper";
import { ProductDetailCard } from "../components/products/components/ProductDetail.Component";

export const ProductDetailView = ({ navigation, route }) => {
  const { product } = route.params;
  return (
    <>
      <ProductDetailCard product={product} />
      <Button
        mode="contained"
        //labelStyle={{ fontSize: 18 }}
        color="#FFF056"
        contentStyle={{ height: 44 }}
        style={{ borderRadius: 10, width: 320 }}
        onPress={() => {
          navigation.navigate("Product", {});
        }}
      >
        Back to Products!
      </Button>
    </>
  );
};
