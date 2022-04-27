import {
  createNativeStackNavigator,
  TransitionPresets,
} from "@react-navigation/native-stack";

import { HomeView } from "../../Views/Home.View";

const HomeStack = createNativeStackNavigator();

export const HomeNavigator = ({ navigation }) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        //...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="HomeStack" component={HomeView} />
    </HomeStack.Navigator>
  );
};
