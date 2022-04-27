import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { ProductCard } from "../components/products/components/ProductCard.Component";
import { ProductsContext } from "../Services/Product/product.context";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const ProductView = ({ navigation }) => {
  const { isLoading, isError, products } = useContext(ProductsContext);
  return (
    <>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <FlatList
        data={products}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ProductDetail", { product: item })
              }
            >
              <ProductCard product={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 8 }}
        //extraData={selectedId}
      />
    </>
  );
};
