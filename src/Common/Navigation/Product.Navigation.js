import {
  createNativeStackNavigator,
  TransitionPresets,
} from "@react-navigation/native-stack";

import { ProductView } from "../../Views/Products.View";
import { ProductDetailView } from "../../Views/ProductDetail.View";

const ProductStack = createNativeStackNavigator();

export const ProductNavigator = ({ navigation }) => {
  return (
    <ProductStack.Navigator
      screenOptions={{
        //...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}
    >
      <ProductStack.Screen name="Product" component={ProductView} />
      <ProductStack.Screen name="ProductDetail" component={ProductDetailView} />
    </ProductStack.Navigator>
  );
};
