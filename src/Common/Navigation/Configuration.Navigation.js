import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ConfigurationView } from "../../Views/Configuration.View";
import { ConfigurationConfirmationView } from "../../Views/ConfigurationConfirmation.View";

const ConfigurationStack = createNativeStackNavigator();

export const ConfigurationNavigator = ({ navigation }) => {
  return (
    <ConfigurationStack.Navigator
      screenOptions={{
        //...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}
      initialRouteName={"ConfigurationView"}
    >
      <ConfigurationStack.Screen
        name="Configuration"
        component={ConfigurationView}
      />
      <ConfigurationStack.Screen
        name="ConfigurationConfirmation"
        component={ConfigurationConfirmationView}
      />
    </ConfigurationStack.Navigator>
  );
};
