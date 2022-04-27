import { BaseView } from "./src/Views/Base.View";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
//import { productsRequest } from "./src/Services/Product/product.service";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#175851",
    accent: "#FFF056",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <BaseView />
    </PaperProvider>
  );
}
