import React from "react";
import { StyleSheet } from "react-native";
//import { styles } from "./ProductCard.styles";
import {
  Card,
  Text,
  Content,
  Paragraph,
  Avatar,
  IconButton,
} from "react-native-paper";

import { Rating, AirbnbRating } from "react-native-ratings";

import {
  //ProductCard,
  Title,
  //Rating,
} from "./ProductCard.styles";

export const ProductDetailCard = ({ product = {} }) => {
  const {
    id = "0",
    name = "Product Name",
    type = "video",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = "https://via.placeholder.com/500",
    price = "$100",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus mi eget bibendum facilisis. In interdum felis eget est bibendum.",
    rating = 4,
    isOutofSctock = false,
  } = product;

  console.log("Photo is" + product.photos);

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Title
        title={name}
        titleStyle={{ color: "#fff" }}
        subtitle={type}
        subtitleStyle={{ color: "#fff", marginTop: -10 }}
        left={(props) => <Avatar.Icon {...props} icon={icon} />}
        // right={(props) => (
        //   <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
        // )}
        right={(props) => (
          <Text style={{ color: "#ffffff", fontSize: 24, paddingRight: 20 }}>
            {price}
          </Text>
        )}
      />
      <Card.Cover
        key={id}
        resizeMode="contain"
        style={styles.cover}
        source={photos}
      ></Card.Cover>
      <Card.Content>
        <Title style={styles.title}>Description</Title>
        <Paragraph style={styles.description}>{description}</Paragraph>
        <Rating
          tintColor="#175851"
          imageSize={30}
          readonly={true}
          startingValue={rating}
        />
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#175851",
    marginBottom: 5,
    borderRadius: 5,
    //borderColor: "#000000",
    //borderWidth: 1,
    //: "#FFF056",
  },
  cover: {
    padding: 0,
    backgroundColor: "#175851",
  },
  title: { padding: 0, fontSize: 16, color: "#FFFFFF" },

  description: {
    fontSize: 12,
    color: "#FFFFFF",
  },
});
