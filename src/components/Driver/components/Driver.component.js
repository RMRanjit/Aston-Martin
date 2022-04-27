import { View } from "react-native";
import { Text, Avatar, Badge } from "react-native-paper";

//TODO: Externalize Styles

export function Driver(props) {
  var file = props.file;
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Avatar.Image
        size={props.size}
        source={props.file}
        style={{
          marginLeft: 10,
          marginRight: 10,
          // borderWidth: 10,
          // borderColor: "#FFF056",

          borderStyle: "solid",
        }}
      />
      <Badge
        visible={props.selected}
        style={{ position: "absolute", top: 2, left: 8 }}
      >
        {""}
      </Badge>

      <Text
        style={{
          color: "#FFF056",
          fontFamily: "Optima",
          fontSize: 16,
        }}
      >
        {props.DriverName}
      </Text>
    </View>
  );
}
