import styled from "styled-components/native";
import { Card, Text } from "react-native-paper";

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const Title = styled.Text`
  flex-direction: row;
  align-items: center;
`;

export const ProductCardLayout = styled(Card)`
  margin-bottom: 10px;
  background-color: "#175851";
`;
